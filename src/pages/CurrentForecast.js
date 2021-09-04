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
				const apiKey = process.env.WEATHER_API_KEY;
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
				<section className="container mx-auto p-5 text-center sm:text-left">
					<h1 className="sm:text-5xl mx:text-3x1 font-sans font-bold">
						{weather.timezone}
					</h1>
					<h2 className="mx:text-4x1 font-sans font-semibold">
						{weather.current.temp}&#8451;{" "}
					</h2>
					<p>
						<em>
							Feels like {weather.current.feels_like}
							&#8451;
						</em>
					</p>
					<p>
						<em>Windspeed: {weather.current.wind_speed} m/s</em>
					</p>
					<p>
						<em>Humidity: {weather.current.humidity}%</em>
					</p>
				</section>
			</div>
		);

	return <div></div>;
}

export default CurrentForecastPage;
