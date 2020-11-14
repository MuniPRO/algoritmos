
function burbuja(arreglo) {
    //recorreremos todos los elementos hasta n-1
    for (var i = 1; i < (arreglo.length); i++) {
        //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
        for (var j = 0; j < (arreglo.length - i); j++) {

            //comparamos
            if (arreglo[j] > arreglo[j + 1]) {
                //guardamos el numero mayor en el auxiliar
                var aux = arreglo[j];
                //guardamos el numero menor en el lugar correspondiente
                arreglo[j] = arreglo[j + 1];
                //asignamos el auxiliar en el lugar correspondiente
                arreglo[j + 1] = aux;
            }
        }
    }
    return arreglo;
}
//arreglo a ordenar
var arr = [9, 8, 7, 6, 5];

//invocamos la función
arr = burbuja(arr);

//imprimimos para ver el resultado
console.log(arr);



