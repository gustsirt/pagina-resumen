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
    strings: ["Analista", "Desarrollador", "Freelancer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });


