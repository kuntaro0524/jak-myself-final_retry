import { ChangeEvent, memo, ReactNode, useEffect, useState, VFC } from "react";

import {
  Stack,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter
} from "@chakra-ui/react";

// Propsを定義するために必要なインポート
import { User } from "../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  // ユーザ情報を受け取るのだが、これはnullの可能性もある
  user: User | null;
  isOpen: boolean;
  // 管理者かどうかのフラグも一緒に受け取る
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  // propsで渡されない場合には disabled と loading は　デフォルト false
  // userを引数として受け取り、それを利用して情報を表示する
  const { isOpen, onClose, user, isAdmin = false } = props;

  // 情報を更新するための方法
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // これらは可変なのだが、最初は指定したID番号のユーザ情報を反映すべきなの
  // useEffectは最初のレンダリングのときにだけ呼ばれる
  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onClickUpdate = () => alert("更新されました！");

  // 更新する関数：Modalの中のインプットテキストのところに onChange で仕込んでいる関数群
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  return (
    <div>
      {/* モーダルを追加していく */}
      {/* 自動フォーカスがあたってしまっている（modal の close button) */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        {/* padding bottomの設定 */}
        <ModalContent pb={6}>
          <ModalHeader> ユーザ詳細 </ModalHeader>
          <ModalCloseButton />
          {/* マージンを調整 */}
          <ModalBody mx={4}>
            {/* 項目を並べるためにStackは入れておこう（配列調整がしやすい） これは */}
            <Stack>
              <FormControl>
                <FormLabel>名前</FormLabel>
                {/* nullの可能性があるよ、と指定してあるのでオプショナルチェイニングが発動している */}
                <Input
                  // useState()で管理している値になった
                  value={name}
                  // 管理者でなければこれはTrueになる
                  isReadOnly={!isAdmin}
                  // 　useState()で管理している情報を反映
                  onChange={onChangeName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={username}
                  isReadOnly={!isAdmin}
                  onChange={onChangeUserName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={email}
                  isReadOnly={!isAdmin}
                  onChange={onChangeEmail}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={phone}
                  isReadOnly={!isAdmin}
                  onChange={onChangePhone}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}> UNKO </PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
});
