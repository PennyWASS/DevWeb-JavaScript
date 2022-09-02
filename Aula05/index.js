var data = new Date()
document.getElementById("demo").innerHTML = data.getMinutes();

function ima(){
    alert("Evento com imagem");
}
/*function funcao(){
    alert("Você digitou algo");
}*/
function evento(valorDigitado){
    alert("Você digitou: " + valorDigitado);
}