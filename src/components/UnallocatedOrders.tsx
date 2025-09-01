import { Order } from '@/types/all'
import { AlertTriangle } from 'lucide-react' // Ícone para dar destaque (instale com: npm install lucide-react)

interface UnallocatedOrdersProps {
  orders: Order[]
}

export default function UnallocatedOrders({ orders }: UnallocatedOrdersProps) {
  if (orders.length === 0) {
    return null
  }

  return (
    <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 p-4 shadow-md">
      <div className="mb-3 flex items-center gap-2">
        <AlertTriangle className="h-6 w-6 text-amber-600" />
        <h3 className="text-lg font-semibold text-amber-800">
          {orders.length} Pedido(s) Não Alocado(s)
        </h3>
      </div>
      <p className="mb-4 text-sm text-amber-700">
        Estes pedidos não puderam ser incluídos em nenhuma rota. Motivos comuns
        incluem falta de drones com capacidade de carga ou alcance suficientes.
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg border border-amber-300 bg-white p-3 text-sm"
          >
            <div className="mb-2 flex justify-between font-bold text-gray-800">
              <span>Pedido #{order.id}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold
                  ${order.priority === 'HIGH' && 'bg-red-100 text-red-800'}
                  ${order.priority === 'MEDIUM' && 'bg-yellow-100 text-yellow-800'}
                  ${order.priority === 'LOW' && 'bg-green-100 text-green-800'}
                `}
              >
                {order.priority}
              </span>
            </div>
            <div className="space-y-1 text-gray-600">
              <div>
                <span className="font-medium">Peso:</span> {order.weightKg} kg
              </div>
              <div>
                <span className="font-medium">Destino:</span> ({order.customerX}
                , {order.customerY})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
