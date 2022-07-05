import * as React from "react";
//own styles
import { Container } from "../styles/pages/Products.styles";
//fake data
import products from "../data/products.json";
import { Product } from "../components/Product";

export const Products = () => {
  const { items } = products.data.products;
  return (
    <Container>
      {items.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Container>
  );
};
