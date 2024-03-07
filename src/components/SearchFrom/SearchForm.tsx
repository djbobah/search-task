import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { SearchContext } from "../SearchResults/SearchContext";

export function SearchForm({ setUsers }) {
  const [searchString, setSearchString] = useState("");
  let { users } = useContext(SearchContext);
  console.log("users", users);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${searchString}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.users);
      });
  }, [searchString]);

  const handleChangeSearchString = ({ target }) => {
    setSearchString(target.value);
  };
  return (
    <div className="searchForm">
      <form>
        <input
          type="text"
          value={searchString}
          name="searchString"
          onChange={handleChangeSearchString}
        />
      </form>
    </div>
  );
}
