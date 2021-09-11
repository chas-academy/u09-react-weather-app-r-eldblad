const SevenDayForecast = (props) => {
	const days = [
		"Söndag",
		"Måndag",
		"Tisdag",
		"Onsdag",
		"Torsdag",
		"Fredag",
		"Lördag",
	];
	return (
		<>
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Dag
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Högsta
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Lägsta
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
					{props.weatherState.daily.slice(0, 7).map(function (data) {
						return (
							<>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">
										{days[new Date(data.dt * 1000).getDay()]}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{Math.round(data.temp.max)}
										<span
											dangerouslySetInnerHTML={{
												__html: props.selectedUnitIcon,
											}}></span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{Math.round(data.temp.min)}
										<span
											dangerouslySetInnerHTML={{
												__html: props.selectedUnitIcon,
											}}></span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{data.humidity}&#37;
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{Math.round(data.wind_speed)}
										{props.selectedWindSpeedUnit}
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

export default SevenDayForecast;
