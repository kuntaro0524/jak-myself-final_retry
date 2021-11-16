import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

// 引数として children を受ける場合（<>で囲まれるような記述）
// 型として ReactNode を利用する
type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
});
