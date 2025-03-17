// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

const amigos = []; //array para almacenar los nombres

// valodar solo ingreso de texto en el nombre
function validartexto(parametro){
    var patron = /^[a-zA-Z\s]*$/;
    if (parametro.search(patron)){
        return false;
    } else {
        return true;
    }
}

//agregar amigos a la lista
function agregarAmigo() {
    const imputAmigo = document.getElementById("amigo"); 
    const nombreAmigo = imputAmigo.value;
    

if (nombreAmigo === ""){
    alert("No ingreso datos. Por favor, inserte un nombre."); 
} else if (validartexto(nombreAmigo)==false){
    alert("Solo se admite letras en el nombre."); 
    imputAmigo.value = "";
    imputAmigo.focus();   
    return;
}



//agregar el nombre al array
amigos.push(nombreAmigo);

//
actualizarLista();

//limpiar los campos de entrada
imputAmigo.value = "";
imputAmigo.focus();


}

function actualizarLista(){
    const ullistaAmigo = document.getElementById("listaAmigos") //****
    ullistaAmigo.innerHTML = ""; //limpiar lista existente

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ullistaAmigo.appendChild(li); //***
    });
}

//boton sortear Amigo
function sortearAmigo() {

    if (amigos.length === 0){
        alert("No hay amigos para sortear. Adicione nombre de sus amigos");
        return;
    }

const indiceAleatorio = Math.floor(Math.random()*amigos.length);

const amigoSorteado = amigos[indiceAleatorio];

const ulresultado = document.getElementById("resultado");

ulresultado.innerHTML = `<li> El amigo secreto es: ${amigoSorteado}</li>`;
}

//asignar evento a los botones
document.addEventListener('DOMContentLoaded', () => {
document.getElementById("button-add").addEventListener("click", agregarAmigo)
document.getElementById("button-draw").addEventListener("click", sortearAmigo);
}
);