document.addEventListener("DOMContentLoaded", function () {
	console.log("Enganchando señal de register.js");

	function titleValid(title) {
		return (
			/^[\w-\.]+$/.test(title) &&
			title.trim().length >= 4 &&
			title.trim().length <= 500
		);
	}

	function categoryValid(category) {
		return category.trim() !== "";
	}

	function priceValid(price) {
		return /^\d+$/.test(price) && parseInt(price) > 0;
	}

	function descriptionValid(description) {
		return description.trim().length >= 5 && description.trim().length <= 125;
	}

	function beatValid(beat) {
		return beat !== null;
	}

	function imageValid(image) {
		return image !== null;
	}

	document.getElementById("title").addEventListener("blur", function () {
		clearErrorMessage();
		const titleInput = document.getElementById("title");
		if (!titleInput.value.trim()) {
			setErrorMessage("El título es obligatorio.");
		} else if (!titleValid(titleInput.value)) {
			setErrorMessage("Debe tener entre 4 y 500 caracteres.");
		}
	});

	document.getElementById("category").addEventListener("blur", function () {
		clearErrorMessage();
		if (!categoryValid(this.value)) {
			setErrorMessage("La categoría es obligatoria.");
		}
	});

	document.getElementById("price").addEventListener("blur", function () {
		clearErrorMessage();
		if (!this.value.trim()) {
			setErrorMessage("El precio es obligatorio.");
		} else if (!priceValid(this.value)) {
			setErrorMessage("Precio debe ser un número positivo.");
		}
	});

	document.getElementById("description").addEventListener("blur", function () {
		clearErrorMessage();
		if (!descriptionValid(this.value)) {
			setErrorMessage("La descripción debe tener entre 5 y 125 caracteres.");
		}
	});

	document.getElementById("beat").addEventListener("blur", function () {
		clearErrorMessage();
		if (!beatValid(this.value)) {
			setErrorMessage("Sube un beat en formato MP3.");
		}
	});

	document.getElementById("image").addEventListener("blur", function () {
		clearErrorMessage();
		if (!imageValid(this.value)) {
			setErrorMessage("Formato de imagen no permitido. Solo PNG, JPEG y JPG.");
		}
	});

	function clearErrorMessage() {
		document.getElementById("input-error").innerHTML = "";
		document.querySelector(".orange-error").style.display = "none";
	}

	function setErrorMessage(message) {
		document.getElementById("input-error").innerHTML = message;
		document.querySelector(".orange-error").style.display = "flex";
	}

	function validateForm(event) {
		clearErrorMessage();

		if (!titleValid(document.getElementById("title").value)) {
			setErrorMessage("El título es inválido.");
			event.preventDefault();
		}

		if (!categoryValid(document.getElementById("category").value)) {
			setErrorMessage("La categoría es obligatoria.");
			event.preventDefault();
		}

		if (!priceValid(document.getElementById("price").value)) {
			setErrorMessage("Precio debe ser un número positivo.");
			event.preventDefault();
		}

		if (!descriptionValid(document.getElementById("description").value)) {
			setErrorMessage("La descripción debe tener entre 5 y 125 caracteres.");
			event.preventDefault();
		}

		// Puedes agregar lógica de validación para beat e image si es necesario

		const msgError = document.querySelectorAll(".orange-error");
		if (msgError.length > 0) {
			setErrorMessage("Hubo un error en la carga de datos");
			event.preventDefault();
		}
	}

	const form = document.getElementById("formAddProduct");
	form.addEventListener("submit", validateForm);
});
