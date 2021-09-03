import { useState } from "react";
import CloudIcon from "@material-ui/icons/Cloud";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MenuLinks from "./MenuLinks";
import Search from "./Search";

function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen((wasOpened) => !wasOpened);
	};

	return (
		<div>
			<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
				<div className="flex items-center flex-shrink-0 text-black mr-6">
					<CloudIcon />
					<span className="font-semibold text-xl tracking-tight text-black">
						Weather App
					</span>
				</div>
				<div className="block lg:hidden">
					<button
						className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-black"
						onClick={handleToggle}>
						{navbarOpen ? <MenuIcon /> : <MenuOpenIcon />}
					</button>
				</div>
				<div
					className={`${"w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center justify-evenly"} ${
						navbarOpen ? "hidden" : ""
					}`}>
					<MenuLinks />
				</div>
				<div className={`${"block"} ${navbarOpen ? "hidden" : ""}`}>
					<Search />
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
