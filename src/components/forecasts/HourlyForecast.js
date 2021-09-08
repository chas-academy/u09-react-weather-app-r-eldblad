const HourlyForecast = (props) => {
	return (
		<div>
			<ol>
				{props.weatherState.hourly.map(function (deltaTime) {
					return (
						<li key={deltaTime.dt}>
							{new Date(deltaTime.dt * 1000)
								.toLocaleTimeString("sv-SE")
								.substr(0, 5)}
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default HourlyForecast;
