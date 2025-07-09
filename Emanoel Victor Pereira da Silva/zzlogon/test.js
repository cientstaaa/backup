function logar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if(login == 'admin' && senha == 'admin'){
        alert('autorizado');
    }else{
        alert('usuário e/ou senha incorretos')
    }
}