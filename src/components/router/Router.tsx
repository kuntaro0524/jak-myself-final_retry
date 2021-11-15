import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { homeRoutes } from "./HomeRoutes";


export const Router: VFC = memo(() => {
  return (
    <Switch>
      {/* root pathにアクセスしたときにはログイン画面を表示する */}
      <Route>
        <Login />
      </Route>
      <Route path="/home" render{({match: {url}})=>(
        <Switch>
        {homeRoutes.map((route)=>(
          <Route key={route.path} exact={route.exact} path={route.path}>
            {route.children}
            </Route>
        ))}
        </Switch>
      )} />
    </Switch>
  );
});
