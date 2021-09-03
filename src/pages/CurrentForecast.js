function CurrentForecastPage() {
	const getCoordinatesFromUser = () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const usersLatitude = position.coords.latitude;
				const usersLongitude = position.coords.longitude;
			});
		} else {
			console.log("Go fuck yourself!");
		}
	};
	return <div>{getCoordinatesFromUser()}</div>;
}

export default CurrentForecastPage;
