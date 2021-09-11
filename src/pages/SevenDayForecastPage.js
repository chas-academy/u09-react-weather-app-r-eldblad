import SevenDayForecast from "../components/forecasts/SevenDayForecast";

const SevenDayForecastPage = (props) => {
	return (
		<div>
			<section className="container mx-auto p-3 text-center sm:text-left">
				<h1 className="mb-5 text-3xl text-center font-bold sm:text-6xl">
					{props.geoState.results[5].formatted_address}
				</h1>
			</section>
			<SevenDayForecast
				weatherState={props.weatherState}
				selectedUnitIcon={props.selectedUnitIcon}
				selectedWindSpeedUnit={props.selectedWindSpeedUnit}
			/>
		</div>
	);
};

export default SevenDayForecastPage;
