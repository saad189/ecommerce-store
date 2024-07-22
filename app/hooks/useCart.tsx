
import { CartItem } from "../common/interfaces/cart";

let cart: CartItem[] = [];

export const addItemToCart = (item: CartItem) => {
    const existingProduct = cart.find(({ id }) => id === item.id);
    if (existingProduct) {
        cart = cart.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    } else {
        item.quantity = 1;
        cart = [...cart, item];
    }

    console.log('Cart NOW:', cart)
};


export const getCartItems = () => {
    return cart;
}