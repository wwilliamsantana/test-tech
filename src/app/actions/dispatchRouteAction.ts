'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function dispatchRouteAction(formData: FormData) {
  const droneId = Number(formData.get('droneId'))

  if (!droneId) {
    throw new Error('IDs do drone ou dos pedidos não fornecidos.')
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.drone.update({
        where: { id: droneId },
        data: { status: 'CHARGING' },
      })
    })

    revalidatePath('/')

    return {
      message: `Drone #${droneId} despachado com ${droneId} pedido(s)!`,
    }
  } catch (error) {
    console.error('Falha ao despachar a rota:', error)
    return { error: 'Ocorreu um erro ao despachar a rota.' }
  }
}
