'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

interface FormState {
  message: string | null
}

const orderSchema = z.object({
  customerX: z.coerce.number().int(),
  customerY: z.coerce.number().int(),
  weightKg: z.coerce.number().positive('O peso deve ser um número positivo.'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
})

export async function createOrderAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const data = Object.fromEntries(formData.entries())
    const validationResult = orderSchema.safeParse(data)

    if (!validationResult.success) {
      const firstError = validationResult.error.message
      return { message: `Dados inválidos: ${firstError}` }
    }

    const newOrder = await prisma.order.create({
      data: validationResult.data,
    })

    revalidatePath('/')

    return { message: `Pedido #${newOrder.id} criado com sucesso!` }
  } catch (error) {
    console.error(error)
    return { message: 'Erro inesperado ao criar o pedido.' }
  }
}
