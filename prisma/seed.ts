import { PrismaClient, DroneStatus } from './generated/prisma'

const prisma = new PrismaClient()

async function main() {
  await prisma.leg.deleteMany({})
  await prisma.trip.deleteMany({})
  await prisma.order.deleteMany({})
  await prisma.drone.deleteMany({})

  const defaultPayload = Number(process.env.DRONE_DEFAULT_MAX_PAYLOAD_KG ?? 5)
  const defaultRange = Number(process.env.DRONE_DEFAULT_MAX_RANGE_KM ?? 15)

  await prisma.drone.createMany({
    data: [
      {
        name: 'Drone A',
        maxPayloadKg: defaultPayload,
        maxRangeKm: defaultRange,
        status: DroneStatus.IDLE,
        baseX: 0,
        baseY: 0,
      },
      {
        name: 'Drone B',
        maxPayloadKg: defaultPayload,
        maxRangeKm: defaultRange,
        status: DroneStatus.CHARGING,
        baseX: 0,
        baseY: 0,
      },
      {
        name: 'Drone C',
        maxPayloadKg: defaultPayload,
        maxRangeKm: defaultRange,
        status: DroneStatus.MAINTENANCE,
        baseX: 0,
        baseY: 0,
      },
      {
        name: 'Drone C',
        maxPayloadKg: defaultPayload,
        maxRangeKm: defaultRange,
        status: DroneStatus.CHARGING,
        baseX: 0,
        baseY: 0,
      },
    ],
  })

  await prisma.order.createMany({
    data: [
      {
        customerX: 2,
        customerY: 3,
        weightKg: 1.2,
        priority: 'HIGH',
      },
      {
        customerX: 5,
        customerY: 1,
        weightKg: 2.0,
        priority: 'MEDIUM',
      },
      {
        customerX: 4,
        customerY: 4,
        weightKg: 0.8,
        priority: 'LOW',
      },
      {
        customerX: 8,
        customerY: 2,
        weightKg: 1.5,
        priority: 'HIGH',
      },
      {
        customerX: 6,
        customerY: 6,
        weightKg: 3.0,
        priority: 'MEDIUM',
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
