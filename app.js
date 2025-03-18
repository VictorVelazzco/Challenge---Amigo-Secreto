// Variables globales
let nombres = []; // Lista de nombres ingresados por el usuario
let nombresSorteados = []; // Almacena los nombres ya seleccionados

// Función para agregar un nombre a la lista
function agregarAmigo() {
    // Obtener el valor del input
    let nombre = document.getElementById('amigo').value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Añadir el nombre al arreglo usando .push()
    nombres.push(nombre);

    // Limpiar el input
    document.getElementById('amigo').value = "";

    // Actualizar la lista visible de amigos
    actualizarListaAmigos();
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; // Limpiar la lista actual

    // Recorrer la lista de nombres y agregar cada uno como un <li>
    nombres.forEach((nombre) => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verificar si hay nombres disponibles para sortear
    if (nombres.length === 0) {
        alert("No hay nombres para sortear. Por favor, añade algunos nombres.");
        return;
    }

    // Verificar si ya se sortearon todos los nombres
    if (nombresSorteados.length === nombres.length) {
        document.getElementById('resultado').innerHTML = "<li>¡Ya se sortearon todos los nombres!</li>";
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio;
    let nombreSorteado;

    do {
        indiceAleatorio = Math.floor(Math.random() * nombres.length);
        nombreSorteado = nombres[indiceAleatorio];
    } while (nombresSorteados.includes(nombreSorteado)); // Repetir hasta encontrar un nombre no sorteado

    // Agregar el nombre sorteado a la lista de sorteados
    nombresSorteados.push(nombreSorteado);

    // Mostrar el nombre sorteado en la lista de resultados
    let resultadoHTML = document.getElementById('resultado');
    let li = document.createElement('li');
    li.textContent = nombreSorteado;
    resultadoHTML.appendChild(li);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Limpiar las listas globales
    nombres = [];
    nombresSorteados = [];

    // Limpiar el input
    document.getElementById('amigo').value = "";

    // Limpiar las listas visibles
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";

    // Mostrar un mensaje opcional si deseas informar al usuario
    alert("El juego ha sido reiniciado. Puedes empezar de nuevo.");
}