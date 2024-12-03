// Clase y metodos 

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

//Ejmeplo original 

    // Crear una instancia de LinkedList
    const peliculas = new LinkedList();

    // Agregar las estanterías a la lista
    peliculas.add(2);
    peliculas.add(4);
    peliculas.add(6);
    peliculas.add(7);
    peliculas.add(3);
    peliculas.add(3);
    peliculas.add(4);
    peliculas.add(1);

    //Solucion 

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