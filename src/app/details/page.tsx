import CreateOrderForm from '@/components/CreateOrder'

export default function Details() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <CreateOrderForm />
        <div>Section 2</div>
      </div>
      <div className="lg:col-span-1">
        <div>Section 3</div>
      </div>
    </div>
  )
}
