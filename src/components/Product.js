import * as React from "react";
import {
  CardProduct,
  InfoProduct,
  ImageProduct,
  BtnProduct,
  NameProduct,
  PriceProduct,
  CategoryProduct,
} from "../styles/components/Product.styles";

export function Product({ name, categories, price, images }) {
  const img = images[0];
  const category = categories[0];
  return (
    <CardProduct>
      <ImageProduct src={img} />
      <NameProduct>{name}</NameProduct>
      <InfoProduct>
        <CategoryProduct>{category}</CategoryProduct>
        <PriceProduct>{`$${price}`}</PriceProduct>
      </InfoProduct>
      <BtnProduct onClick={() => {}}>Add to cart</BtnProduct>
    </CardProduct>
  );
}
