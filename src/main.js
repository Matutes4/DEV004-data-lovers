//import { example } from './data.js';
// import data from './data/lol/lol.js';

import data from "./data/athletes/athletes.js";

import { medal } from "./data.js";
console.log(data);

import { atletas } from "./data.js";

import {
  atletas_tabla,
  deportista,
  atletasUnicos,
  crearTabla,
} from "./data.js";

let jugadores = atletas(data);

console.log(jugadores);
//atletasConMedallas(data);
//console.log(atletasConMedallas(data));

let countries = medal(data);
countries.sort((a, b) => a.pais.localeCompare(b.pais)); // Ordena alfabéticamente por la propiedad "pais"
document.getElementById("buscar").addEventListener("click", function () {
  let countryInput = document.getElementById("pais").value;
  let medalInput = document.getElementById("medalla").value;
  document.getElementById("oro").innerText = "";
  document.getElementById("plata").innerText = "";
  document.getElementById("bronce").innerText = "";

  console.log(countries);
  let pos = buscar_pais(countryInput, countries, medalInput); // posicion del pais que que ingreso el usuario //
  if (pos > -1) {
    //si la posicion esta en -1 no existe el´pais //

    if (medalInput === "Gold") {
      document.getElementById("oro").innerHTML =
        "Medallas de Oro:" + countries[pos].Gold; // al seleccionar oro me va a devolver  el nyumero de
      return 0;
    }

    if (medalInput === "Silver") {
      document.getElementById("plata").innerHTML =
        "Medallas de Plata:" + countries[pos].Silver;
      return 0;
    }

    if (medalInput === "Bronze") {
      document.getElementById("bronce").innerHTML =
        "Medallas de Bronce:" + countries[pos].Bronze;
      return 0;
    }

    alert(
      `El país ${countryInput} tiene ${countries[pos].Gold} medallas de Oro ${countries[pos].Silver} medallas de plata ${countries[pos].Bronze} medallas de bronce`
    );
  } else {
    alert("No se encontraron resultados para ese país y medalla"); //si let pos no se encotro el pais arroja esta alerta//
  }
});

function buscar_pais(pais, countries, medalla) {
  //utiliza el bucle
  let i = 0;
  for (i = 0; i < countries.length; i++) {
    //country buscar  el pais que el ususrio esta ingresando//recorre el elemento de la lista
    if (countries[i].pais === pais && countries[i][medalla] > 0) {
      //se comprueba si el nombre del país coincide con el nombre que el usuario ingresó y si el país tiene una cantidad de medallas mayor que cero en la categoría especificada.
      return i;
    }
  }
  return -1; //no consigue el pais
}
const elem = document.getElementsByClassName("actividad");

for (let i = 0; i < elem.length; i++) {
  elem[i].addEventListener("click", function () {
    let asigna;

    console.log(this);
    asigna = document.getElementById(this.id).getAttribute("alt");
    console.log(asigna);
    document.getElementById("tabla_diciplina").innerHTML = tablaxdiciplina(
      jugadores,
      asigna
    );
  });
}
let tablaxdiciplina = function (jugadores, asigna) {
  let stringtabla = "";
  stringtabla +=
    "<tr><th>Nombre</th><th>Género</th><th>Deporte</th><th>Edad</th><th>Talla</th><th>Peso</th><th>Oro</th><th>Plata</th><th>Bronce</th></tr>";
  for (let atle of jugadores) {
    if (atle.sport == asigna) {
      let fila = "<tr> <td>";
      fila += atle.name;
      fila += "</td>";

      fila += "<td>";
      fila += atle.gender;
      fila += "</td>";

      fila += "<td>";
      fila += atle.sport;
      fila += "</td>";

      fila += "<td>";
      fila += atle.age;
      fila += "</td>";

      fila += "<td>";
      fila += atle.height;
      fila += "</td>";

      fila += "<td>";
      fila += atle.weight;
      fila += "</td>";

      fila += "<td>";
      fila += atle.Gold;
      fila += "</td>";

      fila += "<td>";
      fila += atle.Silver;
      fila += "</td>";

      fila += "<td>";
      fila += atle.Bronze;
      fila += "</td>";

      fila += "</tr>";
      stringtabla += fila;
    }
  }
  // console.log(stringtabla);
  document.getElementById("tabla_diciplina").style.display = "block";
  window.location.href = "#tabla_diciplina";
  //document.getElementById("atletastodos").style.display="block";

  return stringtabla;
};

/* --------------------------de la tabla glendy--------------------------------*/
document.getElementById("atletastodos").innerHTML = crearTabla(atletasUnicos);

//asigna = document.getElementById("atletismo").getAttribute("alt")
/* ------------------------------funciones botones ----------------------------*/
document.getElementById("btn1").addEventListener("click", Ordenarpornombre);
document.getElementById("btn2").addEventListener("click", OrdenarporGenero);
document.getElementById("btn3").addEventListener("click", OrdenarporDeporte);
document.getElementById("btn4").addEventListener("click", OrdenarporEdad);
document.getElementById("btn5").addEventListener("click", OrdenarporTalla);
document.getElementById("btn6").addEventListener("click", OrdenarporPeso);

function Ordenarpornombre() {
  atletasUnicos.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  document.getElementById("atletastodos").style.display = "block";
  document.getElementById("atletastodos").innerHTML = crearTabla(atletasUnicos);
}

function OrdenarporGenero() {
  atletasUnicos.sort((a, b) => {
    if (a.gender > b.gender) {
      return 1;
    }
    if (a.gender < b.gender) {
      return -1;
    }
    return 0;
  });
  document.getElementById("atletastodos").style.display = "block";
  document.getElementById("atletastodos").innerHTML = crearTabla(atletasUnicos);
}

function OrdenarporDeporte() {
  atletasUnicos.sort((a, b) => {
    if (a.sport > b.sport) {
      return 1;
    }
    if (a.sport < b.sport) {
      return -1;
    }
    return 0;
  });
  document.getElementById("atletastodos").style.display = "block";
  document.getElementById("atletastodos").innerHTML = crearTabla(atletasUnicos);
}

function OrdenarporEdad() {
  atletasUnicos.sort((a, b) => {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  });
  document.getElementById("atletastodos").style.display = "block";
  document.getElementById("atletastodos").innerHTML = crearTabla(atletasUnicos);
}

function OrdenarporTalla() {
  atletasUnicos.sort((a, b) => {
    if (a.height > b.height) {
      return 1;
    }
    if (a.height < b.height) {
      return -1;
    }
    return 0;
  });
  document.getElementById("atletastodos").style.display = "block";
  document.getElementById("atletastodos").innerHTML = crearTabla(atletasUnicos);
}

function OrdenarporPeso() {
  atletasUnicos.sort((a, b) => {
    if (a.weight > b.weight) {
      return 1;
    }
    if (a.weight < b.weight) {
      return -1;
    }
    return 0;
  });
  document.getElementById("atletastodos").style.display = "block";
  document.getElementById("atletastodos").innerHTML = crearTabla(atletasUnicos);
}
