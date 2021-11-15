import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../pages/Home";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route>
        <Login />
      </Route>
    </Switch>
  );
});
