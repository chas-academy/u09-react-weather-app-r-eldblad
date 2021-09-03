import { Link } from "react-router-dom";

function MenuLinks() {
	return (
		<>
			<div className="text-sm lg:flex-grow">
				<Link
					to="/"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2">
					Current Forecast
				</Link>
				<Link
					to="/#"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2">
					Tuesday
				</Link>
				<Link
					to="/#"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2">
					Wednesday
				</Link>
				<Link
					to="/#"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2">
					Thursday
				</Link>
				<Link
					to="/#"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-6 p-2">
					Friday
				</Link>
			</div>
		</>
	);
}

export default MenuLinks;
