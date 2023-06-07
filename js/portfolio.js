/* Clase Elemento -> PortFolio
--------------------------------------------------------------*/
class EPortfolio {
  constructor (elemento, title, imagen, alt, clases, estrella) {
    this.elemento = elemento
    this.title = title
    this.imagen = imagen
    this.alt = alt
    this.desc = []
    this.clases = clases
    this.estrella = estrella
  }
}

let elePortf = [];

let xNwPicking = new EPortfolio (
  "14","Sistema de control Logístico Interno - Picking",
  "../img/fondos/picking.jpg","Personas haciendo inventario","fsheet flooker fpbi festrella","<i class='bx bxs-star'></i>")
  xNwPicking.desc.push({ empresa: 'Grupo Newsport', año: '2022 a 2023'})
  
let xPagaresV2 = new EPortfolio (
  "13","Pagares autonumerados V2",
  "../img/fondos/tarea-completa.jpg","Tarea sellada y aprobada","fhtml fjs","")
  xPagaresV2.desc.push({ empresa: 'Nuevo Ceibo', año: '2023'})

let xNwFraude = new EPortfolio (
  "15","Tabla soporte para Control de Fraude",
  "../img/fondos/control-fraude.jpg","Imagen referente al control de fraude electrónico","fsheet festrella","<i class='bx bxs-star'></i>")
  xNwPicking.desc.push({ empresa: 'Grupo Newsport', año: '2021 a 2023'})

let xNwLSueldo = new EPortfolio (
  "12","Corrector para presentación libro Sueldos AFIP",
  "../img/fondos/impuestos.jpg","Aplicación para el pago o calculo de impuestos","fexcel","")
  xNwLSueldo.desc.push({ empresa: 'Grupo Newsport', año: '2022 a 2023'})

let xIdGraf = new EPortfolio (
  "11","Planilla para control de producción y genera remitos",
  "../img/fondos/cosas-para-hacer.jpg","Aplicación de cosas para hacer","fexcel","")
  xIdGraf.desc.push({ empresa: 'Idearte S.A.', año: '2023'})

let xNwCamiones = new EPortfolio (
  "10","Cuaderno de ingreso de camiones",
  "../img/fondos/camion-proveedores.jpg","Camiones descargando mercadería","fsheet flooker","")
  xNwCamiones.desc.push({ empresa: 'Grupo Newsport', año: '2023'})

let xNwCompra1 = new EPortfolio (
  "9","Solicitud de mercadería por Eventos",
  "../img/fondos/preparacion-de-evento.jpg","Preparación de evento","fexcel","")
  xNwCompra1.desc.push({ empresa: 'Grupo Newsport', año: '2023'})

let xSiapCompras = new EPortfolio (
  "8","Correción masiva sistema AFIP - SIAP - Control de IVA",
  "../img/fondos/impuestos.jpg","Aplicación para el pago o calculo de impuestos","fexcel","")
  xSiapCompras.desc.push(
    { empresa: 'Grupo Newsport', año: '2023'},
    { empresa: 'MAC Group', año: '2018 a 2020'})

let xNwTarjetas = new EPortfolio (
  "7","Sistema de Conciliación masiva de operaciones de Tarjetas",
  "../img/fondos/rendimiento-tarjetas.jpg","Rendimiento de ventas por tarjetas","fexcel faccess festrella","<i class='bx bxs-star'></i>")
  xNwTarjetas.desc.push({ empresa: 'Grupo Newsport', año: '2020 a 2023'})

let xPagaresV = new EPortfolio (
  "6","Pagares autonumerados",
  "../img/fondos/tarea-completa.jpg","Tarea sellada y aprobada","fexcel","")
  xPagaresV.desc.push(
    { empresa: 'El Nuevo Ceibo S.A.', año: '2019 a 2023' },
    { empresa: 'Plan x5 S.A.', año: '2022 a 2023' });

let xNcCobros = new EPortfolio (
  "5","Seguimiento de Cobros",
  "../img/fondos/cobros.jpg","Imagen cobrando","fsheet","")
  xNcCobros.desc.push({ empresa: 'El Nuevo Ceibo S.A.', año: '2019 a 2023' });

let xMgCajas = new EPortfolio (
  "4","Planillas de Cajas adaptadas para su Conciliación masiva",
  "../img/fondos/caja-diaria.jpg","Imagen que representa ventas","fexcel","")
  xMgCajas.desc.push({ empresa: 'MAC Group', año: '2019 a 2021' });

let xAfipIIBB = new EPortfolio (
  "3","Soporte para conciliación de IIBB y declaración en la AFIP",
  "../img/fondos/impuestos.jpg","Aplicación para el pago o calculo de impuestos","fexcel","")
  xAfipIIBB.desc.push({ empresa: 'MAC Group', año: '2019 a 2021' });

let xMgFact = new EPortfolio (
  "2","Planillas para importación masiva de Facturas de compra",
  "../img/fondos/archivo.jpg","Archivo de papeles","fexcel","")
  xMgFact.desc.push({ empresa: 'MAC Group', año: '2017 a 2021' })

let xLaPrecios = new EPortfolio (
  "1","Sistema de control de precios para inventario",
  "../img/fondos/picking.jpg","Personas haciendo inventario","fexcel","")
  xLaPrecios.desc.push({ empresa: 'MAC Group', año: '2014 a 2017<' })

elePortf.push(xNwPicking, xPagaresV2, xNwFraude, xNwLSueldo, xIdGraf, xNwCamiones,xNwCompra1,xSiapCompras, xNwTarjetas, xPagaresV, xNcCobros,xMgCajas, xAfipIIBB, xMgFact, xLaPrecios)

// agregar elementos al al html
const xFiltercontainer = document.getElementById("xFilter__container")

document.addEventListener("DOMContentLoaded", function() {
  elePortf.forEach((elementox) => {
  let tarjetitas1 =
  `<div class="col-lg-4 col-md-6 imgitem elemento ${elementox.clases}"><!-- ID - graf -->
    <div class="imgitem__wrap">
      <img src="${elementox.imagen}" alt="${elementox.alt}">
      <div class="winfo">
        <p class="title">${elementox.title}</p>`
    let tarjetitas2 ="" 
    elementox.desc.forEach((descripcion) => {
      let tarjetitas22 =`<p class="desc">${descripcion.empresa} - ${descripcion.año}</p>`
      tarjetitas2 += tarjetitas22 
      })
    let tarjetitas3 =
        `<div class="wlinks">
          <button class="btnL" data-bs-toggle="modal" data-bs-target="#mFilter${elementox.elemento}">${elementox.estrella}<i class="bx bx-link">${elementox.estrella}</i></button>
  </div></div></div></div>`

  xFiltercontainer.innerHTML+= (tarjetitas1 + tarjetitas2 + tarjetitas3)
})
});


/* Filro de PortFolio
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
  var colorList = document.getElementById("xFilter__filters"); 
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



