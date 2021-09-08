// This component will be rendered inside of HourlyForecastPage
const HourlyForecast = (props) => {
	return (
		<>
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Tid
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Temperatur
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Känns som
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Luftfuktighet
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Vindstyrka
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{props.weatherState.hourly.slice(0, 24).map(function (data) {
						return (
							<>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">
										{new Date(data.dt * 1000).toLocaleTimeString([], {
											hour: "2-digit",
											minute: "2-digit",
										})}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{Math.round(data.temp)}&#8451;
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{Math.round(data.feels_like)}&#8451;
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{data.humidity}&#37;
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{Math.round(data.wind_speed)} m/s
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<img
											src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
											title={data.weather[0].description}
											alt="weather-icon"></img>
									</td>
								</tr>
							</>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default HourlyForecast;
