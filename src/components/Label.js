import * as React from "react";

import { Container, LabelInput } from "../styles/components/Label.styles";

export const Label = ({ children, ...props }) => {
  return (
    <Container>
      <LabelInput {...props}>{children}</LabelInput>
    </Container>
  );
};
