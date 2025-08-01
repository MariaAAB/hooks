import React from 'react'
import { useContext } from 'react'
import CartContext from './CarContext'

const AppContext = () => {
  const {products} = useContext(CartContext)
  return (
    <ul>
      {products?.map(product => product.id)}
    </ul>
  )
}

export default AppContext
