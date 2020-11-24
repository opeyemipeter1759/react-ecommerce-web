import react from 'react';
import './collection-item.styles.scss'

const CollectionItem = ({id, name, price,imageUrl}) => {
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />

      <div className="collection-footer">
  <span className="name">{name}</span>
  <span className="price">{price}</span>
  <span className="id"> {id} </span>

      </div>

    </div>
  );
};

export default CollectionItem;