// coercion implicita
// js combierte para que sean del mismo tipo de dato para que se puede operar
var a = 4 + "7"; // "47"
var b = 4 * 7; //28


// coercion explicita
// oblicamos a que se convierta para que sean del mismo tipo de dato para que se puede operar
var a = 20;
var b = "";
var c = String(a); // Convertimos el 20 numerico a 20 string
var d = Number(c); // Convertimos el 20 string a 20 numerico