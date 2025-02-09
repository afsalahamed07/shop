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
  description,
}) => {
  return (
    <div className="card">
      <div className="img">
        <img src={image} />
      </div>
      <div className="desc">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="price">
          <img src="public/images/berry.png" />
          <p>{price}</p>
        </div>
        <div className="description">{description}</div>
        <div className="category">
          <p>{category}</p>
          <p>{rating.rate}</p>
        </div>
        <div className="btn">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
