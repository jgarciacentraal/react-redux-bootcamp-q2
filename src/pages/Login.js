import * as React from "react";
import { useHistory } from "react-router";
import loginApi from "../utils/loginApi";
import { FormContainer, Heading } from "../styles/pages/Login.styles";

import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
export const Login = ({ auth, handleAuth }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const { username, password } = auth;

    const loginResolved = await loginApi(username, password);
    if (loginResolved?.username === "Wizeline") {
      history.push("/");
    }
  };
  return (
    <>
      <Heading>Welcome to the WizeStore!</Heading>
      <FormContainer>
        <Label htmlFor="user-name">Username:</Label>
        <Input
          id="user-name"
          name="username"
          value={auth.username}
          onChange={(e) => handleAuth(e)}
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={auth.password}
          onChange={(e) => handleAuth(e)}
        />
        <Button onClick={(e) => handleLogin(e)}>Login</Button>
      </FormContainer>
    </>
  );
};
