interface Point {
  x: number
  y: number
}

interface Order {
  id: number
  customerX: number
  customerY: number
  weightKg: number
}

interface Drone {
  id: number
  name: string
  baseX: number
  baseY: number
  maxPayloadKg: number
  maxRangeKm: number
}

interface RouteLeg {
  orderId: number
  sequence: number
  distanceKm: number
}

interface DroneRoute {
  droneId: number
  droneName: string
  totalDistanceKm: number
  legs: RouteLeg[]
}

const calculateDistance = (p1: Point, p2: Point): number => {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

const findNextBestOrder = (
  currentPosition: Point,
  availableOrders: Order[],
  currentLoadKg: number,
  maxPayloadKg: number,
): { order: Order; distance: number } | null => {
  let bestCandidate: { order: Order; distance: number } | null = null

  for (const order of availableOrders) {
    if (currentLoadKg + order.weightKg > maxPayloadKg) {
      continue
    }

    const distance = calculateDistance(currentPosition, {
      x: order.customerX,
      y: order.customerY,
    })

    if (!bestCandidate || distance < bestCandidate.distance) {
      bestCandidate = { order, distance }
    }
  }

  return bestCandidate
}

const buildSingleTrip = (
  drone: Drone,
  base: Point,
  unassignedOrders: Map<number, Order>,
): { route: DroneRoute; assignedOrderIds: number[] } | null => {
  const tripLegs: RouteLeg[] = []
  const assignedInThisTrip = new Set<number>()

  let currentLoadKg = 0
  let tripDistanceKm = 0
  let currentPosition = { x: drone.baseX, y: drone.baseY }

  while (true) {
    const availableOrders = Array.from(unassignedOrders.values())
    const bestCandidate = findNextBestOrder(
      currentPosition,
      availableOrders,
      currentLoadKg,
      drone.maxPayloadKg,
    )

    if (!bestCandidate) {
      break
    }

    const { order: nextOrder, distance: distanceToCustomer } = bestCandidate
    const nextPosition = { x: nextOrder.customerX, y: nextOrder.customerY }
    const returnToBaseDistance = calculateDistance(nextPosition, base)

    if (
      tripDistanceKm + distanceToCustomer + returnToBaseDistance >
      drone.maxRangeKm
    ) {
      break
    }

    tripLegs.push({
      orderId: nextOrder.id,
      sequence: tripLegs.length + 1,
      distanceKm: distanceToCustomer,
    })

    tripDistanceKm += distanceToCustomer
    currentLoadKg += nextOrder.weightKg
    currentPosition = nextPosition

    assignedInThisTrip.add(nextOrder.id)
    unassignedOrders.delete(nextOrder.id)
  }

  if (tripLegs.length === 0) {
    return null
  }

  tripDistanceKm += calculateDistance(currentPosition, base)

  const route: DroneRoute = {
    droneId: drone.id,
    droneName: drone.name,
    totalDistanceKm: Number(tripDistanceKm.toFixed(2)),
    legs: tripLegs,
  }

  return { route, assignedOrderIds: Array.from(assignedInThisTrip) }
}

export function allocateOrders(drones: Drone[], orders: Order[]) {
  const unassignedOrders = new Map(orders.map((o) => [o.id, o]))
  const finalRoutes: DroneRoute[] = []
  const base: Point = { x: 0, y: 0 }

  for (const drone of drones) {
    while (unassignedOrders.size > 0) {
      const tripResult = buildSingleTrip(drone, base, unassignedOrders)

      if (tripResult) {
        finalRoutes.push(tripResult.route)
      } else {
        break
      }
    }
  }

  return {
    routes: finalRoutes,
    unassignedOrderIds: Array.from(unassignedOrders.keys()),
  }
}
