import { Container, CustomButton } from "../styles/components/Button.styles";

export const Button = ({ children, ...props }) => {
  return (
    <Container>
      <CustomButton {...props}>{children}</CustomButton>
    </Container>
  );
};
