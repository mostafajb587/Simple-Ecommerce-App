// hooks/useUsers.ts
import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import UsersService, {type User } from "../services/users-service";

const useUser = (id?:number) => {
  const [users, setUsers] = useState<User>();
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
     if (!id) return;
    setLoading(true);

    const { request, cancel } = UsersService.get<User>(id);

    request
      .then((res) => {
        setUsers(res.data);
        console.log("Users from fakestoreapi:", res.data);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
    
  }, [id]);

  return { users, Error, Loading };
};

export default useUser;
