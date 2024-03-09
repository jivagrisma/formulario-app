// Función para validar el formulario
function validateForm() {
    // Obtener los elementos del formulario
    var form = document.getElementById("form");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm-password");

    // Validar que los campos no estén vacíos
    if (name.value == "" || email.value == "" || password.value == "" || confirm_password.value == "") {
        alert("Por favor, completa todos los campos");
        return false;
    }

    // Validar que las contraseñas coincidan
    if (password.value != confirm_password.value) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    // Capturar los datos del formulario
    var data = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    // Mostrar los datos en la consola
    console.log(data);

    // Enviar el formulario
    return true;
}
