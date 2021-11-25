import {
  Wrap,
  WrapItem,
  Box,
  Stack,
  Image,
  Text,
  Center,
  Spinner
} from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";

// カスタムフックスって呼び方が特殊ですね。これはコンポーネントの全体の名前やねんな
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  // カスタムフックから呼び出す
  // フックの中に定義した関数や変数はこうやって取り出すのか
  const { getUsers, users, loading } = useAllUsers();

  // 最初に一回だけ呼びたいときは useEffect を利用する→これは覚えておかないと！
  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        // paddingの設定を画面の大きさで分ける
        <Wrap p={{ base: 4, md: 10 }}>
          {/* ユーザごとの情報をmapで表示する */}
          {users.map((user) => (
            // 画面が狭くなったときにマージンを自動で調整する mx="auto"
            <WrapItem key={user.id} justify="center">
              <UserCard
                userName={user.name}
                fullName={user.username}
                imageUrl="https://source.unsplash.com/random"
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
