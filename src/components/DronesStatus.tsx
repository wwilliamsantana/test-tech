interface Drone {
  id: number | string
  name: string
  status: 'IDLE' | 'DELIVERING' | 'RETURNING' | 'CHARGING'
  maxPayloadKg: number
  maxRangeKm: number
  baseX: number
  baseY: number
  batteryPct: number
}

async function getDrones(): Promise<Drone[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/drones`,
    {
      next: {
        revalidate: 60, // 60 seconds
      },
    },
  )

  if (!response.ok) {
    throw new Error('Falha ao buscar os dados dos drones')
  }

  return response.json()
}

export default async function DronesStatus() {
  const drones = await getDrones()

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold">Drones</h2>

      <div className="grid grid-cols-1 gap-2  ">
        {drones?.map((drone) => (
          <div key={drone.id} className="rounded-xl border p-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">{drone.name}</span>
              <span className="rounded bg-gray-100 px-2 py-1 text-xs font-mono">
                {drone.status}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 text-sm text-gray-600">
              <div>Payload: {drone.maxPayloadKg} kg</div>
              <div>Alcance: {drone.maxRangeKm} km</div>
              <div>
                Base: ({drone.baseX},{drone.baseY})
              </div>
              <div>Bateria: {drone.batteryPct}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
