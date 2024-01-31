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

// Luego, puedes llamar a la función guardarDatos con los datos que desees guardar
// Ejemplo:
const datosAGuardar = {
    usuario: 'ejemplo',
    contraseña: 'secreto123',
};

guardarDatos(datosAGuardar);
