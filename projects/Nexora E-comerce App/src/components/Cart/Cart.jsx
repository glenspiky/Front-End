import React from 'react'
import "./Cart.css"
import { useCart } from '../../context/CartContext'
export const Cart = () => {
  const {cart} = useCart
  console.log(cart);
  
  return (
    <div></div>
  )
}
