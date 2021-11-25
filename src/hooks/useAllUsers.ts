import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../components/types/api/user";
import { showMessage } from "./useMessage";

export const useAllUsers = () => {
  // 型推論で勝手に boolean　になるところは放置しても良い（型指定）
  // なんかcodesandboxで文句言われたので boolean 足した
  const [loading, setLoading] = useState<boolean>();

  // ユーザの配列として users を定義するということを型指定で明瞭にしておく
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        // 自作メッセージ表示用のやつ
        showMessage({ title: "ユーザ取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, loading, users };
};
