const likefunction = async (id) => {
	const heart = document.getElementById("svg-heart-path-" + id);
	const response = await fetch("/api/products/like?id=" + id);
	const result = await response.json();

	// console.log(result.ok);

	if (result.ok) {
		heart.setAttribute("fill", "#a1a1aa");
		heart.removeAttribute("fill-rule");
	} else {
		heart.removeAttribute("fill");
		heart.setAttribute("fill-rule", "evenodd");
	}
};

// Toastify({
// 	text: "Para marcar como favorito, inicia sesión o crea una cuenta.",
// 	duration: 1500,
// 	newWindow: true,
// 	close: false,
// 	gravity: "top", // `top` or `bottom`
// 	position: "right", // `left`, `center` or `right`
// 	stopOnFocus: true, // Prevents dismissing of toast on hover
// 	style: {
// 		padding: "0.90em",
// 		background: "#ba3636",
// 		"box-shadow": " 0 25px 50px -12px rgb(0 0 0 / 0.25)",
// 		color: "white",
// 		"font-size": "0.90rem",
// 		"font-weight": "400",
// 	},
// 	onClick: function () {}, // Callback after click
// }).showToast();
