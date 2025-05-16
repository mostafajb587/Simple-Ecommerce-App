// hooks/useUsers.ts
import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import UsersService, {type User } from "../services/users-service";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = UsersService.getAll<User>();

    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { users, Error, Loading };
};

export default useUsers;
