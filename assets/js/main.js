const modalElement = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.js-modal-container__close');
const buyTicketBtns = document.querySelectorAll('.js-buy-ticket-btn');

for (const buyTicketBtn of buyTicketBtns) {
    buyTicketBtn.addEventListener('click', showModal)
}

modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
})

function showModal() {
    modalElement.classList.add('open');
}

function hiddenModal() {
    modalElement.classList.remove('open');
}

modalCloseBtn.addEventListener('click', hiddenModal);
modalElement.addEventListener('click', hiddenModal);
