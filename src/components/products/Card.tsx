import React from "react";
import "./Products.css";
import Item from "./item";

type CardProp = {
  item: Item;
  addToCart: (item: Item) => void;
}

//TODO: Implement rating
const Card: React.FC<CardProp> = ({
  item,
  addToCart
}) => {
  // destructuring item
  const {
    id,
    title,
    authors,
    catagories,
    thumbnail,
    language,
    pageCount,
    publishedDate,
    publisher,
  } = item;


  // TODO: like to do some fancy fuction return. which i forgot the name.
  function handButtonClick() {
    addToCart(item)
  }

  ; return (
    <div className="card">
      {/* left */}
      <div className="left">
        <img src={thumbnail} />
      </div>

      {/* right */}
      <div className="right">
        <div>
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="flex gap-4">
            <div className="subtext">
              <p>by: {...authors}</p>
            </div>
            <div className="subtext">|</div>
            <div className="subtext">
              <p>{publishedDate}</p>
            </div>
          </div>
          <div className="category mt-2">
            <p>{...catagories}</p>
          </div>
        </div>
        <div className="btn">
          <button onClick={handButtonClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
