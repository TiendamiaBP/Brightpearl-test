document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email_address_login").value; // Usando el nombre del campo original
    var password = document.getElementById("password").value;

    // Obtener datos existentes desde GitHub
    fetchDataFromGitHub(function(existingData) {
        // Agregar nuevos datos
        existingData.push({ email: email, password: password });

        // Convertir a formato JSON
        var jsonData = JSON.stringify(existingData, null, 2);

        // Actualizar el archivo en GitHub
        updateGitHubFile("datos.json", jsonData);

        alert("Registro exitoso. Los datos se han guardado.");
    });
});

function fetchDataFromGitHub(callback) {
    var githubRepo = "tu-usuario/tu-repositorio";  // Cambia esto con tu nombre de usuario y nombre de repositorio
    var apiUrl = `https://api.github.com/repos/${githubRepo}/contents/datos.json`;

    // Realizar una solicitud GET a la API de GitHub
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Decodificar el contenido del archivo base64
            var content = atob(data.content);

            // Convertir el contenido a un objeto JavaScript
            var existingData = JSON.parse(content);

            // Llamar al callback con los datos existentes
            callback(existingData);
        })
        .catch(error => console.error("Error al obtener datos desde GitHub:", error));
}

function updateGitHubFile(fileName, content) {
    var githubRepo = "tu-usuario/tu-repositorio";  // Cambia esto con tu nombre de usuario y nombre de repositorio
    var apiUrl = `https://api.github.com/repos/${githubRepo}/contents/${fileName}`;

    // Obtener el último commit SHA del archivo
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var sha = data.sha;

            // Preparar los datos para la solicitud de actualización
            var updateData = {
                message: "Actualizar datos.json",
                content: btoa(content),  // Codificar el contenido a base64
                sha: sha
            };

            // Realizar una solicitud PUT a la API de GitHub para actualizar el archivo
            fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "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"  // Cambia esto con tu token de acceso personal de GitHub
                },
                body: JSON.stringify(updateData)
            })
                .then(response => response.json())
                .then(data => console.log("Archivo actualizado en GitHub:", data))
                .catch(error => console.error("Error al actualizar archivo en GitHub:", error));
        })
        .catch(error => console.error("Error al obtener SHA del archivo en GitHub:", error));
}
