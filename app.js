//FORMULARIO
// Creación de función
function validarFormulario(){
	//remueve el div con la clase alert
	$('.alert').remove();
    

    // Declaración de variables
    var nombre = $('#nombre').val();
    var email = $('#email').val();
    var mensaje = $('#mensaje').val();

    // Validar campo nombre con estructura condicional que verifica si el campo "nombre" está vacío o nulo. Si es así, significa que el campo no ha sido completado.
    if (nombre === "" || nombre === null){
        // si es así, llama a la funcion cambiar color para aplicarselo a "nombre"
        cambiarColor("nombre");
        // Muestra el mensaje de alerta con el mensaje de campo obligatorio
        mostrarAlerta("Campo obligatorio");
        //indica que el formulario no tiene que enviarse ya que el proceso de validacion falló
        return false;
    }else{
    	var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
    	//verifica si el campo contiene caracteres que no son letras ni espacios
        if(!expresion.test(nombre)){
            // mostrara el mesaje que debe ingresar un nombre válido y cambia de color el campo
            cambiarColor("nombre");
            mostrarAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }

    //validar email
if(email=="" || email==null){

        cambiarColor("email");
        // mostramos le mensaje de alerta
        mostrarAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(email)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("email");
            mostrarAlerta("Por favor ingrese un email válido");
            return false;
        }
    }

if(mensaje=="" || mensaje==null){

        cambiarColor("mensaje");
        // mostramos le mensaje de alerta
        mostrarAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(mensaje)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("mensaje");
            mostrarAlerta("No se permiten caracteres especiales");
            return false;
        }
    }
    //se envia el formulario una vez haber completado todo
    $('form').submit();
    return true;
    
} 
//Selecciona los inputs. El evento focus se activa cuando un usuario hace clic o se enfoca en un campo de entrada 
$('input').focus(function(){
    //esta línea elimina cualquier elemento con la clase "alert
    $('.alert').remove();
    //restablecen el color de borde de los campos "nombre" y "email". 
    colorDefault('nombre');
    colorDefault('email');
});
//Lo mismo pero con los textarea
$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});

//funcion color defecto a los bordes de los inputs
function colorDefault(dato){
    //busca un elemento HTML cuyo ID coincida con el valor de 'dato' y . css porque una vez haber encontrado el elemento, se aplica el color al borde
    $('#' + dato).css({
        border: "1px solid #999"
    });
}

    // Función para cambiar el color del borde
function cambiarColor(dato) {
        $('#' + dato).css({
            border: "2px solid #dd5144"
        });
  }

    // Función para mostrar la alerta
 function mostrarAlerta(texto){
    //se usa .before para insertar HTML justo antes de ese elemento. y el html que se inserta es el div con el mensaje
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}


//GALERIA 
//se ejecuta cuando el documento HTML ha cargado completamente.
$(document).ready(function () {
    //Define una función llamada durationSlider que contiene un bloque de código.
  function durationSlider() {
    //ejecuta el código dentro de esta función cada 3 segundos
    setInterval(function () {
      // Selecciona la clase "activa" y lo almacena en la variable imagenActual
      var imagenActual = $(".activa");
      //Selecciona la clase "activa" y lo almacena en la variable siguienteImagen
      var siguienteImagen = imagenActual.next();
      if (siguienteImagen.length) {
        //si encuentra el elemento, elimina la clase "activa" del elemento actual y cambia su propiedad para moverlo por debajo de otros elementos en la página.
        imagenActual.removeClass("activa").css("z-index", -10);
        //agrega la clase "activa" al siguiente elemento y cambia su propiedad para moverlo por encima de otros elementos en la página.
        siguienteImagen.addClass("activa").css("z-index", 10);
      }
    }, 3000);
  }

  // Esta función inicia un efecto de deslizamiento de imágenes cada 3 segundos
  durationSlider();
  //Este código se ejecuta cuando se hace clic en un elemento en la página con la clase "siguiente"
  $(".siguiente").on("click", function () {
   //toma el elemento con la clase .activa y lo almacena en la variable de imaagenactual
    var imagenActual = $(".activa");
    // selecciona la siguiente imagen después de la imagen actual y lo almacena en la variable siguienteImagen
    var siguienteImagen = imagenActual.next();
    // Comprueba si se encontró un elemento siguiente. Si es así, ejecuta el bloque de código dentro de este condicional.
    if (siguienteImagen.length) {
      imagenActual.removeClass("activa").css("z-index", -10);
      siguienteImagen.addClass("activa").css("z-index", 10);
    }
  });

  // Cuando el usuario hace clic en un elemento con esta clase, se ejecuta dentro de la función.
  $(".anterior").on("click", function () {
    //la clase .activa, se alamacena en la variable imagen actual
    var imagenActual = $(".activa");
    //selecciona el elemento anterior y lo almacena en imagenactual.prev
    var anteriorImagen = imagenActual.prev();
    //Comprueba si se encontró un elemento anterior. Si es así, ejecuta código dentro de este condicional.
    if (anteriorImagen.length) {
      imagenActual.removeClass("activa").css("z-index", -10);
      anteriorImagen.addClass("activa").css("z-index", 10);
    }
  });
});


//Mensaje de bienvenida

//El código dentro de la función se ejecutará en ese momento.
$(document).ready(function() {
    //obtience la URL de la web y la almacena en la variable url
    var url = document.URL;
  //Divide la URL en segmentos utilizando "/" dentro del array "arr". Esto se hace para separar las partes de la URL, como el nombre del archivo.
  const arr = url.split("/");
  //toma el último elemento del array "arr" y lo almacena en la variable arr2. Representa el nombre del archivo HTML actual.
  let arr2 = arr[arr.length - 1];
  //Comprueba si el nombre del archivo es igual a "index.html"
  if (arr2 == "index.html") {
    //muestra el cartel de alerta de bienvenida.
    alert("¡Bienvenidx a nuestra página!");
  } 
});