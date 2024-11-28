//Ejercicio al final

function LinkedList() {
    this.head = null;   
  }
  
  function Nodo (value){
    this.value = value;
    this.next = null;
  } 
  
  LinkedList.prototype.add = function(value){
    if(!this.head) this.head = new Nodo(value)
     else {
        let current = this.head
        while(current.next !== null){
          current = current.next
        }
        current.next = new Nodo(value)
      }
  } 
  
  LinkedList.prototype.remove = function(){
    if(!this.head) return 'La lista esta vacia'
    else if(!this.head.next){
      let eliminado = this.head.value
      this.head = null
      return eliminado;
    } else {
      let current = this.head
      let previus = null
      while(current.next){
        previus = current
        current = current.next
      }
      let eliminado = current.value
      previus.next = null
      return eliminado
    }
  }
  
  LinkedList.prototype.search = function(value){
    let current = this.head
    while(current){
      if(typeof value !== 'function'){
        if(value === current.value) return current.value
      }
      else {
        if(value(current.value)) return current.value
      }
      current = current.next
    }
    return null
  }

  let estanteriaPeliculas = new LinkedList()
  estanteriaPeliculas.add(2) 
  estanteriaPeliculas.add(4) 
  estanteriaPeliculas.add(6) 
  estanteriaPeliculas.add(7) 
  estanteriaPeliculas.add(3)
  estanteriaPeliculas.add(3) 
  estanteriaPeliculas.add(4)
  estanteriaPeliculas.add(1)
  console.log(estanteriaPeliculas)  

  ﻿
  /*7. Encontrar películas

  INTRODUCCIÓN
  En el cine donde trabajas, las películas están guardadas en estanterías. Escribe una función que permita encontrar todas las películas almacenadas en la misma estantería.
  INSTRUCCIONES
  Crea un nuevo método con el nombre encontrarPeliculas en el prototipo de LinkedList
  
  Al recibir un número de estantería por parámetro, este método deberá retornar:
  
  • El string: "No tenemos peliculas de la estanteria indicada", en caso de no encontrar ninguna película que pertenezca a la estantería ingresada
  • Caso contrario, una nueva LinkedList conteniendo todas las películas que tengan ese mismo número de estantería.
  
  EJEMPLO:
    
  Head➡ (2) ➜ (4) ➜ (6) ➜ (7) ➜ (3) ➜ (3) ➜ (4) ➜ (1)
    
    peliculas.encontrarPeliculas (3)
  
    // Devuelve → Head→ (3) ➜ (3)

  ACLARACIONES
  
  • La clase LinkedList ya se encuentra definida con todos sus métodos: add, search y remove
  • El número que recibes por parámetro indica el número de estantería que se quiere consultar.
  • Cada nodo de la lista tiene como value un número que representa la estantería donde está guardada una película

  Language: JavaScript (Node.js)

  Completa el método 'encontrar Pelicula' a continuación.
 
  * El método debe retornar una LISTA ENLAZADA.

  * El método recibe un NUMERO ENTERO 'estanteria' por parámetro.

  *

  * No modifiques nada por fuera del cuerpo de la función. */

  
  LinkedList.prototype.encontrarPeliculas = function(estanteria){
    if(this.head === null) return 'No tenemos peliculas en la estanteria indicada'
    let PeliculaEnLaEstanteria = new LinkedList()
    current = this.head 
    while(current){
      if(current.value === estanteria) PeliculaEnLaEstanteria.add(estanteria)
      current = current.next
    }
    if(PeliculaEnLaEstanteria.value){
      return null
    } else {
      return PeliculaEnLaEstanteria
    }
  }

  console.log(estanteriaPeliculas.encontrarPeliculas(7));