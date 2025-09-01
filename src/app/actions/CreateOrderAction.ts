'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { OrderPriority } from '../../../prisma/generated/prisma'

interface FormState {
  message: string | null
}

export async function createOrderAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const orderData = {
      customerX: Number(formData.get('customerX')),
      customerY: Number(formData.get('customerY')),
      weightKg: Number(formData.get('weightKg')),
      priority: formData.get('priority'),
    }

    if (!orderData.priority || orderData.weightKg <= 0) {
      return { message: 'Dados inválidos. Verifique o peso e a prioridade.' }
    }

    console.log('Criando pedido no servidor com os dados:', orderData)
    // Aqui você faria a chamada para o seu banco de dados ou serviço externo
    // ALERT - CHAMADA PARA BANCO - Exmeplo
    const newOrder = await prisma.order.create({
      data: {
        customerX: orderData.customerX,
        customerY: orderData.customerY,
        weightKg: orderData.weightKg,
        priority: orderData.priority as OrderPriority,
      },
    })

    revalidatePath('/details')

    return { message: `Pedido ${newOrder.id} criado com sucesso!` }
  } catch (error) {
    console.error(error)
    return { message: 'Erro inesperado ao criar o pedido.' }
  }
}
