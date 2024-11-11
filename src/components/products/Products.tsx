import React, { useContext, useEffect, useState } from "react";
import productsList from "../../assets/products.json";
import Product from "./Product";
import Card from "./Card";
import "./Products.css";
import { fetchBooks, sanitiseBook } from "../../infra/book-api";
import Item from "./item";

const Products: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [productsPerPage, setProductsPerPage] = useState<number>(2);
  const [cart, setCart] = useState<Product | null>(null);
  const products: Product[] = Object.values(productsList);
  const [items, setItems] = useState<Item[] | null>(null);
  const pages: number = Math.ceil(products.length / productsPerPage);

  function previouse() {
    if (page != 0) setPage((prev) => prev - 1);
  }

  function next() {
    if (page < pages - 1) setPage((prev) => prev + 1);
  }

  function handleResize() {
    if (window.innerHeight >= 1300) {
      setProductsPerPage(4);
    } else if (window.innerHeight >= 900) {
      setProductsPerPage(3);
    } else {
      setProductsPerPage(2);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    async function apiCall() {
      const data = await fetchBooks();
      setItems(sanitiseBook(data));
    }

    apiCall();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="products-parent">
      <div className={`products grid-rows-${productsPerPage}`}>
        {items && items
          .slice(
            page * productsPerPage,
            page * productsPerPage + productsPerPage,
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
