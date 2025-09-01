import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const schemaPost = z.object({
  customerX: z.number().int(),
  customerY: z.number().int(),
  weightKg: z.number().positive(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
})

export async function POST(req: NextRequest) {
  const response = await req.json()
  const data = schemaPost.parse(response)

  try {
    const order = await prisma.order.create({ data })
    return NextResponse.json(order, { status: 201 })
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message ?? 'Invalid payload' },
      { status: 400 },
    )
  }
}
