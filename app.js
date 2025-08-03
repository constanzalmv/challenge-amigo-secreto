// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];
let amigosSorteados = [];

function sortearAmigo(){
    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = "";
    if(nombreAmigos.length > 0){

        let indiceAmigo = Math.floor(Math.random()*nombreAmigos.length);
        let amigoSorteado = nombreAmigos[indiceAmigo];
        alert(`Tu amigo sorteado es ${amigoSorteado}!!`);
        resultadoSorteo.innerHTML = amigoSorteado;
   
    }else{
        alert("Aún no hay amigos en la lista, crea un amigo primero!");
    }
    return;
}

function agregarAmigo(){
    
    let amigo = document.getElementById("amigo");

    //Si ya existe amigo, no agregar en la lista
    if (existeAmigoEnLista(amigo.value)){
        alert(`Amigo ${amigo.value} ya existe en el listado! Agrega otro`);         
    }else{
        nombreAmigos.push(amigo.value);
        console.log("Lista amigos: "+nombreAmigos);
        alert("Amigo ingresado correctamente!");
        //limpiar las listas antes de listar los amigos secretos
        limpiarListados("listaAmigos");
        limpiarListados("resultado");
        listarAmigos();
    }
    amigo.value ="";

    return;
}

function listarAmigos(){

      let listaAmigos = document.getElementById("listaAmigos");
      for(let i = 0; i < nombreAmigos.length; i ++  ){
        let amigoEnLista = document.createElement("li");
        amigoEnLista.innerHTML = nombreAmigos[i];
        console.log("amigo en LI : "+nombreAmigos[i]);
        listaAmigos.appendChild(amigoEnLista);
      }
      return;
}

//funcion para limpiar elementos como la lista de amigos o el amigo sorteado
function limpiarListados(idElemento){
       let elementoALimpiar = document.getElementById(idElemento);
      elementoALimpiar.innerHTML = ""; 
      return;  
}

function existeAmigoEnLista(amigo){
    for(let i = 0; i < nombreAmigos.length; i ++  ){
        if(nombreAmigos[i]== amigo)  return true;
    }
      return false;
}