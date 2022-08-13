//Criando objetos:
const calculadora = {
    numero1: 0,
    numero2: 0,
    soma: function(){
        this.numero1 = document.getElementById("num1").value;
        this.numero2 = document.getElementById("num2").value;
        res = parseFloat(this.numero1) + parseFloat(this.numero2);
        document.getElementById("resultado").innerHTML = res;
        if(!this.numero1){
            document.getElementById("resultado").innerHTML = "Digite um valor válido!";
        }else if(!this.numero2){
            document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
        }else{
            //res = parseFloat(this.numero1) + parseFloat(this.numero2);
            //document.getElementById("resultado").innerHTML = res;
            return res;
        }
    },
    sub: function(){
        this.numero1 = document.getElementById("num1").value;
        this.numero2 = document.getElementById("num2").value;
        res = parseFloat(this.numero1) - parseFloat(this.numero2);
        document.getElementById("resultado").innerHTML = res;
        if(!this.numero1){
            document.getElementById("resultado").innerHTML = "Digite um valor válido!";
        }else if(!this.numero2){
            document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
        }else{
            return res;
        }
    },
    mult: function(){
        this.numero1 = document.getElementById("num1").value;
        this.numero2 = document.getElementById("num2").value;
        res = parseFloat(this.numero1) * parseFloat(this.numero2);
        document.getElementById("resultado").innerHTML = res;
        if(!this.numero1){
            document.getElementById("resultado").innerHTML = "Digite um valor válido!";
        }else if(!this.numero2){
            document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
        }else{
            return res;
        }
    },
    divi: function(){
        this.numero1 = document.getElementById("num1").value;
        this.numero2 = document.getElementById("num2").value;
        res = parseFloat(this.numero1) / parseFloat(this.numero2);
        document.getElementById("resultado").innerHTML = res;
        if(!this.numero1){
            document.getElementById("resultado").innerHTML = "Digite um valor válido!";
        }else if(!this.numero2){
            document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
        }else{
            return res;
        }
    },
    pot: function(){
        this.numero1 = document.getElementById("num1").value;
        this.numero2 = document.getElementById("num2").value;
        res = parseFloat(this.numero1) ** parseFloat(this.numero2);
        document.getElementById("resultado").innerHTML = res;
        if(!this.numero1){
            document.getElementById("resultado").innerHTML = "Digite um valor válido!";
        }else if(!this.numero2){
            document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
        }else{
            return res;
        }
    },
    med: function(){
        this.numero1 = document.getElementById("num1").value;
        this.numero2 = document.getElementById("num2").value;

        if(!this.numero1){
            document.getElementById("resultado").innerHTML = "Digite um valor válido!";
        }else if(!this.numero2){
            document.getElementById("resultado").innerHTML = "Digite outro valor válido!";
        }else{
            res = (parseFloat(this.numero1) + parseFloat(this.numero2))/2;
            if(res >= 7){
                alert("Parábens! Você passou. Sua média foi: " + res)
            }else{
                alert("Que pena, você não passou. Sua média foi:" + res)
            }
        }
    }
}