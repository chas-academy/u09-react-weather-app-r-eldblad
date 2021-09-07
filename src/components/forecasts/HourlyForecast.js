const HourlyForecast = (props) => {
	return (
		<div>
			<ol>
				{props.weatherState.hourly.map(function (deltaTime) {
					return <li>{deltaTime.dt}</li>;
				})}
			</ol>
		</div>
	);
};

export default HourlyForecast;
