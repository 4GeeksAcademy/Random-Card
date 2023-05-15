/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //Declaramos las arrays
  let element = ["corazon", "trebol", "pica", "diamante"];
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  //Variables Random
  let randomElements = Math.floor(Math.random() * elements.length);
  let randomNumbers = Math.floor(Math.random() * numbers.length);

  //Accedemos a los elementos
  let top = document.querySelector(".top");
  let numbers = document.querySelector(".numbers");
  let bottom = document.querySelector(".bottom");

  //Manipulacion
  numbers.innerHTML = number[randomNumbers];
};
