const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')
        
        const imagemId = card.getAttribute('id')
        const tituloModal = card.querySelector('h1').textContent
        const autorModal = card.querySelector('p').textContent

        modalOverlay.querySelector('img').src = `/assets/${imagemId}.png`
        modalOverlay.querySelector('h1').textContent = tituloModal
        modalOverlay.querySelector('p').textContent = autorModal
    })
}

closeModal = document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    
})