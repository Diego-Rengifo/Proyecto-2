//funcion que me aplica el estilo a la opcion sleccionada en el menu y quita la previamente selecionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#link a')
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.classList = "seleccionado";

    //hacemos desaparecer el menu una vez que se ha selecionado una opcion en modo responsive
    var x = document.getElementById("nav")
    x.className = "";
}
//funciones que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.classList === "") {
        x.classList = "responsive";
    }else{
        nav.classList.toggle("responsive");
    }
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function(){
    efectoHabilidades()
};
//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("cv").classList.add("barra-progreso4");
    }
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe antes de la validación
    
    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let tema = document.getElementById("tema").value;
    let mensaje = document.getElementById("mensaje").value;
    
    // Expresión regular para validar el correo electrónico
    let correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    // Verificar si el correo electrónico es válido
    if (!correoRegex.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return; // Detiene el envío si el correo no es válido
    }
    
    // Verificar que todos los campos estén llenos
    if (nombre === "" || correo === "" || tema === "" || mensaje === "") {
        alert("Todos los campos son obligatorios.");
        return; // Detiene el envío si hay campos vacíos
    }
    
    // Si todo es correcto, simular el envío del formulario (puedes agregar aquí la lógica de envío real)
    alert("Mensaje enviado con éxito!");
    
    // Limpiar el formulario
    document.getElementById("contact-form").reset();
});