import { allocateOrders } from '@/lib/allocation'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const [orders, drones] = await Promise.all([
    prisma.order.findMany({
      where: {
        status: 'PENDING',
      },
      orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }],
    }),
    prisma.drone.findMany({
      where: {
        status: 'IDLE',
      },
      orderBy: { id: 'asc' },
    }),
  ])

  const result = allocateOrders(drones, orders)

  return Response.json(result)
}
