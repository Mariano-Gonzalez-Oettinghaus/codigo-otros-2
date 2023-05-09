// Inicio de la refactorización del código original
// Este programa permite agregar invitados a una lista, ingresando su nombre, edad y nacionalidad. También permite eliminar a los invitados de la lista.
// Se utiliza un formulario HTML para capturar los datos y se agrega un evento para que al hacer clic en el botón de enviar, se agregue el invitado a la lista.
// El programa valida que se ingresen datos correctos, como un nombre no vacío y una edad entre 18 y 120 años.
// Seleccionar el formulario y agregar un listener para el evento "submit"


//se sustituyo la palabra reservada var por let y/o const para declarar las variables
let form = document.querySelector("#form");
form.addEventListener("submit", function(event) {
// Evitar que el formulario se envíe automáticamente
event.preventDefault();


//se sustituyo el nombre de las variables por unos mas descriptivos
// Obtener los elementos del formulario
let nameInput = form.elements[0];
let ageInput = form.elements[1];
let nationalitySelect = form.elements[2];

// Obtener los valores ingresados en el formulario
let name = nameInput.value;
let age = ageInput.value;
let nationality = nationalitySelect.options[nationalitySelect.selectedIndex].value;

// Validar los datos ingresados en el formulario
if (name.length === 0) {
nameInput.classList.add("error");
return; // Detener la ejecución de la función si hay errores en el formulario
}
if (age < 18 || age > 120) {
ageInput.classList.add("error");
return;
}

// Llamar a la función agregarInvitado si los datos del formulario son válidos
agregarInvitado(name, age, nationality);
});

// Función para agregar un nuevo invitado a la lista de invitados
function agregarInvitado(name, age, nationality) {
// Convertir la abreviatura de la nacionalidad a su nombre completo
switch (nationality) {
case "ar":
nationality = "Argentina";
break;
case "mx":
nationality = "Mexicana";
break;
case "vnzl":
nationality = "Venezolana";
break;
case "per":
nationality = "Peruana";
break;
default:
nationality = "Otro";
}

// Obtener la lista de invitados y crear un nuevo elemento para el invitado
const guestList = document.getElementById("lista-de-invitados");
const guestListItem = document.createElement("div");
guestListItem.classList.add("elemento-lista");
guestList.appendChild(guestListItem);

// Función auxiliar para crear un nuevo elemento en la lista de invitados
function crearElemento(descripcion, valor) {
const span = document.createElement("span");
const input = document.createElement("input");
const lineBreak = document.createElement("br");
span.textContent = descripcion + ": ";
input.value = valor;
guestListItem.appendChild(span);
guestListItem.appendChild(input);
guestListItem.appendChild(lineBreak);
}

// Agregar los elementos del invitado a la lista de invitados
crearElemento("Nombre", name);
crearElemento("Edad", age);
crearElemento("Nacionalidad", nationality);

// Agregar un botón para eliminar al invitado de la lista de invitados
const deleteButton = document.createElement("button");
deleteButton.textContent = "Eliminar invitado";
deleteButton.id = "boton-borrar";
const lineBreak = document.createElement("br");
guestListItem.appendChild(lineBreak);
guestListItem.appendChild(deleteButton);

// Función para eliminar al invitado de la lista de invitados
deleteButton.onclick = function() {
guestListItem.remove();
};
}