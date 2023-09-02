document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById('miAudio');
  const boton = document.getElementById('miBoton');
  const imagen = document.getElementById('miImagen');

  boton.addEventListener('click', function() {
    audio.play();
  });

  imagen.addEventListener('click', function() {
    audio.play();
  });
});
