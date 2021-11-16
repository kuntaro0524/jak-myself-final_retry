import { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type Props = {
  // 引数なしの関数の定義をする
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    // 画面が小さいときにハンバーガーメニューを表示したい
    <IconButton
      aria-label="Menu button"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      // base: 携帯のときは、みたいなこと（画面サイズ）、md以上で表示なしという設定
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
