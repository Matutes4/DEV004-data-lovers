import { medal, crearTabla, atletas } from '../src/data.js';
import  {deportista} from '../src/data.js';
import { atletasUnicos } from '../src/data.js';


describe('medal', () => {
  it('is a function', () => {
    const datamock={
      "games": "Olympic Games",
      "year": 2016,
      "season": "summer",
      "city": "Rio de Janeiro",
      "athletes": [
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        },
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        }]
    
    }
    const testmedal= medal(datamock);
    expect(testmedal.length).toBe(2);
    expect(typeof testmedal).toBe('object');
  });


});


describe('crearTabla', () => {
  it('is a function', () => {
    const datamock = [
      {
        name: "Giovanni Abagnale",
        gender: "M",
        height: "198",
        weight: "90",
        sport: "Rowing",
        age: 21,  
      },
      {
        name: "Patimat Abakarova",
        gender: "F",
        height: "165",
        weight: "49",
        sport: "Taekwondo",
        age: 21,
      },
    ];
    
    const testcrearTabla= crearTabla(datamock);
    expect(testcrearTabla.length).toBe(288);
    expect(typeof testcrearTabla).toBe('string');
  });

});

describe('deportista', () => {
  it('is a object', () => {
    expect(typeof deportista).toBe('object');
  });
});

describe('atletasUnicos', () => {  
  it('is an array', () => {
    expect(Array.isArray(atletasUnicos)).toBe(true);
  });
});


describe('atletas', () => {
  it('is a function', () => {
    const datamock={
      "games": "Olympic Games",
      "year": 2016,
      "season": "summer",
      "city": "Rio de Janeiro",
      "athletes": [
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        },
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        }]
    
    }
    const testatletas= atletas(datamock);
    expect(testatletas.length).toBe(2);
    expect(typeof testatletas).toBe('object');
  });


});





