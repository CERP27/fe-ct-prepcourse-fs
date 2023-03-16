/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayDeArrays=Object.entries(objeto);
   
   return arrayDeArrays;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

      var frase=string.split('');
      frase.sort();
      var orden=frase.join('');
   
      let result = {};
      for(let key of orden.split('')) {
          if (key == ' ')
              continue;
  
          if (!result[key])
              result[key] = 1;
          else
              result[key]++;
  
      }  

  return result;
  

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var letras=string.split('');
   var mayus=[];
   var minus=[];

   for (let i = 0; i < letras.length; i++) {
      if(letras[i]!==letras[i].toUpperCase()){         
         minus.push(letras[i]);
      }
      else{
        mayus.push(letras[i]);
      }
      
   }
   var minusM=minus.join('');
   var mayusM=mayus.join('')
   

   union=mayusM+minusM;
   return union;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   
   String.prototype.reverse=function(){
      var cadena=this.split('');
      var cadenaInvertida=[];
      for(let i=0;i<cadena.length;i++){
         cadenaInvertida.unshift(cadena[i]);
      }
      var cadenaReverse=cadenaInvertida.join('');
      return cadenaReverse;
   };

   var oracion= frase.split(' ');
   var array=[];
   for (let i = 0; i < oracion.length; i++) {
       oracion[i]=oracion[i].reverse()
      
   }
   var mirror=oracion.join(' ');

   return mirror;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   String.prototype.reverse=function(){
      var cadena=this.split('');
      var cadenaInvertida=[];
      for(let i=0;i<cadena.length;i++){
         cadenaInvertida.unshift(cadena[i]);
      }
      var cadenaReverse=cadenaInvertida.join('');
      return cadenaReverse;
   };

   var num=numero.toString();
   var reverso=numero.toString().reverse();

   if(num===reverso){
      return "Es capicua";
   }else{
      return "No es capicua"
   };

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var frase=string.split('');
   var array=[];
   for (let i = 0; i < frase.length; i++) {
      if(frase[i]!=='a' && frase[i]!=='b' && frase[i]!=='c'){
         array.push(frase[i]);
      }
      
   }
   var noabc=array.join('');
   return noabc;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a,b)=>(a.length-b.length));

   return arrayOfStrings;
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var mayor;
   var menor;
   var union=[];
   var vacio=[];

   if(array1.length>=array2.length){
       mayor=array1.slice();
       menor=array2.slice();
   }else{
      mayor=array2.slice();
      menor=array1.slice();
   }

   for (let i = 0; i < mayor.length; i++) {
      for (let y = 0; y < menor.length; y++) {
         if(mayor[i]===menor[y]){
            union.push(menor[y]);
         }
         
      }
      
   }

   union.sort((a,b)=>a-b);
   if(union.length>0){
      return union;
   }else{
      return vacio;
   }


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
