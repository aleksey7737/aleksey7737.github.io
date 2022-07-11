window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_block'),
    menuItem = document.querySelectorAll('.menu_button'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_block_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_block_active');
        })
    })
})