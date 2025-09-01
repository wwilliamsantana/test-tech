'use client'

import { createOrderAction } from '@/app/actions/CreateOrderAction'
import { useFormState, useFormStatus } from 'react-dom'

const initialState: { message: string | null } = {
  message: null,
}

export default function CreateOrderForm() {
  const [state, formAction] = useFormState(createOrderAction, initialState)
  const { pending } = useFormStatus()

  return (
    <form
      action={formAction}
      className="grid grid-cols-2 gap-4 rounded-2xl border bg-white p-5 shadow-sm"
    >
      <h2 className="col-span-2 text-xl font-semibold text-gray-800">
        Novo Pedido
      </h2>

      <label className="text-sm font-medium text-gray-700">
        Coordenada X
        <input
          type="number"
          name="customerX"
          required
          className="mt-1 w-full rounded-md border p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          defaultValue={0}
        />
      </label>

      <label className="text-sm font-medium text-gray-700">
        Coordenada Y
        <input
          type="number"
          name="customerY"
          required
          className="mt-1 w-full rounded-md border p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          defaultValue={0}
        />
      </label>

      <label className="text-sm font-medium text-gray-700">
        Peso (kg)
        <input
          type="number"
          name="weightKg"
          step="0.1"
          min="0.1"
          required
          className="mt-1 w-full rounded-md border p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          defaultValue={1}
        />
      </label>

      <label className="text-sm font-medium text-gray-700">
        Prioridade
        <select
          name="priority"
          required
          className="mt-1 w-full rounded-md border p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          defaultValue="MEDIUM"
        >
          <option value="LOW">Baixa</option>
          <option value="MEDIUM">Média</option>
          <option value="HIGH">Alta</option>
        </select>
      </label>

      <div className="col-span-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:opacity-70"
        >
          {pending ? 'Enviando...' : 'Criar Pedido'}
        </button>
        {state?.message && (
          <span className="text-sm text-gray-600">{state.message}</span>
        )}
      </div>
    </form>
  )
}
