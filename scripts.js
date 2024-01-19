function copyToClipboard(id) {
    const imgElement = document.getElementById(id);

    // Crear un elemento de texto temporal
    const tempInput = document.createElement("input");
    tempInput.value = window.location.href + imgElement.src;

    // Agregar el elemento a la página
    document.body.appendChild(tempInput);

    // Seleccionar el contenido del campo de texto
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    // Copiar el contenido al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);

    // Mostrar un mensaje o realizar alguna acción adicional si es necesario
    alert("Ruta copiada: " + tempInput.value);
}
