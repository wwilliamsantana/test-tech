import { prisma } from '@/lib/prisma'

export async function GET() {
  const drones = await prisma.drone.findMany({ orderBy: { id: 'asc' } })
  return Response.json(drones)
}
