import { memo, ReactNode, VFC } from "react";
import { Button, IconButton } from "@chakra-ui/react";

// 親から受け取る children の型
type Props = {
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
});
