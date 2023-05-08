var modal = document.getElementById('simpleModal')
var modalBtn = document.getElementById('modalBtn')
var closeBtn = document.querySelector('.closeBtn')

modalBtn.addEventListener('click',OpenModal)
closeBtn.addEventListener('click',closeModal)
window.addEventListener("click",clickOutside)

function OpenModal(){
    modal.style.display ='block'
    modal.style.animationPlayState ="running"
}
function closeModal(){
    modal.style.display ='none'

}
function clickOutside(e){
    if(e.target.className === 'modal'){
        modal.style.display ='none'
    }
}