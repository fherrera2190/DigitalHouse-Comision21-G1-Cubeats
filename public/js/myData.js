const $ = (id) => document.getElementById(id);

const expresiones = {
	firs_name: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']{3,50}$/,
	last_name: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']{3,50}$/,
	description:
		/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9\s\.,!?¿¡@#$%^&*()_+-=<>;:'"[\]{}|\\/]{5,125}$/,
};
const validFormatImage = ["image/png", "image/jpg", "image/jpeg"];
window.addEventListener("load", function () {
	const image = document.getElementById("image");
	const divError = document.getElementById("divError");
	image.addEventListener("input", previewImage);

	$("formUpdateProfile").addEventListener("submit", function (e) {
		e.preventDefault();
		const expFirstName = expresiones.firs_name.test($("first_name").value);
		const expLastName = expresiones.last_name.test($("last_name").value);
		const expDescription = expresiones.description.test($("description").value);
		const inputError = document.getElementById("input-error");
		let expImage = false;

		inputError.innerHTML = "";

		if (
			image.files &&
			image.files[0] &&
			!validFormatImage.includes(image.files[0].type)
		) {
			expImage = true;
		}

		if (expFirstName && expLastName && expDescription && !expImage) {
			this.submit();
		} else {
			divError.classList.remove("hidden");
			divError.classList.add("flex");

			if (!expFirstName)
				inputError.innerHTML += `<p>Debe ingresar un nombre, que contenga solo letras.</p>`;
			if (!expLastName)
				inputError.innerHTML += `<p>Debe ingresar un apellido, que contenga solo letras.</p>`;
			if (!expDescription)
				inputError.innerHTML += `<p>Debe ingresar una descripción, que tenga entre 20 y 500 caracteres.</p>`;
			if (expImage)
				inputError.innerHTML += `<p>Debe ingresar un formato valido de imagen JPG, JPEG,PNG.`;
		}
	});
});

function previewImage() {
	const input = document.getElementById("image");
	const preview = document.getElementById("previewImage");
	const preview2 = document.getElementById("backgroundImage");
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			preview.src = e.target.result;
			preview2.src = e.target.result;
		};
		// console.log( input.files[0].type)
		reader.readAsDataURL(input.files[0]);
	}
}
