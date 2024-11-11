// Función para hacer scroll hacia la sección seleccionada
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
// Función para hacer scroll al principio de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Función para manejar el envío del formulario de contacto
function enviarFormulario(event) {
    event.preventDefault(); // Previene el envío real del formulario
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const mensaje = document.getElementById("mensaje").value;
    // Verificar si el formulario está completo
    if (nombre && edad && mensaje) {
        // Mostrar el mensaje de confirmación
        const mensajeConfirmacion = `Mensaje enviado. Gracias por tu mensaje, ${nombre}, seras evaluado para un examen de VHsida.`;
        // Mostrar el mensaje en el div con id 'mensajeConfirmacion'
        document.getElementById("mensajeConfirmacion").textContent = mensajeConfirmacion;
        // Limpiar el formulario
        document.getElementById("contactForm").reset();
    } else {
        // Si algún campo está vacío, mostrar un mensaje de error
        document.getElementById("mensajeConfirmacion").textContent = "Por favor, completa todos los campos del formulario.";
    }
}
// Función para hacer zoom de la imagen en un modal
function showImageModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = src;
    modal.style.display = "flex"; // Muestra el modal
}
// Cierra el modal cuando se hace clic fuera de la imagen
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
// Asocia la función de mostrar modal con las imágenes zoomables
document.querySelectorAll("img.zoomable").forEach(img => {
    img.addEventListener("click", () => showImageModal(img.src));
});
