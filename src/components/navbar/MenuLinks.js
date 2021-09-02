import { Link } from "react-router-dom";

function MenuLinks() {
  return (
    <>
      <div class="text-sm lg:flex-grow">
        <Link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2"
        >
          Current Forecast
        </Link>
        <Link
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2"
        >
          Tuesday
        </Link>
        <Link
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2"
        >
          Wednesday
        </Link>
        <Link
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-4 p-2"
        >
          Thursday
        </Link>
        <Link
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow mr-6 p-2"
        >
          Friday
        </Link>
      </div>
    </>
  );
}

export default MenuLinks;
