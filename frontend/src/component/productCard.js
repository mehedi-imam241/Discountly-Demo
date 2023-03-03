import React, { useEffect, useState } from "react";
import variable from "@/styles/variables.module.scss";
import { useRouter } from "next/router";

function ProductCard({ product, inBundle }) {
  const [productData, setProductData] = useState({});
  const router = useRouter();

  const handleAddToBundle = () => {
    setProductData(product);
  };

  useEffect(() => {
    if (Object.keys(productData).length !== 0)
      router.push(
        {
          pathname: "/bundles",
          query: { product: JSON.stringify(productData) },
        },
        "/bundles"
      );
  }, [productData]);

  return (
    <div
      className={`w-[350px]  p-4 shadow-lg shadow-green-200 rounded-lg flex flex-col justify-between border-2 border-primary gap-4 `}
      style={{ color: variable.primaryColor }}
    >
      <img
        src={product.Image}
        alt="product"
        className={"w-full h-[200px] object-cover rounded-lg"}
      />

      <div className={"flex flex-col "}>
        <div>
          <b>Brand: </b> {product.Brand ? product.Brand : "No Brand"}
        </div>
        <div>
          <b>Name: </b> {product.Name}
        </div>
        <div>
          <b> Price: </b> {product.Price} RS
        </div>

        <div>
          <b>Rating: </b> {product.Rating}
        </div>
      </div>

      <div className={"flex flex-col gap-2"}>
        <a
          target={"_blank"}
          href={product.Link}
          className={
            "block w-full bg-secondary px-5 py-2 text-white rounded text-center"
          }
        >
          View on Website
        </a>

        {inBundle !== true && (
          <button
            className={"bg-primary px-5 py-2 text-white rounded  w-full"}
            onClick={handleAddToBundle}
          >
            Add to Bundle
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
