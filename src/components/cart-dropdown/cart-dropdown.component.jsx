import  React from "react";
import {connect } from 'react-redux'
import CustomButton from '../custom-button/custom-buttton.component';
import CartItem from '../cart-item/cart.component'
import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItems})=>(
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => (<CartItem key ={cartItem.id} item={cartItem}/>
        ))
        
      }
    </div>
    <CustomButton>Go To CheckOut </CustomButton>
  </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
  cartItems
})
export default connect(mapStateToProps)(CartDropDown);