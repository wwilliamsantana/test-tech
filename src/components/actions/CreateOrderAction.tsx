'use server'

import { revalidatePath } from 'next/cache'

interface FormState {
  message: string | null
}

export async function createOrderAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const data = {
      customerX: Number(formData.get('customerX')),
      customerY: Number(formData.get('customerY')),
      weightKg: Number(formData.get('weightKg')),
      priority: formData.get('priority'),
    }

    if (!data.priority || data.weightKg <= 0) {
      return { message: 'Dados inválidos. Verifique o peso e a prioridade.' }
    }

    console.log('Criando pedido no servidor com os dados:', data)
    // Aqui você faria a chamada para o seu banco de dados ou serviço externo
    // ALERT - CHAMADA PARA BANCO - Exmeplo : const newOrder = await db.order.create({ data });

    // Simulação de sucesso
    const newOrderId = Math.floor(Math.random() * 1000)

    // Limpa o cache da página de pedidos, se houver uma, para exibir o novo pedido
    revalidatePath('/pedidos')

    return { message: `Pedido #${newOrderId} criado com sucesso!` }
  } catch (error) {
    console.error(error)
    return { message: 'Erro inesperado ao criar o pedido.' }
  }
}
