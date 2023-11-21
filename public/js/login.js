const $ = id => document.getElementById(id);

window.onload = function () {
    console.log('Enganchando señal de login.js');

    function emailValid(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
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

                if (!result.data) {
                    setError("El email no está registrado");
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
        } else {
            clearError();
        }
    });

    function clearError() {
        $('input-error').innerHTML = "";
        document.querySelector('.orange-error').style.display = "none";
    }

    function setError(message) {
        $('input-error').innerHTML = message; 
        document.querySelector('.orange-error').style.display = "block";
    }
};