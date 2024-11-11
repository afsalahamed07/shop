import React, { useEffect, useState } from "react";
import Product from "./Product";
import Card from "./Card";
import "./Products.css";
import { fetchBooks, sanitiseBook } from "../../infra/book-api";
import Item from "./item";

const Products: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [cart, setCart] = useState<Product | null>(null);
  const [items, setItems] = useState<Item[] | null>(null);
  const pages: number = items ? Math.ceil(items.length / 5) : 0;

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
              id={item.id}
              title={item.title}
              pageCount={item.pageCount}
              catagories={item.catagories}
              thumbnail={item.thumbnail}
              publishedDate={item.publishedDate}
              authors={item.authors}
              language={item.language}
              publisher={item.publisher}
            />
          ))}
      </div>
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
