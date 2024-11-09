import React, { useEffect, useState } from "react";
import productsList from "../../assets/products.json";
import Product from "./Product";
import Card from "./Card";
import "./Products.css";

const Products: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [productsPerPage, setProductsPerPage] = useState<number>(2);
  const products: Product[] = Object.values(productsList);
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

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="products-parent">
      <div className={`products grid-rows-${productsPerPage}`}>
        {products
          .slice(
            page * productsPerPage,
            page * productsPerPage + productsPerPage,
          )
          .map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              rating={product.rating}
              image={product.image}
              description={product.description}
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
