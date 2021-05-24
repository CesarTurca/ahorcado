String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); }

//Uso: palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
const palabras = ['E'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;
document.querySelector('#output').innerHTML = palabraConGuiones;
document.querySelector('#calcular').addEventListener('click', () =>{
    const letra = document.querySelector('#letra').value;
    let haFallado = true;

    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado = false;
        }
    } 

    if(haFallado){
        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(200*contadorFallos) + 'px 0';
        if(contadorFallos == 4){
            alert("Perdiste el juego")
        }
    }else{
        if(palabraConGuiones.indexOf('_') <0){
            document.querySelector('#ganador').style.display = 'flex';
        }
    }



    document.querySelector('#output').innerHTML = palabraConGuiones;    

    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
    
});