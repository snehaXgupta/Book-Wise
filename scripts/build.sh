#!/bin/bash

# Vercel build script for BookWise
# This script runs during the build phase on Vercel

echo "🔨 Starting Vercel build process..."

# Generate Prisma client
echo "📦 Generating Prisma client..."
npx prisma generate

# Run database migrations (only if DATABASE_URL is set)
if [ -n "$DATABASE_URL" ]; then
  echo "🗄️ Running database migrations..."
  npx prisma migrate deploy
else
  echo "⚠️ DATABASE_URL not set, skipping migrations"
fi

# Build Next.js application
echo "🏗️ Building Next.js application..."
npm run build

echo "✅ Build completed successfully!"