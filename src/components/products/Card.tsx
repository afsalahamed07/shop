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
      {/* left */}
      <div className="left">
        <img src={thumbnail} />
      </div>

      {/* right */}
      <div className="right">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="author">
          <p>by: {...authors}</p>
        </div>
        <div className="category">
          <p>{...catagories}</p>
        </div>
        <div className="btn">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
