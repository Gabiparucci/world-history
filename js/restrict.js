function isEmail() {
    var email = document.getElementById('email');

    teste = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;

    if (teste.exec(email)) {
        return true;
    } if (email.value == "") {
        return false;
    }else{
        return false;
    }
}

function enviar() {

    var password = document.getElementById('password');

    if (password.value == "") {
        alert("Por favor, digite uma senha válida");
    }
    if (!isEmail()) {
        alert("Por favor, digite um email válido");
    }

}