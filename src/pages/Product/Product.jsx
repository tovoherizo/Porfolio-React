import React from 'react'
import Card from './Card';
import './product.css'
import Loader from '../../Component/Loader/Loader';

function Product({
  products,
  isLoading,
  query,
  onAdd,
  cart,
  handleAdd,
  totalprice,

}) {
  //  console.table(products);
  return (
    <div className="productlist">
      {isLoading && <Loader />}
      {products
        .filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((item) => (
          <Card
            key={item.id}
            item={item}
            onAdd={onAdd}
            cart={cart}
            handleAdd={handleAdd}
            totalprice={totalprice}
           
          />
        ))}
    </div>
  );
}

export default Product