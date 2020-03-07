const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const cardId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = ''
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList('active')
    modalOverlay.querySelector('iframe'). src = ""
})