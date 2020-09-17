// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// listen for click events on modal-btn and close-btn
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener('click', closeModal);

// when user clicks modal-btn add .open-modal to modal-overlay
function openModal() {
    return modalOverlay.classList.add('open-modal');
}
// when user clicks close-btn remove .open-modal from modal-overlay
function closeModal() {
    modalOverlay.classList.remove('open-modal');
}