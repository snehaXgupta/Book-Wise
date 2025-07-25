import { PrismaClient } from '@prisma/client';
import { verifyPassword } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.hashedPassword) {
    return new Response("Invalid credentials", { status: 401 });
  }

  const isValid = await verifyPassword(password, user.hashedPassword);
  if (!isValid) {
    return new Response("Invalid credentials", { status: 401 });
  }

  return new Response(JSON.stringify({ message: "Login successful", user }), { status: 200 });
}
