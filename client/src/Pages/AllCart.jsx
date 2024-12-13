
import React, { useContext } from 'react'
import { CartContext } from '../Provider/CartProvider';

const AllCart = () => {

    const { cart } = useContext(CartContext);
console.log(cart)
  return (
    <div>
      <h1> Cart List</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.item_name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>

  )
}

export default AllCart