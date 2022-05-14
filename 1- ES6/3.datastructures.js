
//import {sumAll} from "./4.modules"

//import sumAll from "./4.modules"

const {sumAll} = require("./4.modules")
sumAll(20,10)

window.logToConsole = function (msg) {
  console.log(sumAll(20,10))
}

console.log("testing")

let username = "John"
let userAge = "20"

let userInfo1 = {
  username: username,
  userAge: userAge
}
//console.log(userInfo1)

let userInfo = {username, userAge}
//console.log(userInfo)

const student = {
    firstname: 'Jhon',
    lastname: 'Snow',
    country: 'England',
    ielts_scores: {
      speaking: 8,
      listening: 7.5,
      writing: 8.5,
      reading: 7.0
    }
};

//Old Style 
const firstname1 = student.firstname;
const lastname1 = student.lastname;
const country1 = student.country;
const ielts_scores1 = student.ielts_scores;
//console.log(`Old method: ${firstname1}, ${lastname1}, ${country1}`) //"Old Style: Jhon, Snow, England"

//ES6 Style
const { firstname, lastname, country } = student;
//console.log(`New method: ${firstname} ${lastname} ${country}`) //"ES6 Style: Jhon, Snow, England"

// Object destruction
const planet = {  
    planetName: 'Hosnian Prime',  
    faction: 'New Republic',  
    weather: 'Temperate'
    };

const { 
    planetName, 
    faction, 
    weather= 'default conditions' } = planet;

// console.log(planetName); 
// console.log(faction); 
// console.log(weather); 
 
//renaming
const { 
    planetName: system, 
    faction: team, 
    weather: conditions = 'default conditions' } = planet;

    const newPlanet={system,team, conditions}
    //console.log(newPlanet)
// console.log(system); 
// console.log(team); 
// console.log(conditions);


//Spread Operator

const student1 = {
    firstname: 'Jhon',
    lastname: 'Snow',
    country: 'England'
  };
const student2 = {
    firstname: 'Petter',
    lastname: 'Fan',
    country: 'USA',
    city: 'califonia'
};

const student3 = {...student1, country: "Algeria"}

//console.log(student3)

const student4={...student1,firstname: 'Petter',lastname: 'Fan',country: 'USA',city: 'califonia' }
  
//console.log(student4)

const newstud = {...student2 , ...student1};

//console.log(newstud);

const bootcamp ={
    bootcampId: "Web dev",
    sessionStart: "March",
    company: "CLA",
    instructor: "Abir"
}

const {bootcampId, sessionStart, ...restOfProps} = bootcamp

//console.log(restOfProps)

//create an object with class keyword
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var person = new Person('test', 12);
//console.log(person);

//static methods
class Article {  
    constructor(title, date) {  
     this.title = title;   
     this.date = date;  
    }  
    static createTodays() {   
     //remember, this = Article    
     return new this("Today's digest", new Date());  
    }
   }  
let article = Article.createTodays(); 
//console.log( article.title ); // Today's digest
//console.log( article.date ); // Thu Mar 25 2021 14:19:38 GMT+0300

// inheritance
class Car {
    constructor(brand) {
      this.car_name = brand;
    }
    present() {
      return `I have a ` + this.car_name;
    }
  }
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + `, it is a ` + this.model;
    }
  }
  let myCar = new Model("Ford", "Mustang");
  //console.log(myCar.show()); // I have a Ford, it is a Mustang