import * as React from "react";
import {
  CardProduct,
  InfoProduct,
  ImagenProduct,
  BtnProduct,
  NameProduct,
  PriceProduct,
  CategoryProduct,
} from "../styles/components/Product.styles";

export function Product({ name, categories, price, images }) {
  const img = images && images[0];
  const category = categories[0];
  return (
    <CardProduct>
      <ImagenProduct src={img} />
      <NameProduct>{name}</NameProduct>
      <InfoProduct>
        <CategoryProduct>{category}</CategoryProduct>
        <PriceProduct>{`$${price}`}</PriceProduct>
      </InfoProduct>
      <BtnProduct>Add to cart</BtnProduct>
    </CardProduct>
  );
}
