// lib/allocation.ts
import type { Drone, Order, Point, DroneRoute, RouteLeg } from '../types/all'

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
  let bestScore = -Infinity

  const priorityValues = { HIGH: 3, MEDIUM: 2, LOW: 1 }
  const PRIORITY_WEIGHT = 100 // Fator de peso: Aumente para priorizar mais a prioridade sobre a distância

  for (const order of availableOrders) {
    if (currentLoadKg + order.weightKg > maxPayloadKg) {
      continue
    }

    const distance = calculateDistance(currentPosition, {
      x: order.customerX,
      y: order.customerY,
    })

    // Score que recompensa alta prioridade e baixa distância
    const score = priorityValues[order.priority] * PRIORITY_WEIGHT - distance

    if (score > bestScore) {
      bestScore = score
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
  let currentPosition = { ...base } // Começa na base do drone

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

    // Verifica se a viagem de ida e volta está dentro do alcance
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

  // Adiciona a distância final de retorno à base
  tripDistanceKm += calculateDistance(currentPosition, base)

  const route: DroneRoute = {
    droneId: drone.id,
    droneName: drone.name,
    totalDistanceKm: tripDistanceKm, // Mantenha a precisão, formate na UI
    legs: tripLegs,
  }

  return { route, assignedOrderIds: Array.from(assignedInThisTrip) }
}

export function allocateOrders(drones: Drone[], orders: Order[]) {
  const unassignedOrders = new Map(orders.map((o) => [o.id, o]))
  const finalRoutes: DroneRoute[] = []

  for (const drone of drones) {
    const droneBase = { x: drone.baseX, y: drone.baseY }
    while (unassignedOrders.size > 0) {
      // Passa a base específica do drone para a função
      const tripResult = buildSingleTrip(drone, droneBase, unassignedOrders)

      if (tripResult) {
        finalRoutes.push(tripResult.route)
      } else {
        // Se não consegue montar mais nenhuma viagem, passa para o próximo drone
        break
      }
    }
  }

  return {
    routes: finalRoutes,
    unassignedOrderIds: Array.from(unassignedOrders.values()),
  }
}
