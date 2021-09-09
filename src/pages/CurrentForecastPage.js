const CurrentForecastPage = (props) => {
	const icon = props.weatherState.current.weather[0].icon;
	if (props.weatherState && props.geoState)
		return (
			<div>
				<section className="container mx-auto">
					<h1 className="text-3xl text-center font-bold sm:text-6xl">
						{props.geoState.results[5].formatted_address}
					</h1>

					<div className="flex items-center justify-center">
						<img
							title={props.weatherState.current.weather[0].description}
							src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
							alt="weather-icon"
						/>
						<p>{props.weatherState.current.weather[0].description}</p>
					</div>
					<div>
						<p className="text-4xl font-semibold text-center">
							{Math.round(props.weatherState.current.temp)}&#8451;
						</p>
						<p className="text-2xl mb-3 text-center">
							Känns som {Math.round(props.weatherState.current.feels_like)}
							&#8451;
						</p>
					</div>
					<div className="mb-5 font-semibold">
						<p className="text-center">
							Vindstyrka: {Math.round(props.weatherState.current.wind_speed)}{" "}
							m/s
						</p>
						<p className="text-center">
							Luftfuktighet: {props.weatherState.current.humidity}%
						</p>
					</div>
					<div className="mt-3 font-semibold">
						<em>
							<p className="text-center ">
								Soluppgång:{" "}
								{new Date(
									props.weatherState.current.sunrise * 1000
								).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</p>
							<p className="text-center">
								Solnedgång:{" "}
								{new Date(
									props.weatherState.current.sunset * 1000
								).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</p>
						</em>
					</div>
				</section>
			</div>
		);

	return <></>;
};

export default CurrentForecastPage;
