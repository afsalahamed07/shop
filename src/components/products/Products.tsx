import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Products.css";
import { fetchBooks, sanitiseBook } from "../../infra/book-api";
import Item from "./item";
import { useCart } from "../../App";

// NOTE: here the products means books. might change the name in future
// NOTE: may be i could make this about programming books
const Products: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<Item[] | null>(null);
  const pages: number = items ? Math.ceil(items.length / 5) : 0;
  const { addToCart } = useCart();

  function previouse() {
    if (page != 0) setPage((prev) => prev - 1);
  }

  function next() {
    if (page < pages - 1) setPage((prev) => prev + 1);
  }


  useEffect(() => {
    async function apiCall() {
      const data = await fetchBooks();
      setItems(sanitiseBook(data));
    }

    apiCall();
  }, []);

  return (
    <div className="products-parent">
      <div className={`products grid-rows-5`}>
        {items && items
          .slice(
            page * 5,
            page * 5 + 5
          )
          .map((item) => (
            <Card
              key={item.id}
              item={item}
              addToCart={addToCart}
            />
          ))}
      </div>
      {/* NOTE: this looks ugly as fuck */}
      <div className="page">
        <div className="btn" onClick={previouse}>
          &lt;
        </div>
        <div>
          {page + 1} / {pages}
        </div>
        <div className="btn" onClick={next}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Products;
