import { memo, ReactNode, VFC } from "react";
import { Button, IconButton } from "@chakra-ui/react";

// 親から受け取る children の型
type Props = {
  children: ReactNode;
  // 親コンポーネントから「テキスト入力」になにか情報があったら、というフラグを受け取る
  // 必須ではないので ? をつけておく
  disabled?: boolean;
  // loadingしているかどうかのフラグを受け取る
  // 必須ではないので ? をつけておく
  loading?: boolean;
  // 親コンポーネントからonClickの関数を受け取る
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  // propsで渡されない場合には disabled と loading は　デフォルト false
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      // 親から受け取った disabled をボタンが押せる押せない判定に利用
      disabled={disabled || loading}
      // ローディングの場合にはボタンのところにくるくるが表示される
      isLoading={loading}
      // 親から受け取った関数をここで実行できるように
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
