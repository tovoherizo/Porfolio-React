import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function Card({ item,  cart, handleAdd, }) {
  // const [prod, setProd] = useState({});
  const isItemCart = (item) => {
    const existeInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (existeInCart) {
      return existeInCart.counter;
    }
    return 0;
  };

  return (
    <div className="Card">
      <div className="img">
        <img src={item.image} className="card-image" alt="" />
      </div>
      <div className="titre">
        <h2>{item.title}</h2>
      </div>
      <div className="button">
        <Link to={`product/${item.id}`}>
          <button className="btn">View</button>
        </Link>
        <button 
          className="card-btn"
          onClick={() => handleAdd(item)}
          disabled={isItemCart(item)}>
          {isItemCart(item) ? (
            <MdOutlineRemoveShoppingCart size={37} 
            />
          ) : (
            <MdOutlineAddShoppingCart size={35} />
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;
