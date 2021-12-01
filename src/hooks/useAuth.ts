// Login情報を取り扱うためのカスタムフック
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../components/types/api/user";
import { useMessage } from "../hooks/useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const { showMessage } = useMessage();
  // ユーザが見つかったときにHOME画面に遷移する情報
  const history = useHistory();

  // ユーザ情報を保持するProviderを利用してそこに保持される情報を得るカスタムフックを利用
  // カスタムフックの中で定義しているのは変数とセット関数だが、ここではセット関数のみを持ってきている
  const { setLoginUser } = useLoginUser();

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
            setLoginUser(res.data);
            showMessage({
              title: "ログインしました",
              status: "success"
            });
            history.push("home");
          } else {
            showMessage({
              title: "ユーザが見つかりません",
              status: "error"
            });
          }
        })
        .catch(() =>
          showMessage({ title: "ログインできません", status: "error" })
        )
        // どちらに転んでもフラグをfalseに設定し直す
        .finally(() => setLoading(false));
    },
    [history, showMessage, setLoginUser]
  );

  return { login, loading };
};
