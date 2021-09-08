const FiveDayForecastPage = (props) => {
	return (
		<div>
			<section className="container mx-auto p-3 text-center sm:text-left">
				<h1 className="sm:text-5xl mx:text-3x1 font-sans font-bold">
					{props.geoState.results[5].formatted_address}
				</h1>
			</section>
		</div>
	);
};

export default FiveDayForecastPage;
