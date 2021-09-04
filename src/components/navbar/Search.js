import SearchIcon from "@material-ui/icons/Search";

function Search() {
	return (
		<>
			<div>
				<form className=" bg-white shadow-md rounded px-3 pt-3 pb-3">
					<input
						className="justify-center items-center shadow appearance-none border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Sök plats..."
						name="search"></input>
					<button type="submit">
						<SearchIcon />
					</button>
				</form>
			</div>
		</>
	);
}

export default Search;
