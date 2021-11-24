import { Wrap, WrapItem, Box, Stack, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    // paddingの設定を画面の大きさで分ける
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          userName="くんたろーさん"
          fullName="平田邦生"
          imageUrl="https://source.unsplash.com/random"
        />
      </WrapItem>
    </Wrap>
  );
});
