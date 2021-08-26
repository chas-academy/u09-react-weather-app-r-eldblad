function Navbar() {
  const toggleMobileMenu = (event) => {
    console.log(event);
  };
  return (
    <div>
      <nav className="bg-gray-300">
        <div className="px-8 mx-auto border">
          <div className="flex justify-around space-x-4">
            <div>
              <button className="flex items-center py-5 px-3 text-gray-700">
                <svg
                  className="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <span className="py-5 px-3 font-bold">Weather App</span>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <button className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Today
              </button>
              <button className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Tuesday
              </button>
              <button className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Wednesday
              </button>
              <button className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Thursday
              </button>
              <button className="py-5 px-3">Friday</button>
            </div>
            <div className="py-5 px-3 hidden md:flex">
              <form className="py-5 px-3">
                <label htmlFor="location-search">Search: </label>
                <input type="search"></input>
              </form>
            </div>
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-menu hidden">
          <button className="block py-2 px-4 text-sm">Today</button>
          <button className="block py-2 px-4 text-sm">Tuesday</button>
          <button className="block py-2 px-4 text-sm">Wednesday</button>
          <button className="block py-2 px-4 text-sm">Thursday</button>
          <button className="block py-2 px-4 text-sm">Friday</button>
        </div>
        <div className="py-5 px-3 md:flex">
          <form className="mobile-form hidden py-5 px-3">
            <label htmlFor="location-search">Search: </label>
            <input type="search"></input>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
