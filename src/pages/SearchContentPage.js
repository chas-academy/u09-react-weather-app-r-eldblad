import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchContentPage = () => {
	const [searchResponse, setSearchResponse] = useState(null);
	const location = useLocation();

	useEffect(() => {
		setSearchResponse(location.state);
		console.log(searchResponse);
	}, [location, searchResponse]);

	if (searchResponse) {
		const icon = searchResponse.weather.weather[0].icon;
		return (
			<div>
				{
					<section className="container mx-auto">
						<h1 className="text-3xl text-center font-bold sm:text-6xl">
							{searchResponse.weather.name}
						</h1>
						<div className="flex items-center justify-center">
							<img
								title={searchResponse.weather.weather[0].description}
								src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
								alt="weather-icon"
							/>
							<p>{searchResponse.weather.weather[0].description}</p>
						</div>
						<div>
							<p className="text-4xl font-semibold text-center">
								{Math.round(searchResponse.weather.main.temp)}
							</p>
							<p className="text-2xl mb-3 text-center">
								Känns som {Math.round(searchResponse.weather.main.feels_like)};
							</p>
						</div>
						<div className="mb-5 font-semibold">
							<p className="text-center">
								Vindstyrka: {Math.round(searchResponse.weather.wind.speed)} m/s
							</p>
							<p className="text-center">
								Luftfuktighet: {searchResponse.weather.main.humidity}%
							</p>
						</div>
						<div className="mt-3 font-semibold">
							<em>
								<p className="text-center ">
									Soluppgång:{" "}
									{new Date(
										searchResponse.weather.sys.sunrise * 1000
									).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit",
									})}
								</p>
								<p className="text-center">
									Solnedgång:{" "}
									{new Date(
										searchResponse.weather.sys.sunset * 1000
									).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit",
									})}
								</p>
							</em>
						</div>
					</section>
				}
			</div>
		);
	}
	return <div></div>;
};

export default SearchContentPage;
