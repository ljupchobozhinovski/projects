import React from "react";
import { FeaturedProductType } from "../Types/types";
import ProductItem from "./ProductItem";

interface Props {
  relatedProducts: FeaturedProductType[]
}

const RelatedProducts: React.FC<Props> = ({ relatedProducts }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">

            {relatedProducts.map((relatedProduct) => {
              return (
                <ProductItem key={relatedProduct.id} featuredProduct={relatedProduct} />
              )
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
