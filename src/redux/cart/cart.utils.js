import CartItem from '../../components/cart-item/cart.component'

export const addItemTocart =(cartItems, CartItemToAdd) =>{
  const existingCartItem = cartItems.find(
    cartItem=> CartItem.id === CartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map(cartItem=>  CartItem.id === CartItemToAdd.id?
      {
      ...cartItem, quantity: cartItem.quantity+1
    } :cartItem
    );
  }


  return [...cartItems,{...CartItemToAdd, quantity:1}];
};

 
