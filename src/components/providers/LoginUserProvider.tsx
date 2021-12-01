// ログインしたユーザの情報を保持する
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

// 結局あたらしい型を定義するほうが使いまわしが簡単ですよって話で
export type LoginUser = User & { isAdmin: boolean };

// 保持する型と設定関数
export type LoginUserContextType = {
  // 新しく指定した型を使っていくスタイル
  loginUser: LoginUser | null;
  // useState などの更新関数の型は以下のようになるらしい→おぼえげー
  // 新しく指定した型をここにも入れてあげる必要があるよ
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
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
  // これもしっかりとあたらしい変数名を指定していくスタイル
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
