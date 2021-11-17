import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";

import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../button/PrimaryButton";

export const Login: VFC = memo(() => {
  // カスタムフックを使います
  const { login, loading } = useAuth();
  // ログインインプット文字列のところから値を取得するための useState
  // TypeScriptを使っていてもuseStateには初期値を（）内で渡すと型推定をしてくれるので簡単な場合には指定する必要はない
  const [userID, setUserId] = useState("");
  // テキストボックスの値が変化した場合のトレース
  // Inputから得られるイベントの型指定は覚えるしか無い！
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userID);

  return (
    <Flex align="center" justify="center" height="100vh">
      {/* 背景を白にして幅を狭め、角丸にして影をつけた */}
      <Box bg="white" w="sm" p={4} borderRardius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          Unko
        </Heading>
        {/* デバイダ→横線の区切り */}
        <Divider my={5} />
        {/* Stackは特におすすめでこのTagで囲ったものを等間隔に配置するという便利な代物 */}
        <Stack spacing={5} py={4} px={10}>
          <Input
            placeholder="ユーザ名"
            // Inputに入力された値を表示する。useStateで管理している値
            value={userID}
            // Inputに入力された値が変化したとき useState で値を設定する
            onChange={onChangeUserId}
          />
          {/* userIDに文字列が入っていないときにはボタンを押せないようにした */}
          <PrimaryButton
            loading={loading}
            disabled={userID === ""}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
