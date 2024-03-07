import { createContext } from "react";
import { IUser } from "../../App";

interface IUsers {
  users: IUser[];
  // setUsers: IUser;
}

export const SearchContext = createContext<IUsers>({ users: [] });
