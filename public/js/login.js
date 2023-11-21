const $ = id => document.getElementById(id);

window.onload = function () {
    console.log('Enganchando señal de login.js');

    //alert("Hola")
    function emailValid(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }
    function usernameValid(username) {
        return /^[a-zA-Z0-9_]+$/.test(username);
    }
    $('username').addEventListener('blur', function () {
        if (!this.value.trim()) {
            setError("El nombre de usuario es obligatorio");
        } else if (!usernameValid(this.value)) {
            setError("El nombre de usuario solo puede contener letras, números y guiones bajos (_)");
        } else {
            clearError();
        }
    });
    $('email').addEventListener('blur', function () {
        if (!this.value.trim()) {
            setError("El email es obligatorio");
        } else if (!emailValid(this.value)) {
            setError("El email es inválido");
        } else {
            clearError();
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

    function validateForm(event) {
        clearError();

        if (!$('email').value.trim()) {
            setError("El email es obligatorio");
            event.preventDefault(); 
        } else if (!emailValid($('email').value)) {
            setError("El email es inválido");
            event.preventDefault(); 
        }

        if (!$('password').value.trim()) {
            setError("La contraseña es obligatoria");
            event.preventDefault(); 
        }
        const msgError = document.querySelectorAll('.orange-error');
        if (msgError.length > 0) {
            setError("Hubo un error en la carga de datos");
            event.preventDefault();
        }
    }

    const formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', validateForm);
};