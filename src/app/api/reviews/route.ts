import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { userId, bookId, content, rating } = await req.json();

    if (!userId || !bookId || !content || !rating) {
      return new Response("Missing required fields", { status: 400 });
    }

    const review = await prisma.review.create({
      data: {
        userId,
        bookId,
        content,
        rating: parseInt(rating),
      },
    });

    return new Response(JSON.stringify(review), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bookId = searchParams.get('bookId');

  if (!bookId) {
    return new Response("Book ID required", { status: 400 });
  }

  try {
    const reviews = await prisma.review.findMany({
      where: { bookId },
      include: {
        user: {
          select: { name: true, image: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return new Response(JSON.stringify(reviews), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
