function validarEmail(){

    var email = document.querySelector("#email")
    var error = document.querySelector("#error-email");

    if (!email.checkValidity()){
        error.innerHTML = "Insira um e-mail válido"
    }
}

function redefinirMsg(){
    var error = document.querySelector("#error-email");
    if (error.innerHTML == "Insira um e-mail válido"){
        error.innerHTML = "";
    }
}