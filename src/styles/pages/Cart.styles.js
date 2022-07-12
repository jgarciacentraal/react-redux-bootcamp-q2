import styled from "styled-components";

export const SectionCart = styled.section`
  display: flex;
  width: 100%;
`;

export const RowHead = styled.thead``;
export const RowBody = styled.tbody``;

export const Header = styled.th`
  font-family: Arial, Helvetica, sans-serif;
  color: #2b2d42;
`;

export const RowByProduct = styled.table`
  width: 70%;
  margin: 30px 50px;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: auto;
  margin: 30px 10px;
  align-items: center;
`;

export const HeadingCart = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  margin: 30px 50px;
`;

export const SummaryHeading = styled.h1``;
export const SummaryData = styled.p``;
export const BtnCheckout = styled.button`
  border-style: none;
  padding: 10px;
  font-size: 14px;
  background-color: #2b2d42;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;
