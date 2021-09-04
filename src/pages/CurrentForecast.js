import { useEffect, useState } from "react";
import axios from "axios";

function CurrentForecastPage() {
	let weatherUrl;
	let geolocationUrl;
	const [weather, setWeather] = useState(null);
	const [geolocation, setGeolocation] = useState(null);
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const usersLatitude = position.coords.latitude;
				const usersLongitude = position.coords.longitude;
				const openWeatherKey = process.env.REACT_APP_WEATHER_API_KEY;
				const geolocationKey = process.env.REACT_APP_GOOGLE_GEOLOCATION_API_KEY;
				const metric = "metric";
				weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${usersLatitude}&lon=${usersLongitude}&units=${metric}&lang=sv&appid=${openWeatherKey}`;
				geolocationUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${usersLatitude},${usersLongitude}&key=${geolocationKey}`;
				axios.get(weatherUrl).then((response) => {
					setWeather(response.data);
				});
				axios.get(geolocationUrl).then((response) => {
					setGeolocation(response.data);
				});
			});
		} else {
			console.log("Geolocation is disabled");
		}
	}, [weatherUrl, geolocationUrl]);

	console.log(weather);
	console.log(geolocation);

	if (weather && geolocation)
		return (
			<div>
				<section className="container mx-auto p-3 text-center sm:text-left">
					<h1 className="sm:text-5xl mx:text-3x1 font-sans font-bold">
						{geolocation.results[5].formatted_address}
					</h1>
					<h2 className="mx:text-4x1 font-sans font-semibold">
						{weather.current.temp}&#8451;
					</h2>
					<p>
						<em>
							Känns som {weather.current.feels_like}
							&#8451;
						</em>
					</p>
					<p>
						<em>Vindstyrka: {weather.current.wind_speed} m/s</em>
					</p>
					<p>
						<em>Luftfuktighet: {weather.current.humidity}%</em>
					</p>
					<p>
						<em>({weather.current.weather[0].description})</em>
					</p>
				</section>
			</div>
		);

	return <div></div>;
}

export default CurrentForecastPage;
