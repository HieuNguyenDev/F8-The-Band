// Modal
const modalElement = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.js-modal-container__close');
const buyTicketBtns = document.querySelectorAll('.js-buy-ticket-btn');

// Responsive Mobile Menu
const header = document.querySelector('#header');
const menuBtn = document.querySelector('.menu');
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');


// Handle Buy Tickets
function handleBuyTickets() {
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
}

// Handle Mobile Menu
function handleMobileMenu() {
    var headerHeight = header.clientHeight;

    // Show menu when click
    menuBtn.addEventListener('click', () => {
        var isClosed = header.clientHeight === headerHeight;
        if (isClosed) {
            header.style.height = 'auto'
        } else {
            header.style.height = null
        }
    })

    // Hidden menu when click
    for (let menuItem of menuItems) {
        menuItem.onclick = (event) => {
            var isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('sub-nav');

            if (isParentMenu) {
                event.preventDefault();
            } else {
                header.style.height = null
            }
        }
    }
}

function start() {
    handleBuyTickets();
    handleMobileMenu();
}

start();

