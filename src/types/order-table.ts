interface Leg {
  sequence: number
  orderId: string | number
  distanceKm: number
}

interface Route {
  droneId: string | number
  droneName: string
  totalDistanceKm: number
  legs: Leg[]
}

export interface RouteOrderTableApiResponse {
  routes: Route[]
  unassignedOrderIds: (string | number)[]
}
