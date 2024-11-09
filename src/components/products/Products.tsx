import React, { useState } from "react";
import productsList from "../../assets/products.json";
import Product from "./Product";
import Card from "./Card";
import "./Products.css";

const Products: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const products: Product[] = Object.values(productsList);
  const pages: number = Math.ceil(products.length / 3);

  function previouse() {
    if (page != 0) setPage((prev) => prev - 1);
  }

  function next() {
    if (page < pages - 1) setPage((prev) => prev + 1);
  }

  return (
    <div className="products-parent">
      <div className="products">
        {products.slice(page * 3, page * 3 + 3).map((product) => (
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
