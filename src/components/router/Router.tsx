import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login";

import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      {/* root pathにアクセスしたときにはログイン画面を表示する */}
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
