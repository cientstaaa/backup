function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;

    if(login == 'admin' && senha == 'admin'){
        alert('autorizado');
    }else{
        alert('usuário e/ou senha incorretos');
        location.href = "test.html"
    }
}