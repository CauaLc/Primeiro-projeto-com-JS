
//Variáveis:
let contador=0;
//

//função para atribuir play a todos os elementos
function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}
 
//constante para atribuir o valor .tecla á lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');


while (contador < listaDeTeclas.length){


//constante para abreviar lista de teclas
    const tecla = listaDeTeclas[contador];

//constante da lista dos elementos
    const instrumento = tecla.classList[1];


//constante para atribuir os ids de cada tecla
    const idAudio = `#som_${instrumento}`;
 
//codigo que mostra as informaçoes no dev tools
    console.log(idAudio);
    console.log(contador);

//atribuiçao do onclick pra sair som
    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    //rotina do while que passará por todos da lista
    contador = contador + 1;



    
}








