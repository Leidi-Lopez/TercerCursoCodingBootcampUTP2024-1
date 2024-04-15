//esta funcion es para buscar el numero minimo y maximo de una lista 
function encontrarExtremos(lista) {

    
    
    //aqui verfica si la lista esta vacia 
    if (lista.length === 0) {
      return null; // devuelve null si la lista está vacía
    }

    //manda un objeto con las caracteristicas minimo y maximo
    return { minimo : Math.min(...lista), maximo : Math.max(...lista)};
  }
  
  // funcion para cocatenar y ordenar la lista resultante 
  function concatenarYOrdenar(lista1, lista2) {
    // concatena las dos listas y pone el resultado en listaConcatenada
    const listaConcatenada = lista1.concat(lista2);
    listaConcatenada.sort((a, b) => a - b); // Ordena de menor a mayor
    // vuelve a mandar la lista concatenada y ordenada
    return listaConcatenada;
  }
  
  // Funcion para inveertir el orde de los elementos en una lista 
  function invertirLista(listaOriginal) {
    //aqui se invierte la lista 
    return [...listaOriginal].reverse()
  }
  
  //aqui esta las listas para los ejercicios 
  const numeros = [65, 1223, 234, 2345, 1244, 2345];
  const extremos = encontrarExtremos(numeros);
  console.log("la lista es ", numeros);
  console.log("");
  console.log("Número más pequeño:", extremos.minimo);
  console.log("Número más grande:", extremos.maximo);
  
  const lista1 = [5, 9, 134];
  const lista2 = [10, 124, 46];
  const listaConcatenadaOrdenada = concatenarYOrdenar(lista1, lista2);
  console.log("");
  console.log("lista 1:", lista1);
  console.log("lista 2:", lista2);
  console.log("");
  console.log("Lista concatenada y ordenada:", listaConcatenadaOrdenada);
  
  const listaOriginal = [189, 234, 345, 456, 536];
  const listaInvertida = invertirLista(listaOriginal);
  console.log("");
  console.log("Lista original:", listaOriginal);
  console.log("Lista invertida:", listaInvertida);
  

  /*Fecha de publicacion: 15 de Abril 2024
  Hora: 10:00am
  Version de su codigo: 3
  Autores. Ing(c):Leidi Jhoana Lopez 
  Nombre del lenguaje utilizado: ECMASCRIPT 6.o (javascript 6.0)
  Version del lenguaje utilizado: 6.0
  Universidad Tecnologica De Pereira 
  Programa De Ingenieria En Sistemas y Computacion 
  Descripcion del programa: 
  Para realizar este proyecto instalamos prompt-sync de Node para asi poder recibir y almacenar datos que ingresa 
  el usuario por medio del teclado.
  
Variables y Tipos de Datos
  Este programa contiene 5 funciones:

  1.programa que convierte la temperatura de grados Celsius a Fahrenheit teniendo en cuenta la formula (9/5 * C°) + 32
  Donde el dato de C° se le pide ingresarlo al usuario,
     Input: 53.6
      Output: 53.6C° son 128.48 grados Fahrenheit

  2. programa que calcule el Índice de Masa Corporal (IMC)teniendo en cuenta la formula Peso/(Altura)^2. 
  Donde peso es pedido (en kilogramos) y la altura (en metros) se le pide ingresarlo al usuario
  Input: 45
         1.70
   Output: tu indice de masa corporal (IMC) es:15.57

  3.Función que genera un nombre de usuario concatenando los datos de nombre, apellido y año de nacimiento.
      Estos datos se le pide ingresarlo al usuario.
   Input: leidi
          lopez
    output:leidilopez1998

  4.función que calcule el n-ésimo número de Fibonacci ingresado por el usuario.
   Input:4 
   Output: 7

  5. Funcion que le permite al usuario salir del Menu 


  Estructuras de Control
  Este programa cuenta con 5 funciones

  1.  Funcio que genera un número aleatorio  del (0 al 100)y pida al usuario que lo adivine. 
  Si el usuario no acierta, el le indica si su número es demasiado alto o demasiado bajo y el numero de intentos realizados
  Input:56
   Output: El número es demasiado bajo. Inténtalo de nuevo.
   Input:60
   Output: El número es demasiado alto. Inténtalo de nuevo.
   Input:58
   Output:¡Felicidades! Has adivinado el número correcto en 2 intentos.
   -Salvedad:Para valores fuera de este rango, no garantizamos los resultados.

  2. Funcion que calcule el factorial de un número ingresado por el usuario
  Utilizando tanto un ciclo for como un ciclo while para realizar el cálculo.
   Input:4
   Output:El factorial de 4 usando ciclo for es: 24

  3. Funcion que cuenta cuántas vocales distintas hay  en una frase proporcionada por el usuario
   y el muestre las vocales encontradas.
   Input:casa
   Output:Vocales encontradas y su cantidad:
    a: 2
    e: 0
    i: 0
    o: 0
    u: 0
   -Salvedad:Para valores distintos a palabras, no garantizamos los resultados.
4. Funcion que le permite al usuario salir del Menu y se despide 
 

Listas

1.Dada una lista de números, esta funcion encuentra el número más grande y el más pequeño en la lista
Input:la lista es  [ 65, 1223, 234, 2345, 1244, 2345 ]
Output: Número más pequeño: 65
        Número más grande: 2345

2.Crea dos listas con diferentes elementos, esta funcion las combina en una sola lista y las ordena.
Input:lista 1: [ 5, 9, 134 ]
      lista 2: [ 10, 124, 46 ]
Output:Lista concatenada y ordenada: [ 5, 9, 10, 46, 124, 134 ]
 
3.Funcion que invierte los elementos de una Lista.
Input: [ 189, 234, 345, 456, 536 ]
Output:Lista original: [ 189, 234, 345, 456, 536 ]
       Lista invertida: [ 536, 456, 345, 234, 189 ]

  */