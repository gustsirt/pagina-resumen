/* Filro de PortFolio
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
  var colorList = document.getElementById("imgFilter__filters"); 
  var elementos = document.getElementsByClassName("elemento");
  var ffiltros = document.getElementsByClassName("fltt");

  // Manejar el evento de cambio de elección
  colorList.addEventListener("click", function(event) {
    var color = event.target.getAttribute("data-filter");
    
    // 1 - Filtro
    // Mostrar todos los elementos cuando se selecciona "Todos"
    if (color === "todos") {
      for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "block";
      }
    } else {
      // Filtrar elementos por seleccion
      for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].classList.contains(color)) {
          elementos[i].style.display = "block";
        } else {
          elementos[i].style.display = "none";
        }
      }
    }

    // 2 - boton "Active" - le da un color distinto por clase
    // Mostrar TODOS como activo
    if (color === "todos") {
      ffiltros[0].classList.add('filter-active')
      for (var i = 1; i < ffiltros.length; i++) {
        ffiltros[i].classList.remove('filter-active')
      }
    } else {
      // Poner Active solo en el correspondiente
      for (var i = 0; i < ffiltros.length; i++) {
        if (ffiltros[i].classList.contains(color)) {
          ffiltros[i].classList.add('filter-active')
        } else {
          ffiltros[i].classList.remove('filter-active')
        }
      }
    }
  });
});


/* Mobile nav toggle
--------------------------------------------------------------*/

const granBody = document.getElementById('bodyy')
const mobileButton = document.getElementById('mobile-button')
let estadonavbar = 1;

function accionmobile(){
if (estadonavbar == 1) {
  estadonavbar = 0
  granBody.classList.add('mobile-nav-active')
  mobileButton.classList.add('bi-x')
  mobileButton.classList.remove('bi-list')
} else {
  estadonavbar = 1
  granBody.classList.remove('mobile-nav-active')
  mobileButton.classList.add('bi-list')
  mobileButton.classList.remove('bi-x')
}
}
mobileButton.addEventListener('click', accionmobile )


/* Hero type effect
--------------------------------------------------------------*/
const typed = document.getElementById('typed')
  new Typed(typed, {
    strings: ["Analista de Datos", "Desarrollador", "Freelancer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });