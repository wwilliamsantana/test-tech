import { allocateOrders } from '@/lib/allocation'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const [orders, drones] = await Promise.all([
    prisma.order.findMany({
      orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }],
    }),
    prisma.drone.findMany({ orderBy: { id: 'asc' } }),
  ])

  const result = allocateOrders(drones, orders)

  return Response.json(result)
}
