import * as React from "react";
//fake data
import products from "../data/products.json";

import { RowByProductCart } from "../components/RowByProductCart";

import {
  SectionCart,
  RowByProduct,
  Summary,
  HeadingCart,
  RowHead,
  RowBody,
  Header,
  SummaryHeading,
  BtnCheckout,
  SummaryData,
} from "../styles/pages/Cart.styles";

//Header table
const HEADERS = ["Detalle", "Cantidad", "Precio", "Total"];

export const Cart = () => {
  const { items } = products.data.products;

  const fewProducts = items
    .filter((p) => p.id > 1 && p.id < 7)
    .map((p) => {
      return {
        ...p,
        quantity: 1,
        total: 1,
      };
    });

  return (
    <>
      <HeadingCart>Shopping Cart</HeadingCart>
      <SectionCart id="section-cart">
        <RowByProduct>
          <RowHead>
            <tr>
              {HEADERS.map((h, i) => (
                <Header key={i}>{h}</Header>
              ))}
            </tr>
          </RowHead>

          {fewProducts.map((product) => (
            <RowBody key={product.id}>
              <tr>
                <RowByProductCart {...product} />
              </tr>
            </RowBody>
          ))}
        </RowByProduct>
        <Summary>
          <SummaryHeading>Summary</SummaryHeading>
          <SummaryData>Total Items {"2"}</SummaryData>
          <SummaryData>Total Costs {"$345.55"}</SummaryData>
          <BtnCheckout>Checkout</BtnCheckout>
        </Summary>
      </SectionCart>
    </>
  );
};
