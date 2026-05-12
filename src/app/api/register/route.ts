import prisma from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!email || !password || !name) {
    return new Response("Missing fields", { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return new Response("User already exists", { status: 409 });
  }

  const hashedPassword = await hashPassword(password);
  await prisma.user.create({
    data: { email, name, hashedPassword },
  });

  return new Response("User registered", { status: 201 });
}
