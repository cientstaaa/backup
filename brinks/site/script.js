var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'conteúdo/imagens/menu.png') {
        iconMenu.setAttribute("src","conteúdo/imagens/close.png");
    }else{
        iconMenu.setAttribute("src","conteúdo/imagens/menu.png");
    }

   menu.classList.toggle('active');
});
