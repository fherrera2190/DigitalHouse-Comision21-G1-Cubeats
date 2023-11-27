document.addEventListener("DOMContentLoaded", function () {
	console.log("Enganchando señal de register.js");

	function titleValid(title) {
		return (
			/^[\w-\.]+$/.test(title) &&
			title.trim().length >= 4 &&
			title.trim().length <= 500
		);
	}

	function priceValid(price) {
		return /^\d+$/.test(price) && parseInt(price) > 0;
	}

	function descriptionValid(description) {
		return description.trim().length >= 10 && description.trim().length <= 500;
	}

	function clearErrorMessage() {
		document.getElementById("input-error").innerHTML = "";
		document.querySelector(".orange-error").style.display = "none";
	}

	function setErrorMessage(message) {
		document.getElementById("input-error").innerHTML = message;
		document.querySelector(".orange-error").style.display = "flex";
	}

	function validateTitle() {
		clearErrorMessage();
		const titleInput = document.getElementById("title");
		if (!titleInput.value.trim()) {
			setErrorMessage("El título es obligatorio.");
		} else if (!titleValid(titleInput.value)) {
			setErrorMessage("Debe tener entre 4 y 500 caracteres.");
		}
	}

	function validatePrice() {
		clearErrorMessage();
		const priceInput = document.getElementById("price");
		if (!priceInput.value.trim()) {
			setErrorMessage("El precio es obligatorio.");
		} else if (!priceValid(priceInput.value)) {
			setErrorMessage("Precio debe ser un número positivo.");
		}
	}

	function validateDescription() {
		clearErrorMessage();
		const descriptionInput = document.getElementById("description");
		if (!descriptionValid(descriptionInput.value)) {
			setErrorMessage("La descripción debe tener entre 10 y 500 caracteres.");
		}
	}

	function validateForm(event) {
		clearErrorMessage();

		const titleInput = document.getElementById("title");
		if (!titleValid(titleInput.value)) {
			setErrorMessage("El título es inválido.");
			event.preventDefault();
		}

		const priceInput = document.getElementById("price");
		if (!priceValid(priceInput.value)) {
			setErrorMessage("Precio debe ser un número positivo.");
			event.preventDefault();
		}

		const descriptionInput = document.getElementById("description");
		if (!descriptionValid(descriptionInput.value)) {
			setErrorMessage("La descripción debe tener entre 10 y 500 caracteres.");
			event.preventDefault();
		}

		// Puedes agregar lógica de validación para beat e image si es necesario

		const msgError = document.querySelectorAll(".orange-error");
		if (msgError.length > 0) {
			setErrorMessage("Hubo un error en la carga de datos");
			event.preventDefault();
		}
	}

	const form = document.getElementById("formEditProduct");

	form.addEventListener("input", function (event) {
		if (event.target.id === "title") {
			validateTitle();
		} else if (event.target.id === "price") {
			validatePrice();
		} else if (event.target.id === "description") {
			validateDescription();
		}
	});

	form.addEventListener("submit", validateForm);
});
