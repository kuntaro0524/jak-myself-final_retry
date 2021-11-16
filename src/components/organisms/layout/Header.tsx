import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

import { MenuIconButton } from "../../button/MenuIconButton";

export const Header: VFC = memo(() => {
  // Drawerを描くとか開くとか閉じるとかいう chakra-UIが提供している hooks を利用する
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Flex boxみたいなものが簡単に実現する
  // naviタグにしてやる
  // bg: 色を指定
  // color: 文字の色
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        // paddingについても動的な設定が可能→ breakpoint md のときに 5px に切り替えるという設定
        padding={{ base: 3, md: 5 }}
      >
        {/* h1タグのように使える */}
        {/* base: ベースのフォントサイズなども指定できる
      break point(画面サイズのしきい値)ごとに文字のサイズを設定することができる
      この例だと 画面サイズが md 以上のときに　フォントサイズを lg にする 
      Flexで囲ってあげてクリックできるようにするために a タグとする
      右側マージン 8px
      カーソルのポインタを変更するのも設定*/}
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        {/* ページへのリンクを貼る */}
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Link> ユーザー一覧 </Link>
          <Link> 設定 </Link>
        </Flex>
        {/* 新たにatomsに作ったボタンを呼び出してあげる。 */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      {/* 左から表示を出す: placement="left" 
      sizeも指定できる　*/}
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
    </>
  );
});

// /homeにはヘッダを見せたい
