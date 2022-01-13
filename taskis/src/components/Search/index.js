import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./Search.css";

export const Search = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <section className="Search__Section">
      <form className="Search__Form" onSubmit={(e) => e.preventDefault()}>
        <label className="Search__Label" htmlFor="search">
          Search Tasks
        </label>
        <input
          className="Search__Input"
          type="text"
          id="search"
          tabIndex="0"
          placeholder="Search for tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </section>
  );
};
