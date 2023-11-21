const $ = id => document.getElementById(id);

window.onload = function () {
    console.log('Enganchando señal de register.js');

    function clearError() {
        $('input-error').innerHTML = "";
    }

    function setError(message) {
        $('input-error').innerHTML = message;
    }

    function emailValid(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }

    function passwordValid(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
    }

    $('email').addEventListener('blur', function () {
        if (!this.value.trim()) {
            setError("El email es obligatorio");
        } else if (!emailValid(this.value)) {
            setError("El email es inválido");
        } else {
            clearError();
        }
    });

    $('email').addEventListener('change', async function () {
        if (emailValid(this.value)) {
            try {
                const response = await fetch(`/user.api/check-email?email=${this.value}`);
                const result = await response.json();

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

    $('password').addEventListener('blur', function () {
        if (!this.value.trim()) {
            setError("La contraseña es obligatoria");
        } else if (!passwordValid(this.value)) {
            setError("La contraseña debe tener al menos 8 caracteres, un número (0-9), una mayúscula y un carácter especial");
        } else {
            clearError();
        }
    });

    $('password2').addEventListener('blur', function () {
        if (!this.value.trim()) {
            setError("Debes confirmar tu contraseña");
        } else if (this.value.trim() !== $('password').value.trim()) {
            setError("Las contraseñas no coinciden");
        } else {
            clearError();
        }
    });

    function clearError() { // Utilizo el clearError para ocultar el bloque naranja con el mensaje de error
        $('input-error').innerHTML = "";
        document.querySelector('.orange-error').style.display = "none";
    }

    function setError(message) {
        $('input-error').innerHTML = message;  // Utilizo el setError para mostrar el bloque naranja con el mensaje de error
        document.querySelector('.orange-error').style.display = "block";
    }

};
