import { useContext } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import OrdersCards from '../../Components/OrdersCards'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'

const MyOrders = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => {
          <Link key={index} to={`/my-orders/${order.id}`}>
            <OrdersCards totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
          </Link>
        })
      }
    </Layout>
  )
}

export default MyOrders