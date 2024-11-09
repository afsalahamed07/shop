import React from "react";
import Product from "./Product";
import "./Products.css";

const Card: React.FC<Product> = ({
  id,
  title,
  price,
  category,
  image,
  rating,
}) => {
  return (
    <div className="card">
      <div className="img">
        <img src={image} />
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="price">
        <p>{price}</p>
      </div>
      <div className="category">
        <p>{category}</p>
        <p>{rating.rate}</p>
      </div>
    </div>
  );
};

export default Card;
