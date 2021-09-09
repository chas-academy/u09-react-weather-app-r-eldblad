import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

import { useState } from "react";
import SearchContent from "./SearchContent";

function Search() {
	const [searchResponse, setSearchResponse] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	const handleInput = (e) => {
		const term = e.target.value;
		setSearchTerm(term);
	};

	const handleEnterKeyPressed = (e) => {
		if (e.key === "Enter") {
			const openWeatherKey = process.env.REACT_APP_WEATHER_API_KEY;
			const searchLocationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${openWeatherKey}`;
			axios.get(searchLocationUrl).then((response) => {
				setSearchResponse(response);
			});
			console.log(searchResponse);
			e.preventDefault();
		}
	};

	if (searchResponse) {
		return (
			<>
				<div>
					<form className=" bg-white shadow-md rounded px-3 pt-3 pb-3">
						<input
							className="justify-center items-center shadow appearance-none border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Sök plats..."
							name="search"
							onChange={handleInput}
							onKeyPress={handleEnterKeyPressed}
							value={searchTerm}></input>
					</form>
				</div>
				<SearchContent searchedLocation={searchResponse} />
			</>
		);
	}

	return (
		<div>
			<form className=" bg-white shadow-md rounded px-3 pt-3 pb-3">
				<input
					className="justify-center items-center shadow appearance-none border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					placeholder="Sök plats..."
					name="search"
					onChange={handleInput}
					onKeyPress={handleEnterKeyPressed}
					value={searchTerm}></input>
				<button type="submit">
					<SearchIcon />
				</button>
			</form>
		</div>
	);
}

export default Search;
