import * as React from "react";
import { Container, InputText } from "../styles/components/Input.styles";

export const Input = (props) => {
  return (
    <Container>
      <InputText {...props} />
    </Container>
  );
};
