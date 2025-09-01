// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache'

export async function recalculateRouteAction() {
  console.log('Revalidando a rota no servidor...')

  revalidatePath('/details')
}
