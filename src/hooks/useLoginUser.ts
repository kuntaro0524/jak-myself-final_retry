import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../components/providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
