document
	.getElementById("searchForm")
	.addEventListener("submit", function (event) {
		const searchValue = document.getElementById("search").value.trim();

		if (searchValue === "") {
			document.getElementById("searchError").classList.remove("hidden");
			document.getElementById("searchError").classList.add("flex");
			event.preventDefault();
		} else {
			document.getElementById("searchError").classList.add("hidden");
			document.getElementById("searchError").classList.remove("flex");
		}
	});
