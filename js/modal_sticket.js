const buyBtns = document.querySelectorAll('.js-btn-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const closeBtn = document.querySelector('.js-modal-close')

function showModalBuyTicket() {
    modal.classList.add('open')
}

function closeModalBuyTicket() {
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showModalBuyTicket)
}

closeBtn.addEventListener('click',closeModalBuyTicket)

modal.addEventListener('click',closeModalBuyTicket)

modal.addEventListener('click',closeModalBuyTicket)

modalContainer.addEventListener('click',function(event){
    event.stopPropagation();
})