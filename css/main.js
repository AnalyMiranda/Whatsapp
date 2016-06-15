function pintarMensaje(texto) {
   var fecha = new Date();
   fecha = fecha + '';
   var nombreDelUsuario = 'Andrea Lamas'; 
   var el = '<div class="back-white"><p class="blue">' + nombreDelUsuario + '</p><p>' + texto + '</p><p class="hora-left">' + fecha + '</p></div>';
   var elementoDom = $(el);
   $('#mensajes').append(elemetoDom);
};


$('#btnEnviar').click(function(){
   
   var texto = $('#inputMensaje').val();
   console.log(texto);
   pintarMensaje(texto);
   $('#inputMensaje').val('');
});