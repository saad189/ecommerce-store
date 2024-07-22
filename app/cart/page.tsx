'use client'
import React, { useState } from 'react'
import { CartItem } from '../common/interfaces/cart'
import { getCartItems } from '../hooks/useCart';

const CartPage = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>(getCartItems());

    return (

        <div>
            <div>Cart</div>

            {cartItems.map(item => (
                <div key={item.id}>


                    <div>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartPage