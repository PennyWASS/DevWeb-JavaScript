function gerarTabuada(){
    let operacaoselec = document.querySelector('input[name="operacao"]:checked').value;
    let numeroselec = document.querySelector('input[name="numero"]:checked').value;

    switch(numeroselec){
        case '0':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 0";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "0 + " + i + " = " + (0+i) + "<br/>";
                }
            }
        break;
        case '1':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 1";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "1 + " + i + " = " + (1+i) + "<br/>";
                }
            }
        break;
        case '2':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 2";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "2 + " + i + " = " + (2+i) + "<br/>";
                }
            }
        break;
        case '3':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 3";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "3 + " + i + " = " + (3+i) + "<br/>";
                }
            }
        break;
        case '4':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 4";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "4 + " + i + " = " + (4+i) + "<br/>";
                }
            }
        break;
        case '5':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 5";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "5 + " + i + " = " + (5+i) + "<br/>";
                }
            }
        break;
        case '6':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 6";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "6 + " + i + " = " + (6+i) + "<br/>";
                }
            }
        break;
        case '7':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 7";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "7 + " + i + " = " + (7+i) + "<br/>";
                }
            }
        break;
        case '8':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 8";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "8 + " + i + " = " + (8+i) + "<br/>";
                }
            }
        break;
        case '9':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 9";
                for(i = 0; i < 10; i++){
                    if(i == 0){
                        document.getElementById("corpotabu").innerHTML = "";
                    }
                    document.getElementById("corpotabu").innerHTML += "9 + " + i + " = " + (9+i) + "<br/>";
                }
            }
        break;
        
    }
}