# BookWise 📚

A modern book management application built with Next.js, Prisma, and PostgreSQL. Keep track of your reading journey with quotes, ratings, and personalized recommendations.

## Features

- 📖 Book catalog with genres and ratings
- 💬 Save and organize your favorite quotes
- 🔐 User authentication with NextAuth.js
- 🎨 Modern UI with Tailwind CSS
- 📊 Reading statistics and progress tracking

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready configuration

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd book-wise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NEXTAUTH_SECRET`: A random secret for NextAuth.js
   - `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for development)

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see your application.

## Deploy on Vercel

This project is optimized for Vercel deployment with automatic database migrations and proper environment handling.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/book-wise)

### Manual Deployment

1. **Connect your repository to Vercel**
   - Push your code to GitHub
   - Import your project in the Vercel dashboard

2. **Configure environment variables**
   Set the following in your Vercel project settings:
   ```
   DATABASE_URL=your-production-database-url
   NEXTAUTH_SECRET=your-production-secret
   NEXTAUTH_URL=https://your-app.vercel.app
   ```

3. **Database Setup**
   - Use a managed PostgreSQL service (Vercel Postgres, PlanetScale, Supabase, etc.)
   - The build process will automatically run migrations

4. **Deploy**
   - Vercel will automatically build and deploy your application
   - Database migrations run automatically during build

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js sessions | ✅ |
| `NEXTAUTH_URL` | Your application URL | ✅ |
| `NODE_ENV` | Environment (development/production) | Auto-set |

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
└── lib/                 # Utility functions and configurations
    ├── auth.ts         # Authentication utilities
    └── prisma.ts       # Database client
prisma/
├── schema.prisma       # Database schema
└── seed.ts            # Database seeding script
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed the database

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE). 
