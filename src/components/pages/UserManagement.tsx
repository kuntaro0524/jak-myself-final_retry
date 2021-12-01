import {
  Wrap,
  WrapItem,
  Center,
  Spinner,
  useDisclosure
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

// カスタムフックスって呼び方が特殊ですね。これはコンポーネントの全体の名前やねんな
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  // カスタムフックから呼び出す
  // フックの中に定義した関数や変数はこうやって取り出すのか
  const { getUsers, users, loading } = useAllUsers();

  // 最初に一回だけ呼びたいときは useEffect を利用する→これは覚えておかないと！
  useEffect(() => getUsers(), []);

  // Modalを利用するための手順
  // カスタムフックで状態管理の変数を得る
  // onClose: closeボタンを押したときの挙動
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Modalを表示するための関数をここで準備して UserCard に渡してあげる
  // propsとして渡す関数→useCallBackで囲っておくのが良い
  const onClickUser = useCallback((id: number) => {
    console.log(id);
    onOpen();
  }, []);

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
              {/* Modalでユーザ情報を扱うために、カードをクリックしたときに　ID番号を渡す。
              このためにUserCardにID番号を渡しておく必要がある */}
              <UserCard
                id={user.id}
                userName={user.name}
                fullName={user.username}
                imageUrl="https://source.unsplash.com/random"
                // ユーザカードで表示している Box を押したら発動する
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
          {/* Modalをコンポーネント化したのでここに入れておく */}
          <UserDetailModal isOpen={isOpen} onClose={onClose} />
        </Wrap>
      )}
    </>
  );
});
