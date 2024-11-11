import React from "react";
import "./Products.css";
import Item from "./item";

const Card: React.FC<Item> = ({
  id,
  title,
  authors,
  catagories,
  thumbnail,
  language,
  pageCount,
  publishedDate,
  publisher,
}) => {
  return (
    <div className="card">
      <div className="img">
        <img src={thumbnail} />
      </div>
      <div className="desc">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="price">
          <img src="public/images/berry.png" />
          <p>{pageCount}</p>
        </div>
        <div className="description">No des</div>
        <div className="category">
          <p>No Des</p>
          <p>No Rate</p>
        </div>
        <div className="btn">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
