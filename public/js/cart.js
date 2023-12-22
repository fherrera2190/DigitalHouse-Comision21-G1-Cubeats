window.addEventListener("load", function () {
	getCart();
	// getTotal();
});

async function addItemToCart(product) {
	try {
		const response = await fetch("http://localhost:3000/api/carts/", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				product: +product,
			}),
		});
		const result = await response.json();
		console.log(result);
		console.log(result.data.message);

		const cartQua = document.getElementById("cartQua");
		if (cartQua) {
			cartQua.innerHTML = result.data.products.length;
		}
		if (result.ok) {
			Toastify({
				text: result.msg,
				duration: 1500,
				newWindow: true,
				close: false,
				gravity: "top", // `top` or `bottom`
				position: "right", // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					padding: "0.90em",
					background: "#36ba6f",
					"box-shadow": " 0 25px 50px -12px rgb(0 0 0 / 0.25)",
					color: "white",
					"font-size": "0.90rem",
					"font-weight": "400",
				},
				onClick: function () {}, // Callback after click
			}).showToast();
		}

		getCart();
	} catch (error) {
		Toastify({
			text: "Ya existe este producto en tu carrito.",
			duration: 1500,
			newWindow: true,
			close: false,
			gravity: "top", // `top` or `bottom`
			position: "right", // `left`, `center` or `right`
			stopOnFocus: true, // Prevents dismissing of toast on hover
			style: {
				padding: "0.90em",
				background: "#ba3636",
				"box-shadow": " 0 25px 50px -12px rgb(0 0 0 / 0.25)",
				color: "white",
				"font-size": "0.90rem",
				"font-weight": "400",
			},
			onClick: function () {}, // Callback after click
		}).showToast();
	}
}

async function getCart() {
	const response = await fetch("http://localhost:3000/api/carts/");
	const result = await response.json();
	const container = document.getElementById("cartContainer");
	const total = document.getElementById("total");
	const cartQuantity = document.getElementById("cartQuantity");
	const cartvisi = document.getElementById("cartvisi");
	const checkoutButton = document.getElementById("checkoutButton");

	if (cartQuantity) {
		const quantity = result.data.products.length;
		cartQuantity.innerHTML = quantity;

		if (quantity > 0) {
			cartvisi.classList.remove("hidden"); // Mostrar el carrito
			cartvisi.classList.add("flex");
		} else {
			cartvisi.classList.remove("flex");
			cartvisi.classList.add("hidden"); // Mostrar el carrito
		}
	}
	container.innerHTML = "";

	total.innerHTML = `$${result.data.total}`;

	if (result.data.products.length > 0) {
		result.data.products.forEach((element) => {
			container.innerHTML += `<div class="flex w-full justify-between">
  <div class="flex gap-4">
    <img
      src="/img/products/${element.image}"
      alt=""
      class="w-14 h-14 object-cover block group-hover:hidden transition-all ease-in-out"
    />
    <div class="flex flex-col text-start">
      <p class="text-base">${element.name}</p>
      <p class="text-zinc-400 text-sm font-normal">${element.username}</p>
    </div>
  </div>
  <div class="flex gap-2 items-start">
    <p class="text-base text-white">$${element.price}</p>
    <button onclick="removeItemToCart(${element.id})">
    <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-white"
        data-testid="remove-track"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.5868 12.0028L4.00444 18.5894L5.4182 20.0041L12.0009 13.4172L18.5831 20.0009L19.9972 18.5865L13.4147 12.0025L19.9983 5.41467L18.5845 4L12.0006 10.5882L5.41406 4.00015L4 5.41452L10.5868 12.0028Z"
        ></path>
      </svg>
  </button>
  </div>
</div>
<hr class="flex-1 border border-zinc-900 w-full" />`;
		});
		if (checkoutButton) {
			checkoutButton.disabled = false;
		}
	} else {
		container.innerHTML += `<p class="text-base font-normal">No hay productos en tu carrito.</p>
		<hr class="flex-1 border border-zinc-900 w-full" />`;
		if (checkoutButton) {
			checkoutButton.disabled = true;
			checkoutButton.classList.add("bg-zinc-800");
			checkoutButton.classList.add("text-zinc-700");
		}
	}
}

async function removeItemToCart(id) {
	const response = await fetch(
		`http://localhost:3000/api/carts/item?product=${id}`,
		{
			method: "delete",
		}
	);
	const result = await response.json();
	getCart();
	console.log(result);
}

async function clearCart() {
	const response = await fetch(`/api/carts/`, {
	  method: "delete",
	});
	const result = await response.json();
	getCart();
  }
  