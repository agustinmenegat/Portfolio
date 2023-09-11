function iniciarAnimacionTyped() {
  const opcionesTyped = {
    strings: ['AGUSMENEGAT</br>@GMAIL.COM'],
    typeSpeed: 100,
    startDelay: 300,
    onComplete: function (self) {
      setTimeout(function () {
        self.reset(); // Reiniciar la animación
        self.start(); // Comenzar la animación nuevamente
      }, 2000); // Reiniciar la animación después de 1 segundo
    },
  };

  const typed = new Typed('#typed', opcionesTyped);
}

// Llama a la función para iniciar la animación Typed al cargar la página
document.addEventListener('DOMContentLoaded', iniciarAnimacionTyped);
