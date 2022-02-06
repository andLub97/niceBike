//ativar links no menu-header
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = window.location.href;
    const href=link.href;
    if(url.includes(href)){
        link.classList.add('ativo');
    }
}
links.forEach(ativarLink);
//ativação de itens no orçamento
const parametros=new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento=document.getElementById(parametro);
    if(elemento){
    elemento.checked=true;}
}
parametros.forEach(ativarProduto);