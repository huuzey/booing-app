import { createContext, useEffect, useState } from "react";
import { data } from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
