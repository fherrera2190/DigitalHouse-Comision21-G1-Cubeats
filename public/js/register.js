const $ = (id) => document.getElementById(id);

window.onload = function () {

  function clearError() {
    //funcion que voy a utilizar a lo largo del codigo para hacerlo mas largo pero mas entendible (para mi)
    $("input-error").innerHTML = "";
  }

  function setError(message) {
    // lo mismo que dije arriba
    $("input-error").innerHTML = message;
  }

  function emailValid(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }

  function passwordValid(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  }
  function usernameValid(username) {
    return /^[a-zA-Z0-9_]+$/.test(username);
  }
  $("username").addEventListener("blur", function () {
    if (!this.value.trim()) {
      setError("El nombre de usuario es obligatorio");
    } else if (!usernameValid(this.value)) {
      setError(
        "El nombre de usuario solo puede contener letras, números y guiones bajos (_)"
      );
    } else {
      clearError();
    }
  });
  $("username").addEventListener("change", async function () {
    if (usernameValid(this.value)) {
      try {
        const response = await fetch(
          `/api/users/check-username?username=${this.value}`
        );
        const result = await response.json();
        console.log(result);
        if (result.data) {
          setError("El username ya se encuentra registrado");
        } else {
          clearError();
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
  $("email").addEventListener("blur", function () {
    if (!this.value.trim()) {
      setError("El email es obligatorio");
    } else if (!emailValid(this.value)) {
      setError("El email es inválido");
    } else {
      clearError();
    }
  });

  $("email").addEventListener("change", async function () {
    if (emailValid(this.value)) {
      try {
        const response = await fetch(
          `/api/users/check-email?email=${this.value}`
        );
        const result = await response.json();
        console.log(result);
        if (result.data) {
          setError("El email ya se encuentra registrado");
        } else {
          clearError();
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  $("password").addEventListener("blur", function () {
    if (!this.value.trim()) {
      setError("La contraseña es obligatoria");
    } else if (!passwordValid(this.value)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, un número (0-9), una mayúscula y un carácter especial"
      );
    } else {
      clearError();
    }
  });

  $("password2").addEventListener("blur", function () {
    if (!this.value.trim()) {
      setError("Debes confirmar tu contraseña");
    } else if (this.value.trim() !== $("password").value.trim()) {
      setError("Las contraseñas no coinciden");
    } else {
      clearError();
    }
  });

  function clearError() {
    // Utilizo el clearError para ocultar el bloque naranja con el mensaje de error
    $("input-error").innerHTML = "";
    document.querySelector(".orange-error").style.display = "none";
  }

  function setError(message) {
    $("input-error").innerHTML = message; // Utilizo el setError para mostrar el bloque naranja con el mensaje de error
    document.querySelector(".orange-error").style.display = "flex";
  }

  function validateForm(event) {
    // Con esta funcion quiero evitar que se envíe el formulario
    clearError();

    if (!$("email").value.trim()) {
      setError("El email es obligatorio");
      event.preventDefault();
    } else if (!emailValid($("email").value)) {
      setError("El email es inválido");
      event.preventDefault();
    }

    if (!$("password").value.trim()) {
      setError("La contraseña es obligatoria");
      event.preventDefault();
    } else if (!passwordValid($("password").value)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, un número (0-9), una mayúscula y un carácter especial"
      );
      event.preventDefault();
    }
    if (!$("password2").value.trim()) {
      setError("Debes confirmar tu contraseña");
      event.preventDefault();
    } else if ($("password2").value.trim() !== $("password").value.trim()) {
      setError("Las contraseñas no coinciden");
      event.preventDefault();
    }

    // const msgError = document.querySelectorAll(".orange-error");
    // if (msgError.length > 0) {
    //   setError("Hubo un error en la carga de datos");
    //   event.preventDefault();
    // }
  }

  const form = document.getElementById("formAdd");
  form.addEventListener("submit", validateForm);
};
