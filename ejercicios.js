// var x = 0;

// for (var i = 1; i < 4 ; i=i+2)
// {

//     x = x + i;
//     console.log(x);
//     console.log(i);

// }


// function a(b,c){
//     return b*3-c;
// }

// console.log(a(3,2));
// console.log(a(1,1));

// console.log("OTRO");

// for (let i = 0; i < 100; i++) {
    
//     if (i==10) {
//         break;
//     }
    
//     console.log(i);
// }


// console.log("OTRO2");

// var x = 'hello';
// var y = 'world!';

// for (let num1 = 1; num1 <= x.length; num1++) {

//     for (let num2 = 1; num2 <= y.length; num2++) {

//         if(x.length == 4)
//             console.log(x+' '+y);
    
//     }

//     if(num1 != 4)
//     console.log(x.length+y.length);
    
// }


// console.log("OTRO3");

// var array = [5,3,4,1];

// for (let x = 0; x < array.length; x++) {
    
//     for (let y = array.length-1; y >= x ; y--) {
        
//         if(array[x] > array[y])
//         {
//             var temp = array[y];
//             array[y] = array[x];
//             array[x] = temp;
//         }
        
//     }
    
// }

// // console.log(array);




// function sumaYclg(){
//     num = num + 2;
//     console.log(num);
// }

// var num = 1;
// console.log(num);

// sumaYclg();
// sumaYclg();
// sumaYclg();
// sumaYclg();
// sumaYclg();
// sumaYclg();


// //Esta funcion
// //suma 2 numeros
// //tienes que pasar X y el Y
// //retornara una suma. 
// function a(x,y){
    
//     return x+y;
// }

// console.log(a(5,5));

























// function a(x,y){
//     z = []
//     z.push(x);
//     z.push(y);
//     z.push(5);
//     console.log(z);
//     return z;
// }
// b = a(2,2)
// console.log(b);
// console.log(a(6,8));

























// function a(x){
//     if(x[0] < x[1]) {
//        return true;
//     }
//     else {
//        return false;
//     }
//  }
//  b = a([2,3,4,5])
//  console.log(b);










































// console.log("EJERCICIO 2");

// x = 5;
// function a(){
//     x = 10;
//     return 7;
// }
// console.log(x);
// x = a();
// console.log(x);



























// console.log("EJERCICIO 2");


// x = 5
// function a(){
//   x=10;
// }
// console.log(x);
// x = a();
// console.log(x);

























// console.log("EJERCICIO 3");

// function a(x){
//   x = x+3;
//   x = b(x) + 10;
//   console.log('x inside a is', x);
// }
// function b(x){
//   x = x*2;
//   console.log('x inside b is', x);
//   return x;
// }
// y = a(2);
// console.log(y);








































// console.log("EJERCICIO 4 - Dificil");

// function removeNegatives(arr){
//     for(var i=0; i<arr.length; i++){
//        if(arr[i] < 0) {
//            arr[i] = arr.pop();
//            i--;
//        }
//     }
//     return arr;
// }

// a = removeNegatives([-1,3,5]);
// b = removeNegatives([-1,3,-5]);
// console.log(a);
// console.log(b);
















var x = ["ENERO","FEBRERO", "MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO"];

for (var numero = 0; numero < x.length ; numero++)
{

  console.log( x[ numero ] );

}




// for (var x = 0; x <= 3; x++) {
//   console.log("ENTRE!");
//   console.log(x);
//   console.log("TERMINE EL CICLO: ",x);
// // }




// //Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)

function returnOddArray(){

  var arr = [];
  for (var x = 0; x <= 255; x= x + 2) {    
      arr.push(x);
  }

  return arr;

}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]



// function resetNegativos(x){
  
// }

// resetNegativos([1,2,-1,-3])

function htmlTitulo(cadenaTexto){
  
  return "<h1>" + cadenaTexto + "</h1>";
  
}


// function cualquier_nombre(arr1, valorY){

//   // var contador = 0;
  
//   // for(var i= 0 ; i < arr.lenght;i++){
//   //       contador++;
//   //       if(valorY < )
//   //       contador = contador + 1;
//   // }
  
//   return 
  
//   }
  
  
  
//   cualquier_nombre([4,7,9,10,24],8);
  
// // este for recorre del 0 al 255
// for (let x = 0; x <= 255; x++) {
//   console.log("REPITE ESTO 255 VECES");
// }

// // este for recorre del 0 al 254
// for (let x = 0; x < 255; x++) {
//   console.log("REPITE ESTO 254 VECES");
// }

// //true es verdadero y false falso
// if (true) {
//   console.log("SE EJECUTA SI O SI");
// } else {
//   console.log("NUNCA ENTRARÁ");
// }

// esta es la forma de recorrer todo un arreglo de inicio a fin.
//forma  de obtener el valor dentro del for es con nombrearreglo[variable del for]
var arreglo = [1,2,3,4,5,6];
for (var x = 0; x < arreglo.length; x++) {
  
  console.log(arreglo[x]);
  
}
//1==1 , 1!=1 , 1>1 , 1<1 , 1<=1
if (true) {
    console.log("ESTO ES VERDADERO");
} else {
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

var numero = 250;
for (var x = 0; x < numero; x++) {
  console.log("ESTO SE REPETIRA 250");
}


function nombre_funcion(){
  console.log("HOLA");
}
nombre_funcion();

function nombre_funcion(variableParametro){
  return variableParametro;
}

var salida = nombre_funcion("HOLA");
console.log(salida); // dice HOLA







function nombre(){
  


  console.log("object");
  console.log("object");
  console.log("object");
  console.log("object");
  console.log("object");


  return "HOLA";


  
}

var x = nombre();