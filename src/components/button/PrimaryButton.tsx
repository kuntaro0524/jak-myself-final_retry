import { memo, ReactNode, VFC } from "react";
import { Button, IconButton } from "@chakra-ui/react";

// 親から受け取る children の型
type Props = {
  children: ReactNode;
  // 親コンポーネントからonClickの関数を受け取る
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      // 親から受け取った関数をここで実行できるように
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
