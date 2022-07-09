import * as React from "react";

import {
  ProductImage,
  TableData,
  ProductDetail,
  RemoveIcon,
  Input,
  ProductName,
} from "../styles/components/RowByProductCart.styles";

export const RowByProductCart = ({
  images,
  name,
  price,
  quantity,
  total,
  handleRemoveItem,
}) => {
  const img = images[0];
  return (
    <>
      <TableData>
        <ProductDetail>
          <ProductImage src={img} />
          <ProductName>{name}</ProductName>
        </ProductDetail>
      </TableData>
      <TableData>
        <Input defaultValue={quantity} type="number" />
      </TableData>
      <TableData>{price}</TableData>
      <TableData>{total}</TableData>
      <TableData>
        <RemoveIcon />
      </TableData>
    </>
  );
};
