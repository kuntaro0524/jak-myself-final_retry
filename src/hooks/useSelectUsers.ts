import { useCallback, useState } from "react";

import { User } from "../components/types/api/user";
// User IDを元にユーザ情報を抜き出してくるカスタムフック

type Props = {
  id: number;
  // ユーザ情報の配列なので
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUsers = () => {
  // 選択されたユーザの情報を格納
  const [selectedUser, setSelectedUser] = useState<User>(null);
  // 選択されたユーザの情報を取得する関数
  // 引数→ユーザのID番号、ユーザの一覧
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    // 受け取った配列の中に指定したIDと一致するユーザを targetUser として設定
    const targetUser: User = users.find((user) => user.id === id);
    // カスタムフック内部の変数に格納する
    setSelectedUser(targetUser);
    onOpen();
  }, []);

  return { selectedUser, onSelectUser };
};
