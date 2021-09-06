import { useEffect, useState } from "react";
import axios from "axios";

const HourlyForecastPage = () => {
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

				// Axios http get requests
				const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${usersLatitude}&lon=${usersLongitude}&units=${metric}&lang=sv&appid=${openWeatherKey}`;
				const geolocationUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${usersLatitude},${usersLongitude}&key=${geolocationKey}`;
				const weatherRequest = axios.get(weatherUrl);
				const geolocationRequest = axios.get(geolocationUrl);

				axios.all([weatherRequest, geolocationRequest]).then(
					axios.spread((...responses) => {
						const weatherResponse = responses[0];
						const geolocationResponse = responses[1];
						setWeather(weatherResponse.data);
						setGeolocation(geolocationResponse.data);
					})
				);
			});
		} else {
			console.log("Geolocation is disabled");
		}
	}, []);

	console.log(weather);

	if (weather && geolocation)
		return (
			<div>
				<section className="container mx-auto p-3 text-center sm:text-left">
					<h1 className="sm:text-5xl mx:text-3x1 font-sans font-bold">
						{geolocation.results[5].formatted_address}
					</h1>
				</section>
			</div>
		);

	return <div></div>;
};

export default HourlyForecastPage;
