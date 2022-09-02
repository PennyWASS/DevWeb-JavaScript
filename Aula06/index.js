function gerarTabuada(){
    let operacaoselec = document.querySelector('input[name="operacao"]:checked').value;
    let numeroselec = document.querySelector('input[name="numero"]:checked').value;

    switch(numeroselec){
        case '0':
            if(operacaoselec == "soma"){
                document.getElementById("titulotabu").innerHTML = "Tabuada de Soma do número 0";
                //document.getElementById("corpotabu").innerHTML = "0+0=0";
                alert("aaaa")
            }
        break;
        case '1':
            alert("1");  
        break;
        case '2':
            alert("2");
        break;
        case '3':
            alert("3");
        break;
        case '4':
            alert("4");
        break;
        case '5':
            alert("5");
        break;
        case '6':
            alert("6");
        break;
        case '7':
            alert("7");
        break;
        case '8':
            alert("8");
        break;
        case '9':
            alert("9");
        break;
        
    }

}