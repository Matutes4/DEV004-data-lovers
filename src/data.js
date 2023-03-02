export const medal = (data) => {
 
  const paises = []; 

  for (let p = 0; p < data.athletes.length; p++) {
    
    if (
      data.athletes[p].medal === "Gold" ||
      data.athletes[p].medal === "Silver" ||
      data.athletes[p].medal === "Bronze"
    ) {
     
      const pais = data.athletes[p].team; 

      let pais_indice = -1; 
      for (let a = 0; a < paises.length; a++) {
      
        if (paises[a].pais === pais) {
          
          pais_indice = a;
        }
      }

      if (pais_indice === -1) {
        paises.push({
          
          pais: pais, 
          Gold: 0,
          Silver: 0,
          Bronze: 0,
        });
        pais_indice = paises.length - 1; 
      }

      paises[pais_indice][data.athletes[p].medal]++; 
    }
  }

  return paises; 
};

export const atletas = (data) => {
  const jugador = []; 

  for (let p = 0; p < data.athletes.length; p++) {
  
    const nombreatleta = data.athletes[p].name;

    let atletasindex = -1;

    for (let i = 0; i < jugador.length; i++) {
      

      if (jugador[i].name === nombreatleta) {
        

        atletasindex = i;
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

      jugador[atletasindex][data.athletes[p].medal]++; 
    }
  }
  return jugador; 
};
/* ----------------------------------------------------------*/
import data from "./data/athletes/athletes.js";

export const atletas_tabla = data.athletes;

export const deportista = data.athletes.map((atleta) => { 
  return {
    name: atleta.name,
    gender: atleta.gender,
    age: atleta.age,
    height: atleta.height,
    weight: atleta.weight,
    sport: atleta.sport,
  };
});

export const atletasUnicos = data.athletes.filter((atleta, index) => {
 
  const firstIndex = deportista.findIndex((obj) => {
  
    return (
      obj.name === atleta.name &&
      obj.gender === atleta.gender &&
      obj.sport === atleta.sport &&
      obj.age === atleta.age &&
      obj.height === atleta.height &&
      obj.weight === atleta.weight
    );
  });
  
  return firstIndex === index;
});

//console.log(typeof atletasUnicos);

export const crearTabla = function (lista) {
  let stringtabla = "";
  stringtabla +=
    "<tr><th>Nombre</th><th>Género</th><th>Deporte</th><th>Edad</th><th>Talla</th><th>Peso</th></tr>";
  for (const atle of lista) {
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

  return stringtabla;
};

