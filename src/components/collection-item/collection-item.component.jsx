import React from 'react';
import {connect } from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'
import CustomButton from '../custom-button/custom-buttton.component'
import './collection-item.styles.scss'

const CollectionItem = ({item, addItem }) => {
const {id, name, price,imageUrl} = item;
  
  return (

    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />

      <div className="collection-footer">
  <span className="name">{name}</span>
  <span className="price">{price}</span>
  <span className="id"> {id} </span>

      </div>
    <CustomButton onClick={()=> addItem(item)} inverted>Add to Cart</CustomButton>
    </div>
  )};

const mapDispatchToProps = dispatch =>({
  addItem: item => dispatch(addItem(item))
})
 export default connect(null, mapDispatchToProps)(CollectionItem);