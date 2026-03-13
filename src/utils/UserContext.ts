import { createContext } from "react";

interface UserContextType {
  loggedInUser: string;
  setUserInfo: (name: string) => void;
}

const UserContext = createContext<UserContextType>({
    loggedInUser : "Deafault User",
    setUserInfo: ()=> {}
});

export default UserContext; 