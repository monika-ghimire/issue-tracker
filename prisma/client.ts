import { PrismaClient } from '@prisma/client'

// Function to create a new PrismaClient instance
const prismaClientSingleton = () => {
  return new PrismaClient()
}

// Type for PrismaClient singleton
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// Attach PrismaClient to globalThis to reuse during hot reloads
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClientSingleton
}

// Use existing PrismaClient or create a new one
const prisma: PrismaClientSingleton = globalForPrisma.prisma ?? prismaClientSingleton()

// Save the instance in globalThis (so it persists in dev)
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
