import { Drone } from '@/types/all'

async function getDrones(): Promise<Drone[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/drones`,
    {
      next: {
        revalidate: 60, // seconds
      },
    },
  )

  if (!response.ok) {
    throw new Error('Falha ao buscar os dados dos drones')
  }

  return response.json()
}

const statusStyles: Record<Drone['status'], string> = {
  IDLE: 'bg-green-100 text-green-800',
  DELIVERING: 'bg-blue-100 text-blue-800',
  RETURNING: 'bg-yellow-100 text-yellow-800',
  CHARGING: 'bg-orange-100 text-orange-800',
}

export default async function DronesStatus() {
  const drones = await getDrones()

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold">Drones</h2>
      <div className="grid grid-cols-1 gap-2">
        {drones?.map((drone) => (
          <div key={drone.id} className="rounded-xl border p-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">{drone.name}</span>
              <span
                className={`rounded px-2 py-1 text-xs font-mono ${statusStyles[drone.status]}`}
              >
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
