import CreateOrderForm from '@/components/CreateOrder'
import DronesStatus from '@/components/DronesStatus'
import OrdersTable from '@/components/OrderTable'

export default function Details() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <CreateOrderForm />
        <OrdersTable />
      </div>
      <div className="lg:col-span-1">
        <DronesStatus />
      </div>
    </div>
  )
}
