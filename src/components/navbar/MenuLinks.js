import { Link } from "react-router-dom";

function MenuLinks() {
	return (
		<>
			<div className="text-sm lg:flex-grow">
				<Link
					to="/current-forecast"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2">
					Aktuell Prognos
				</Link>
				<Link
					to="/#"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2">
					Tisdag
				</Link>
				<Link
					to="/#"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2">
					Onsdag
				</Link>
				<Link
					to="/#"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2">
					Torsdag
				</Link>
				<Link
					to="/#"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-6 p-2">
					Fredag
				</Link>
			</div>
		</>
	);
}

export default MenuLinks;
