import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  // voidの関数を定義するときはこんな感じみたい
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    // 左から表示を出す: placement="left"
    // sizeも指定できる　*/}
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%"> Top </Button>
            <Button w="100%"> ユーザ一覧 </Button>
            <Button w="100%"> 設定画面 </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
