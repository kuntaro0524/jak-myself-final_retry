import { useCallback } from "react";

// User IDを元にユーザ情報を抜き出してくるカスタムフック

export const useSelectUser = () => {
  // 選択されたユーザの情報
  const [selectedUser, setSelectedUser] = useState();
  // 選択されたユーザの情報を取得する関数
  const onSelectUser = useCallback(() => {}, []);

  return { onSelectUser };
};
