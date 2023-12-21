document
	.getElementById("searchForm")
	.addEventListener("submit", function (event) {
		const searchValue = document.getElementById("search").value.trim();

		if (searchValue === "") {
			event.preventDefault();
		}
	});
