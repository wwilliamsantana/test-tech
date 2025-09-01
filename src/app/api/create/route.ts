import { NextRequest } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const orderSchema = z.object({
  customerX: z.number().int(),
  customerY: z.number().int(),
  weightKg: z.number().positive(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
})

export async function POST(req: NextRequest) {
  const response = await req.json()
  const data = orderSchema.parse(response)
  const order = await prisma.order.create({ data })

  return Response.json(order.id, { status: 201 })
}
