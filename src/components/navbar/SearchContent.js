const SearchContent = (props) => {
	return (
		<div>
			<h1>{props.searchedLocation.data.name}</h1>
		</div>
	);
};

export default SearchContent;
