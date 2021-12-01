import {
  Wrap,
  WrapItem,
  Box,
  Stack,
  Image,
  Text,
  Center,
  Spinner,
  Modal,
  ModalContent,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Modalを表示するための関数をここで準備して UserCard に渡してあげる
  // propsとして渡す関数→useCallBackで囲っておくのが良い
  const onClickUser = useCallback(() => onOpen(), []);

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
                // ユーザカードで表示している Box を押したら発動する
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      {/* モーダルを追加していく */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> ユーザ詳細 </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* 項目を並べるためにStackは入れておこう（配列調整がしやすい） これは */}
            <Stack>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="平田邦生" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value="Kunio Hirata" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value="12345@example.com" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value="08053191649" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
