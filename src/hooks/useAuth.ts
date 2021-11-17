// Login情報を取り扱うためのカスタムフック
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../components/types/api/user";

export const useAuth = () => {
  // ユーザが見つかったときにHOME画面に遷移する情報
  const history = useHistory();

  // ログインの処理のLoading中とかそういう情報
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          // axiosでデータを取得し、中身があればHOME画面に遷移するということにする
          if (res.data) {
            history.push("home");
          } else {
            alert("ユーザが見つかりません");
          }
        })
        .catch(() => alert("ログインできません"))
        // どちらに転んでもフラグをfalseに設定し直す
        .finally(() => setLoading(false));
    },
    [history]
  );

  return { login, loading };
};
