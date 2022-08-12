//Cálculo da soma:
function soma(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let res = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById("resultado").innerHTML = res;
    if(!numero1){
        document.getElementById("resultado").innerHTML = "Digite um valor válido!";
    }else if(!numero2){
        document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
    }else{
        return r;
    }
}
//Cálculo da subtração:
function sub(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let res = parseFloat(numero1) - parseFloat(numero2);
    document.getElementById("resultado").innerHTML = res;
    if(!numero1){
        document.getElementById("resultado").innerHTML = "Digite um valor válido!";
    }else if(!numero2){
        document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
    }else{
        return r;
    }
}
//Cálculo da divisão:
function divi(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let res = parseFloat(numero1) / parseFloat(numero2);
    document.getElementById("resultado").innerHTML = res;
    if(!numero1){
        document.getElementById("resultado").innerHTML = "Digite um valor válido!";
    }else if(!numero2){
        document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
    }else{
        return r;
    }
}
//Cálculo da multiplicação
function mult(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let res = parseFloat(numero1) * parseFloat(numero2);
    document.getElementById("resultado").innerHTML = res;
    if(!numero1){
        document.getElementById("resultado").innerHTML = "Digite um valor válido!";
    }else if(!numero2){
        document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
    }else{
        return r;
    }
}
//Função que calcula a potência:
function pot(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let res = parseFloat(numero1) ** parseFloat(numero2);
    document.getElementById("resultado").innerHTML = res;
    if(!numero1){
        document.getElementById("resultado").innerHTML = "Digite um valor válido!";
    }else if(!numero2){
        document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
    }else{
        return r;
    }
}
//Função para calcular a média:
function med(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let res = (parseFloat(numero1) + parseFloat(numero2))/2;
    document.getElementById("resultado").innerHTML = res;
    if(!numero1){
        document.getElementById("resultado").innerHTML = "Digite um valor válido!";
    }else if(!numero2){
        document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
    }else{
        if(res >=7){
            alert("Parábens! Você passou. Sua média foi: " + res)
        }else{
            alert("Que pena, você não passou. Sua média foi:" + res)
        }
    }
}