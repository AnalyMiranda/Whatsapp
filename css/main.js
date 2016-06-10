function pintarMensaje(texto) {
   
   //Obtener la fecha del mensaje
   var fecha = new Date();
   //Convertir la fecha en String (esta fecha esta muy larga, pero despues la arreglamos)
   fecha = fecha + '';

   //Aqui siempre va su nombre por que es la unica persona que puede escribir mensajes en su pagina. 
   var nombreDelUsuario = 'Andrea Lamas'; 
   
   //Creo el globo (Con el HTML que ya tenia antes)
   var el = '<div class="back-white"><p class="blue">' + nombreDelUsuario + '</p><p>' + texto + '</p><p class="hora-left">' + fecha + '</p></div>';

   //Este elemento que creamos solo es un string, pasar hacer que se haga un elemento del DOM hay que decirle 
   //a Jquery que lo haga
   var elementoDom = $(el);
   
   //Ahora agremos el globito, a su papá, que debe ser el div con id "mensajes"
   $('#mensajes').append(elemetoDom);
   
};

/*
Suponinedo que el boton para enviar los mensajes tiene de ID "btnEnviar", el input para el mensaje se llame "inputMensaje"
Lo primero que hay que hacer es "cachar" el evento click, obtener el texto y luego poner el input en blaco otra vez.
Recuerden hacer todo esto dentro del ready.
*/

$('#btnEnviar').click(function(){
   
   var texto = $('#inputMensaje').val();
   //Ahora en la variable texto esta lo que el usuario escribio
   console.log(texto);
   //Pintamos el mensaje en el DOM
   pintarMensaje(texto);
   
   //Limpiamos el input
   $('#inputMensaje').val('');

});