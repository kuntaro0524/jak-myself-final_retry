import { Flex, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  // Flex boxみたいなものが簡単に実現する
  // naviタグにしてやる
  // bg: 色を指定
  // color: 文字の色
  return (
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
      この例だと 画面サイズが md 以上のときに　フォントサイズを lg にする */}
      <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
        ユーザ管理アプリ
      </Heading>
    </Flex>
  );
});

// /homeにはヘッダを見せたい
