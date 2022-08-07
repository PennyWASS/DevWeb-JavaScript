//Funções:
function soma(num1, num2){
    r = num1 + num2
    /*
    return r 
    return num1 + num 2
    */
    return document.getElementById("som").innerHTML = r
}

function sub(num1,num2){
    r = num1 - num2
    return document.getElementById("sub").innerHTML = r
}

function mult(num1,num2){
    r = num1 * num2
    return document.getElementById("mult").innerHTML = r
}

function divi(num1,num2){
    r = num1 / num2
    return document.getElementById("divi").innerHTML = r
}

function poten(num1,num2){
    r = num1 ** num2
    return document.getElementById("poten").innerHTML = r
}

//Formas de criar uma variável:
var nomeDaVariavel = "valor"; //Não precisa dizer o tipo da variável
var numero = 3;

let = outraVariavel = "Outro Gatoooo";
let = outroNumero = 30;

maisUmaVariavel = "Mais um Gatooo";
maisUmNumero = 40028922;

//Constante = não posso variar esse valor
const nomeDaConstante = "Não posso ser alterado :)";
const numeroConstante = 3.1415;