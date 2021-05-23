import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addTobasket = () => {
    //dispatch items in the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {/* The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

          fill(value, start, end) */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />

      <button onClick={addTobasket}>Add to cart</button>
    </div>
  );
}

export default Product;
