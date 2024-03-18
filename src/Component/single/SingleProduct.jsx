import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./SingleProduct.css";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";





function SingleProduct({
  handleAdd,
  item,
  
 
 
}) {
  const [single, setSingle] = useState({});
  const [loading, SetIsLoading] = useState(false);
  const { id } = useParams();
  
  

  const getSingleProduct = async () => {
    SetIsLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setSingle(data);
      // console.table(data);
      SetIsLoading(false);
    } catch (err) {
      // console.log(err);
    } finally {
      SetIsLoading(false);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      {loading && <Loader />}
      <div className="Product">
        <div className="image">
          <div>
            <img
              src={single.image}
              alt=""
              className="imgmin"
              style={{ height: "158px" }}
            />
          </div>
          <div className="image-zoom">
            <img src={single.image} alt="" className="imagemax" />
          </div>
        </div>
        <div className="text">
          <h2 className="titre-text">{single.title}</h2>
          <h2 className="price"> {single.price}$</h2>
          <h2>categorie:{single.category}</h2>
          <p>{single.description}</p>
          <br />
          <div className="butt">
            <button
              className="btne"
              onClick={() => handleAdd(single)}
              disabled={isItemCart(single)}>
              {isItemCart(item) ? (
                <MdOutlineRemoveShoppingCart size={37} />
              ) : (
                <MdOutlineAddShoppingCart size={35} />
              )}
            </button>
            <button className="btne">
              <MdOutlineAddShoppingCart size={35} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
