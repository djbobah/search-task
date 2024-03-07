import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
// import { mockUsers } from "./mockUsers";
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
  };
}

export default function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm setUsers={setUsers} />
      <SearchResults />
    </SearchContext.Provider>
  );
}
