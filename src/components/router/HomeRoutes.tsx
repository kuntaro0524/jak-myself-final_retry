// /home というページのところでリンクを押したらページが変わるというような実装をする。
// このため、routingのパラメタをここで一気に定義して利用する
// ver6にしたとき、こうやってコンポーネントをそれぞれのページに設定して、引数の element にどうやって渡せばよいかわからないまま諦めてver5 に戻った

import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";
import { Setting } from "../pages/Setting";
import { UserManagement } from "../pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  // home routeを通ってきた場合にはここにも書いておかないと駄目
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
