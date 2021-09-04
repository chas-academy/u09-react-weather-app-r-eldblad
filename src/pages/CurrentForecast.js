import { useEffect, useState } from "react";
import axios from "axios";

function CurrentForecastPage() {
	let url;
	const [weather, setWeather] = useState(null);
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const usersLatitude = position.coords.latitude;
				const usersLongitude = position.coords.longitude;
				const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
				const metric = "metric";
				url = `https://api.openweathermap.org/data/2.5/onecall?lat=${usersLatitude}&lon=${usersLongitude}&units=${metric}&appid=${apiKey}`;
				axios.get(url).then((response) => {
					setWeather(response.data);
				});
			});
		} else {
			console.log("Geolocation is disabled");
		}
	}, [url]);

	console.log(weather);

	if (weather)
		return (
			<div>
				<h1>{weather.timezone}</h1>
				<h2>{weather.current.temp}&#8451; </h2>
				<em>
					Feels like {weather.current.feels_like}
					&#8451;
				</em>
			</div>
		);

	return <div></div>;
}

export default CurrentForecastPage;
