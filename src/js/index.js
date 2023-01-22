/**
 * Clicar no botao do trailler, abre a modal do trailler
 *  -pega um elemento que representa o botao no html usando o js
 *  -identifica quando o usuário apertar o botao
 *  -pegar a modal o elemento da modal no js
 *  -abrir a modal no js
 *  -
 * 
 * Quando apertar no X, deve fechar a Modal
 *  -pegar o elemento do X no js
 *  -identificar quando o cara apertar no X
 *  -fechar a modal
 * 
 */

console.log('mostrar o document', document);

const botaoTrailler = document.querySelector('.botao-trailler');
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src; 

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailler.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideo)
});


const botaoFecharModal = document.querySelector('.fechar-modal')
botaoFecharModal.addEventListener ("click", () =>{
    alternarModal();
    video.setAttribute("src", "")
});


