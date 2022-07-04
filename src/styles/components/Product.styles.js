import styled from "styled-components";

export const CardProduct = styled.div`
  padding: 32px;
  margin: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  width: 250px;
  transition: all 300ms ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NameProduct = styled.h1`
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const PriceProduct = styled.p`
  font-size: 21px;
  color: #343a40;
`;

export const ImagenProduct = styled.img`
  max-width: 250px;
  max-height: 250px;
  //object-fit: contain;
`;
export const BtnProduct = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f3722c;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 12px 25px 8px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  margin: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
  &:active {
    transform: scale(0.95);
  }
`;

export const CategoryProduct = styled.p`
  color: #212529;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;
