import { useState } from "react";

export const useAllUsers = () => {
  const [loading, setLoading] = useState();
  const [users, setUsers] = useState();

  const getUsers = () => {};

  return { getUsers, loading, users };
};
