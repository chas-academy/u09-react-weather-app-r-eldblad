const axios = require("axios");

function CurrentForecastPage() {
	const getCurrentForecast = () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
				const usersLatitude = position.coords.latitude;
				const usersLongitude = position.coords.longitude;
				axios
					.get(
						`https://api.openweathermap.org/data/2.5/onecall?lat=${usersLatitude}&lon=${usersLongitude}&appid=${apiKey}`
					)
					.then((response) => {
						console.log(response);
					});
			});
		} else {
			console.log("Geolocation is disabled");
		}
	};

	getCurrentForecast();

	return <div></div>;
}

export default CurrentForecastPage;
