import data from "./data/athletes/athletes.js";

import { medal } from "./data.js";

import { atletas } from "./data.js";

import {
  
  atletasUnicos,
  crearTabla,
} from "./data.js";


const jugadores = atletas(data);


const countries = medal(data);

document.getElementById("buscar").addEventListener("click", function () {
  let countryInput = document.getElementById("pais").value;
  const medalInput = document.getElementById("medalla").value;
  document.getElementById("oro").innerText = "";
  document.getElementById("plata").innerText = "";
  document.getElementById("bronce").innerText = "";

  countryInput = countryInput.toLowerCase();
  countryInput = countryInput[0].toUpperCase() + countryInput.slice(1);
  
  const pos = buscar_pais(countryInput, countries, medalInput); 
  if (pos > -1) {
    

    if (medalInput === "Gold") {
      document.getElementById("oro").innerHTML =
        "Medallas de Oro:" + countries[pos].Gold; 
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
    alert("No se encontraron resultados para ese país y medalla"); 
  }
});

function buscar_pais(pais, countries, medalla) {
  
  let i = 0;
  for (i = 0; i < countries.length; i++) {
    
    if (countries[i].pais === pais && countries[i][medalla] > 0) {
      
      return i;
    }
  }
  return -1; 
}
const elem = document.getElementsByClassName("actividad");

for (let i = 0; i < elem.length; i++) {
  elem[i].addEventListener("click", function () {
    

    
    const asigna = document.getElementById(this.id).getAttribute("alt");
    
    document.getElementById("tabla_diciplina").innerHTML = tablaxdiciplina(
      jugadores,
      asigna
    );
  });
}
const tablaxdiciplina = function (jugadores, asigna) {
  let stringtabla = "";
  stringtabla +=
    "<tr><th>Nombre</th><th>Género</th><th>Deporte</th><th>Edad</th><th>Talla</th><th>Peso</th><th>Oro</th><th>Plata</th><th>Bronce</th></tr>";
  for (const atle of jugadores) {
    if (atle.sport === asigna) {
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
  
  document.getElementById("tabla_diciplina").style.display = "block";
  window.location.href = "#tabla_diciplina";


  return stringtabla;
};


document.getElementById("atletastodos").innerHTML = crearTabla(atletasUnicos);


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
