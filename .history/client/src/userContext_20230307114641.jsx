import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({}) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}></UserContext.Provider>
  );
}
