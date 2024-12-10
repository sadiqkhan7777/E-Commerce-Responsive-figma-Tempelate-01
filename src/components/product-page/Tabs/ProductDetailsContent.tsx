import React from "react";
import ProductDetails from "./ProductDetails";

const ProductDetailsContent = () => {
  return (
    <section className="bg-white py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide">
        Product Specifications
      </h3>
      <div className="border-t border-gray-200 pt-4">
        <ProductDetails />
      </div>
    </section>
  );
};

export default ProductDetailsContent;
