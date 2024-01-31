// Este es el SHA actual del archivo data.json (reemplazar con el valor que obtuviste)
var currentSHA = "adc83b19e793491b1c6ea0fd8b46cd9f32e592fc";

// URL del archivo JSON en GitHub
var jsonURL = "https://raw.githubusercontent.com/TiendamiaBP/Brightpearl-test/main/data.json";

// Función para verificar la integridad del archivo JSON
function verificarIntegridad() {
    fetch(jsonURL)
        .then(response => response.text())
        .then(data => {
            var sha1 = CryptoJS.SHA1(data).toString();
            if (sha1 === currentSHA) {
                console.log("Integridad verificada. El archivo no ha sido modificado.");
            } else {
                console.warn("Advertencia: El archivo ha sido modificado. Posible alteración.");
            }
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}

// Llamar a la función cuando se cargue la página
verificarIntegridad();

