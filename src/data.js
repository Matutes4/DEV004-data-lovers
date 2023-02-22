export const example = (array) => {
  return array.filter((elem) => elem.a);
};

export const anotherExample = () => {
  return "OMG";
};

export const medal = (data) => {
  //se creo una funcion medal para filtrar la data
  const paises = []; //contante paises con un arreglo para ir guardando los paises que no se repiten

  for (let p = 0; p < data.athletes.length; p++) {
    //ciclo repetitivo  que recorre el arreglo data.athletes /indicador de la posicion  en el arreglo/numero de posiciones en el arreglo
    if (
      data.athletes[p].medal === "Gold" ||
      data.athletes[p].medal === "Silver" ||
      data.athletes[p].medal === "Bronze"
    ) {
      //si el contador inicia en la posicion va recorrer toda la data buscando las medalla de oro plata y bronce
      const pais = data.athletes[p].team; //crea constante con vector pais de una posicion , carga un  arreglo  con el pais, que parte de o//

      let paisIndex = -1; //inicia la variable con -1, guardamos los paises que no se repitan
      for (let i = 0; i < paises.length; i++) {
        //for interno ciclo repetitivo  donde el indice inicia 0, y se va incrementando hasta  que sea menor
        if (paises[i].pais === pais) {
          //el arreglo va ser igual a pais
          paisIndex = i;
          break;
        }
      }

      if (paisIndex === -1) {
        paises.push({
          //inserta un valor en la primera posicion del vector//
          pais: pais, // que no se repitio //
          Gold: 0,
          Silver: 0,
          Bronze: 0,
        });
        paisIndex = paises.length - 1; //se recorre todo el vector en -1/guarda el  numero de paise //
      }

      paises[paisIndex][data.athletes[p].medal]++; // paises se va incrementado
    }
  }

  return paises; //retorna los paises con su cantidad de medallas.
};

export const atletas = (data) => {
  const jugador = []; //se va guarsando la informacion de los jugadores que no se repita //

  for (let p = 0; p < data.athletes.length; p++) {
    //ciclo repetitivo  que recorre el arreglo data.athletes /indicador de la posicion  en el arreglo/numero de posiciones en el arreglo
    const nombreatleta = data.athletes[p].name;

    let atletasindex = -1;

    for (let i = 0; i < jugador.length; i++) {
      //for interno ciclo repetitivo  donde el indice inicia 0, y se va incrementando hasta  que sea menor

      if (jugador[i].name === nombreatleta) {
        //el arreglo va ser igual a pais

        atletasindex = i;
        break;
      }
    }

    if (atletasindex === -1) {
      jugador.push({
        name: nombreatleta,
        gender: data.athletes[p].gender,
        height: data.athletes[p].height,
        weight: data.athletes[p].weight,
        sport: data.athletes[p].sport,
        team: data.athletes[p].team,
        noc: data.athletes[p].noc,
        age: data.athletes[p].age,
        event: data.athletes[p].event,
        Gold: 0,
        Silver: 0,
        Bronze: 0,
      });
      atletasindex = jugador.length - 1;

      jugador[atletasindex][data.athletes[p].medal]++; // paises se va incrementado
    }
  }
  return jugador; //retorna los paises con su cantidad de medallas.
};
/* ----------------------------------------------------------*/

import data from "./data/athletes/athletes.js";

export const atletas_tabla = data.athletes;

export const deportista = data.athletes.map((atleta) => {
  //seleccionar elementos de un array//atleta es el objeto que contiene el string
  return {
    name: atleta.name,
    gender: atleta.gender,
    age: atleta.age,
    height: atleta.height,
    weight: atleta.weight,
    sport: atleta.sport,
  };
});

export const atletasUnicos = deportista.filter((atleta, index) => {
  //propiedades que no se multiplique//
  const firstIndex = deportista.findIndex((obj) => {
    //traer de su arreglo //
    return (
      obj.name === atleta.name &&
      obj.gender === atleta.gender &&
      obj.sport === atleta.sport &&
      obj.age === atleta.age &&
      obj.height === atleta.height &&
      obj.weight === atleta.weight
    );
  });
  console.log(firstIndex + " es igual " + index);
  return firstIndex === index;
});

export let crearTabla = function (lista) {
  let stringtabla = "";
  stringtabla +=
    "<tr><th>Nombre</th><th>Género</th><th>Deporte</th><th>Edad</th><th>Talla</th><th>Peso</th></tr>";
  for (let atle of lista) {
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

    fila += "</tr>";
    stringtabla += fila;
  }
  // console.log(stringtabla);
  return stringtabla;
};

/*const objeto = data.athletes;
let participantes = [];
for (let i = 0; i < data.athletes; i ++) {
  participantes[i].name = data.athletes[i].name;
  participantes[i].age = data.atheles[i].age;
  participantes[i].height = data.athletes[i].height;
  participantes[i].weight = data.athletes[i].weight;
}
console.log(participantes);*/
