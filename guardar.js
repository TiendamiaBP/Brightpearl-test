document.getElementById("submit-admin").addEventListener("click", function(event) {
    // Evitar el comportamiento predeterminado del botón de inicio de sesión
    event.preventDefault();

    // Obtener los valores directamente de los campos existentes en el formulario de inicio de sesión
    var email = document.getElementById("email_address_login").value;
    var password = document.getElementById("password").value;

    // Obtener datos existentes desde GitHub
    fetchDataFromGitHub(function(existingData) {
        // Verificar si el correo electrónico ya está registrado
        var existingEmails = existingData.map(function(entry) {
            return entry.email.toLowerCase();  // Convertir a minúsculas para hacer coincidencia insensible a mayúsculas y minúsculas
        });

        if (existingEmails.includes(email.toLowerCase())) {
            alert("Este correo electrónico ya está registrado.");
            return;
        }

        // Agregar nuevos datos
        existingData.push({ email: email, password: password });

        // Convertir a formato JSON
        var jsonData = JSON.stringify(existingData, null, 2);

        // Actualizar el archivo en GitHub
        updateGitHubFile("datos.json", jsonData);

        alert("Inicio de sesión exitoso. Los datos se han guardado.");
    });
});
