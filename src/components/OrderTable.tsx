import { recalculateRouteAction } from '@/app/actions/recalculateRouteAction'
import { DroneRoute, RouteLeg } from '@/types/all'
import UnallocatedOrders from './UnallocatedOrders'
import { dispatchRouteAction } from '@/app/actions/dispatchRouteAction'

interface RouteData {
  unassignedOrderIds: number[]
  routes: DroneRoute[]
}

async function getRouteData(): Promise<RouteData | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      console.error('Falha ao buscar dados da rota:', res.statusText)
      return null
    }

    return res.json()
  } catch (error) {
    console.error('Erro de rede ao buscar dados da rota:', error)
    return null
  }
}

export default async function OrdersTable() {
  const data = await getRouteData()

  if (!data) {
    return (
      <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-red-600">
          Erro ao Carregar Rotas
        </h2>
        <p className="text-sm text-gray-500">
          Não foi possível buscar os dados da simulação. Tente recalcular ou
          atualize a página.
        </p>
      </div>
    )
  }

  const { unassignedOrderIds: unassigned, routes } = data

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Rotas (Simulação)</h2>
        <form action={recalculateRouteAction}>
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-4 py-2 text-white transition-transform hover:bg-blue-700 active:scale-95"
          >
            Recalcular
          </button>
        </form>
      </div>

      {routes.length === 0 && unassigned.length === 0 && (
        <p className="text-sm text-gray-500">Nenhuma rota para exibir.</p>
      )}

      <div className="space-y-4">
        {routes.map((route: DroneRoute) => (
          <div key={route.droneId} className="rounded-xl border p-3">
            <div className="flex items-center justify-between">
              <div className="font-medium">{route.droneName}</div>
              <div className="text-sm text-gray-600">
                Distância total: {route.totalDistanceKm.toFixed(2)} km
              </div>
            </div>
            <ol className="mt-2 list-decimal pl-5 text-sm text-gray-700">
              {route.legs.map((leg: RouteLeg) => (
                <li key={leg.orderId}>
                  Pedido #{leg.orderId} — {leg.distanceKm.toFixed(2)} km
                </li>
              ))}
            </ol>

            <div className="mt-4 flex justify-end">
              <form action={dispatchRouteAction}>
                <input type="hidden" name="droneId" value={route.droneId} />

                <button
                  type="submit"
                  className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 active:scale-95"
                >
                  Despachar Drone
                </button>
              </form>
            </div>
          </div>
        ))}
        <UnallocatedOrders orders={unassigned} />
      </div>
    </div>
  )
}
