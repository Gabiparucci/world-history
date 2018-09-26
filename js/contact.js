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

    var firstName, lastName, phone, message;

    firstName = document.getElementById('firstName');
    lastName = document.getElementById('lastName');
    phone = document.getElementById('phone');
    message = document.getElementById('message');

    if (firstName.value == "") {
        alert("Por favor, digite o primeiro nome válido");
    }
    if (lastName.value == "") {
        alert("Por favor, digite o sobrenome válido");
    }
    if (message.value == "") {
        alert("Por favor, digite uma mensagem válida");
    }
    if (!isEmail()) {
        alert("Por favor, digite um email válido");
    }
    if(phone.value.length > 11 || phone.value.length < 10){
        alert("Por favor, digite um telefone válido");
    }
}