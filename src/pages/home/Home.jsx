import React from 'react'
import Product from '../Product/Product'

function Home({
  products,
  isLoading,
  query,
  cart,
  handleAdd,
  totalprice,
 
}) {
  return (
    <div>
      <Product
        products={products}
        isLoading={isLoading}
        query={query}
        cart={cart}
        handleAdd={handleAdd}
        totalprice={totalprice}
       
        
      />
    </div>
  );
}

export default Home