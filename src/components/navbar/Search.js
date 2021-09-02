import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <>
      <div>
        <form>
          <input
            class="shadow appearance-none border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search location..."
            name="search"
          ></input>
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
