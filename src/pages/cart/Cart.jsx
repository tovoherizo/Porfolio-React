import React from "react";
import "./Cart.css";

import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";


function Cart({ cart, setCart, totalprice, totalCount, item}) {
  const navigate = useNavigate();

  const deletItem = (item) => {
    setCart(cart.filter((c) => c.id !== item.id));
  };
  const increment = (productId) => {
    const updateCart = cart.map((p) => {
      if (p.id === productId) {
        return { ...p, counter: p.counter + 1 };
      }
      return p;
    });
    setCart(updateCart);
  };
  const decrement = (productId) => {
    const updateCart = cart
      .map((p) => {
        if (p.id === productId) {
          return { ...p, counter: p.counter - 1 };
        }
        return p;
      })
      .filter((prod) => prod.counter !== 0);
    setCart(updateCart);
  };

  return (
    <>
      <body>
        <div className="solde">
          <h2 className="total">
            TOTAL PRICE :
            <span className="vidiny"> ${totalprice.toFixed(2)}</span>
          </h2>
          {/* //2chiffre apres virgule toFixed(2) */}
          <h1 className="totalcount">
            <FaBasketShopping />

            <span className="isany">{totalCount}</span>
          </h1>

          <button className="passer" onClick={() => navigate("/commande")}>
            Passer une commande
          </button>
        </div>

        <div key={item} className="panier">
          {cart.length < 1 && (
            <div className="vide">
              <GiShoppingCart size={300} />
              <br />
              <h1 className="cadi">Panier vide</h1>
            </div>
          )}
          {cart.map((item) => (
            <div key={item.id} className="cartimg" style={{ width: "18rem" }}>
              <img className="cartsary" src={item.image} alt="" />
              <div className="cardbody">
                <div className="card-title">{item.title}</div>
                <div className="prix">${item.price * item.counter}</div>
                <div className="bokotra">
                  <button
                    className="boutton"
                    onClick={() => decrement(item.id)}>
                    -
                  </button>
                  <div className="counter">{item.counter}</div>
                  <button
                    className="boutton"
                    onClick={() => increment(item.id)}>
                    +
                  </button>

                  <button className="boutton" onClick={() => deletItem(item)}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </body>
    </>
  );
}

export default Cart;
