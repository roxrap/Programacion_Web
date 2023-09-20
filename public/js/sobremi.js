// Espera a que el documento esté completamente cargado antes de ejecutar el código JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento del encabezado por su etiqueta <header>
    var header = document.querySelector("header");

    // Agrega un controlador de eventos de clic al encabezado
    header.addEventListener("click", function() {
        // Cambia el color de fondo del encabezado a rojo cuando se hace clic
        header.style.backgroundColor = "red";
    });
});