// lib/types.ts

export interface Point {
  x: number
  y: number
}

export type OrderPriority = 'LOW' | 'MEDIUM' | 'HIGH'

export interface Order {
  id: number
  customerX: number
  customerY: number
  weightKg: number
  priority: OrderPriority
}

export type DroneStatus = 'IDLE' | 'DELIVERING' | 'RETURNING' | 'CHARGING'

export interface Drone {
  id: number
  name: string
  baseX: number
  baseY: number
  maxPayloadKg: number
  maxRangeKm: number
  batteryPct: number
  status: DroneStatus
}

export interface RouteLeg {
  orderId: number
  sequence: number
  distanceKm: number
}

export interface DroneRoute {
  droneId: number | string
  droneName: string
  totalDistanceKm: number
  legs: RouteLeg[]
}
