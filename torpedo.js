
// como definir una variable.
var miVariableString= "Mi nombre es Jeff!";
// console.log imprime en pantalla algo.
console.log("hola");
console.log(5);
console.log(miVariableString);
console.log(4 + 5); // sale  : 9
//Mi nombre es Jeff!

//notacion abreviada:
num++; // incrementa en 1.
num--; // decrementa en 1. 

num += 10 // acumula en num 10. 
num -= 10 // le resta a num 10. 

// esta es la forma de recorrer todo un arreglo de inicio a fin.
//forma  de obtener el valor dentro del for es con nombrearreglo[variable del for]
var arreglo = [1,2,3,4,5];
for (var x = 0; x < arreglo.length; x++) {
  
  console.log(arreglo[x]);
  
}
//1==1 , 1!=1 , 1>1 , 1<1 , 1<=1
if (1==1) { // si esto se cumple y es verdadero:
    console.log("ESTO ES VERDADERO");
    console.log("ESTO ES VERDADERO");
    console.log("ESTO ES VERDADERO");
    console.log("ESTO ES VERDADERO");
    console.log("ESTO ES VERDADERO");
} else {  // si lo del IF es falso, se ejecurá el bloque else
    console.log("ESTO ES FALSO");
}

// definición
var arreglo = [1,2,3,4,5];
//             0 1 2 3 4 
//cambiar un valor de la pocision 0
arreglo[0] = "VALOR NUEVO";

//obtener el valor de un arreglo en posición 1
var nueva_variuable = arreglo[1];
// O 
console.log(arreglo[1]);

arreglo.push(4); // agregar al final
arreglo.pop(); // elimina el final

for (var x = 0; x < 10; x++) {
    console.log("ESTO SE REPETIRA 10");
}
  

var numero = 250;
for (var x = 0; x < numero; x++) {
  console.log("ESTO SE REPETIRA 250");
}


function nombre_funcion(){
  console.log("HOLA");
}
nombre_funcion();

function nombre_funcion(recibovariable){
    console.log(recibovariable);
}
nombre_funcion("HOLA");


function nombre_funcion(variableParametro){
    //mucho codigo trabao....
    var salida = variableParametro + " Pancho";

  return salida;
}

var salida = nombre_funcion("HOLA");
console.log(salida); // dice HOLA



// 1.-  en 2 lineas.
// INSTRUCCION PARA OBTENER EL HTML TAG y la guardo en var divCompletoAPP
var divCompletoAPP = document.getElementById("app");

//cambia el valor INTERNO por otro HTML. 
divCompletoAPP.innerHTML = varPancho;

// 2.- en una sola linea.
document.getElementById("app").innerHTML = "HOLA";