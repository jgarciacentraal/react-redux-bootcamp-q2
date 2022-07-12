import * as React from "react";
import { Route, Redirect } from "react-router-dom";

export const Private = (props) => {
  return props.user?.username === "wizeline" ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};
