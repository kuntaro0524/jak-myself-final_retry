import { memo, ReactNode, VFC } from "react";

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
  Input
} from "@chakra-ui/react";

// Propsを定義するために必要なインポート
import { User } from "../../types/api/user";

type Props = {
  // ユーザ情報を受け取るのだが、これはnullの可能性もある
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  // propsで渡されない場合には disabled と loading は　デフォルト false
  // userを引数として受け取り、それを利用して情報を表示する
  const { isOpen, onClose, user } = props;
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
                <Input value={user?.name} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={user?.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value={user?.email} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={user?.phone} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
});
