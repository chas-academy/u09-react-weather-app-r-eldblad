// Component imports
import Navbar from "./components/navbar/Navbar";
import CurrentForecastPage from "./pages/CurrentForecastPage";
import HourlyForecastPage from "./pages/HourlyForecastPage";
import SevenDayForecastPage from "./pages/SevenDayForecastPage";

// Misc imports
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchContentPage from "./pages/SearchContentPage";

function App() {
	const [weather, setWeather] = useState(null);
	const [geolocation, setGeolocation] = useState(null);
	const [unit, setUnit] = useState("metric");
	const [unitIcon, setUnitIcon] = useState("&#8451;");
	const [windSpeedUnit, setWindSpeedUnit] = useState("m/s");
	const handleToggle = () => {
		setUnit(unit === "metric" ? "imperial" : "metric");
		setUnitIcon(unit === "metric" ? "&#8457;" : "&#8451;");
		setWindSpeedUnit(unit === "metric" ? "mph" : "m/s");
	};

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const usersLatitude = position.coords.latitude;
				const usersLongitude = position.coords.longitude;
				const openWeatherKey = process.env.REACT_APP_WEATHER_API_KEY;
				const geolocationKey = process.env.REACT_APP_GOOGLE_GEOLOCATION_API_KEY;
				const lang = "sv";
				// Axios http get requests
				const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${usersLatitude}&lon=${usersLongitude}&units=${unit}&lang=${lang}&appid=${openWeatherKey}`;
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
	}, [unit, unitIcon, windSpeedUnit]);

	return (
		<div>
			<Navbar />
			<div className="flex justify-center">
				<button
					className=" bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded mb-3"
					onClick={handleToggle}>
					Byt enhet ( &#8451; / &#8457; )
				</button>
			</div>
			<Switch>
				<Route path="/current-forecast">
					<CurrentForecastPage
						weatherState={weather}
						geoState={geolocation}
						selectedUnit={unit}
						selectedUnitIcon={unitIcon}
						selectedWindSpeedUnit={windSpeedUnit}
					/>
				</Route>
				<Route path="/hourly-forecast">
					<HourlyForecastPage
						weatherState={weather}
						geoState={geolocation}
						selectedUnit={unit}
						selectedUnitIcon={unitIcon}
						selectedWindSpeedUnit={windSpeedUnit}
					/>
				</Route>
				<Route path="/sevenday-forecast">
					<SevenDayForecastPage
						weatherState={weather}
						geoState={geolocation}
						selectedUnit={unit}
						selectedUnitIcon={unitIcon}
						selectedWindSpeedUnit={windSpeedUnit}
					/>
				</Route>
				<Route path="/search-content">
					<SearchContentPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
