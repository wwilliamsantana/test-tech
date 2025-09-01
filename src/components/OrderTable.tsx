import { recalculateRouteAction } from '@/app/actions/recalculateROuteAction'

export default async function OrdersTable() {
  const data = {
    routes: [
      {
        droneId: 'drone-alpha-001',
        droneName: 'Drone Alfa',
        totalDistanceKm: 12.8,
        legs: [
          { sequence: 1, orderId: 101, distanceKm: 4.5 },
          { sequence: 2, orderId: 103, distanceKm: 5.2 },
          { sequence: 3, orderId: 102, distanceKm: 3.1 },
        ],
      },
      {
        droneId: 'drone-beta-007',
        droneName: 'Drone Beta',
        totalDistanceKm: 9.5,
        legs: [{ sequence: 1, orderId: 201, distanceKm: 9.5 }],
      },
    ],
    unassignedOrderIds: [301, 302],
  }

  const unassigned = data?.unassignedOrderIds ?? []
  const routes = data?.routes ?? []

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Rotas (Simulação)</h2>
        <form action={recalculateRouteAction}>
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 active:scale-95 transition-transform"
          >
            Recalcular
          </button>
        </form>
      </div>

      {routes.length === 0 && unassigned.length === 0 && (
        <p className="text-sm text-gray-500">Nenhuma rota para exibir.</p>
      )}

      <div className="space-y-4">
        {routes.map((route: any) => (
          <div
            key={`${route.droneId}-${route.totalDistanceKm}`}
            className="rounded-xl border p-3"
          >
            <div className="flex items-center justify-between">
              <div className="font-medium">{route.droneName}</div>
              <div className="text-sm text-gray-600">
                Distância total: {route.totalDistanceKm.toFixed(2)} km
              </div>
            </div>
            <ol className="mt-2 list-decimal pl-5 text-sm text-gray-700">
              {route.legs.map((leg: any) => (
                <li key={leg.sequence}>
                  Pedido #{leg.orderId} — {leg.distanceKm.toFixed(2)} km
                </li>
              ))}
            </ol>
          </div>
        ))}
        {unassigned.length > 0 && (
          <div className="rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-800">
            Pedidos não alocados: {unassigned.join(', ')}
          </div>
        )}
      </div>
    </div>
  )
}
