let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() { 
    let numeroDeUsuario =  parseInt(document.getElementById('valorUsuario').value);
       
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`!acertaste el numero secreto en¡ ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);             
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else 
          //Si el usuario no acerto. 
   { 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','!el numero secreto es menor¡'); 
        } else{ 
            asignarTextoElemento('p','!el numero secreto es mayor¡'); 
        } 
        intentos ++;
        limpiarCaja();
    }
   return;
}

function limpiarCaja(){ 
    document.querySelector('#valorUsuario').value = '';
}

function asignarNumeroSecreto () {
    let numeroGenerado = Math.floor( Math.random()* numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log ( listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'se sortearon todos los numeros posibles');
    } else {
    //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return asignarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','!Juego del Numero Secreto¡');
    asignarTextoElemento('p', `Indicame un numero del 1 al ${numeroMaximo}`);   
    numeroSecreto = asignarNumeroSecreto ();
    intentos = 1;
}


function reiniciarJuego(){
    //limpiarCaja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
   //Generar numero aleatorio
   //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();