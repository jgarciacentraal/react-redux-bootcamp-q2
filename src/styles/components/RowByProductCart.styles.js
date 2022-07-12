import styled from "styled-components";
import { XCircle } from "react-feather";

export const ProductImage = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

export const TableData = styled.td`
  margin: 50px;
  text-align: center;
`;

export const RemoveIcon = styled(XCircle)`
  cursor: pointer;
  color: white;
  background-color: red;
  border-radius: 20px;
  margin: auto 30px;
  :hover {
    background-color: white;
    color: red;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 30px;
`;

export const ProductName = styled.p`
  align-items: center;
  margin: auto;
`;
