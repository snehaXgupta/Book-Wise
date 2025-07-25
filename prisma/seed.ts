import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Genres
  const genres = [
    'Fantasy',
    'Mystery',
    'Romance',
    'Science Fiction',
    'Non-Fiction',
    'Thriller',
    'Biography',
    'Historical',
    'Young Adult',
    'Children',
  ];
  for (const name of genres) {
    await prisma.genre.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  // Books
  const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A classic novel of the Jazz Age.',
      coverUrl: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
      rating: 4.5,
      genreName: 'Historical',
      readCount: 120,
    },
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      description: 'A young wizard discovers his magical heritage.',
      coverUrl: 'https://covers.openlibrary.org/b/id/7984916-L.jpg',
      rating: 4.8,
      genreName: 'Fantasy',
      readCount: 200,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A romantic classic about manners and marriage.',
      coverUrl: 'https://covers.openlibrary.org/b/id/8226191-L.jpg',
      rating: 4.7,
      genreName: 'Romance',
      readCount: 150,
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel about totalitarianism.',
      coverUrl: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
      rating: 4.6,
      genreName: 'Science Fiction',
      readCount: 110,
    },
  ];
  for (const book of books) {
    const genre = await prisma.genre.findUnique({ where: { name: book.genreName } });
    if (!genre) continue;
    await prisma.book.upsert({
      where: { title: book.title },
      update: {},
      create: {
        title: book.title,
        author: book.author,
        description: book.description,
        coverUrl: book.coverUrl,
        rating: book.rating,
        genreId: genre.id,
        readCount: book.readCount,
      },
    });
  }

  // Quotes
  const quotes = [
    {
      text: 'A room without books is like a body without a soul.',
      author: 'Cicero',
      bookTitle: 'The Great Gatsby',
    },
    {
      text: 'So many books, so little time.',
      author: 'Frank Zappa',
      bookTitle: 'Harry Potter',
    },
    {
      text: 'There is no friend as loyal as a book.',
      author: 'Ernest Hemingway',
      bookTitle: '1984',
    },
  ];
  for (const quote of quotes) {
    const book = await prisma.book.findUnique({ where: { title: quote.bookTitle } });
    if (!book) continue;
    await prisma.quote.upsert({
      where: { text: quote.text },
      update: {},
      create: {
        text: quote.text,
        author: quote.author,
        bookId: book.id,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
