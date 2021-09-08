const CurrentForecastPage = (props) => {
	const icon = props.weatherState.current.weather[0].icon;
	if (props.weatherState && props.geoState)
		return (
			<div>
				<section className="container mx-auto p-3 text-center sm:text-left">
					<h1 className="sm:text-5xl mx:text-3x1 font-sans font-bold">
						{props.geoState.results[5].formatted_address}
					</h1>
					<h2 className="mx:text-4x1 font-sans font-semibold">
						{Math.round(props.weatherState.current.temp)}&#8451;
					</h2>
					<p>
						<em>
							Känns som {Math.round(props.weatherState.current.feels_like)}
							&#8451;
						</em>
					</p>
					<p>
						<em>
							Vindstyrka: {Math.round(props.weatherState.current.wind_speed)}{" "}
							m/s
						</em>
					</p>
					<p>
						<em>Luftfuktighet: {props.weatherState.current.humidity}%</em>
					</p>
					<img
						title={props.weatherState.current.weather[0].description}
						alt={props.weatherState.current.weather[0].description}
						src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
					/>
				</section>
			</div>
		);

	return <></>;
};

export default CurrentForecastPage;
