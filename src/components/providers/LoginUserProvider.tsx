// ログインしたユーザの情報を保持する
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

// 保持する型と設定関数
export type LoginUserContextType = {
  // &を利用することで、User と boolean を有するあたらしい型　の指定ができるらしい。
  loginUser: (User & { isAdmin: boolean }) | null;
  // useState などの更新関数の型は以下のようになるらしい→おぼえげー
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

// Type scriptの表現方法として {} を as で受けて型を指定する
// ちゃんとexportしましょう
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// childrenすべてに影響があるよーって話だったっけ
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  // 再レンダリングする規模によっては変数と関数は別にしたほうが良い場合もある
  const [loginUser, setLoginUser] = useState<User | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
