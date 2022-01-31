const openMenuButton = document.querySelector('#open-menu')
const closeMenuButton = document.querySelector('#close-menu')
const dropdown = document.querySelector('#dropdown')
const options = document.querySelectorAll('li')

openMenuButton.addEventListener('click', openMenu)

closeMenuButton.addEventListener('click', closeMenu)

options.forEach((option) => option.addEventListener('click', closeMenu))

function openMenu() {
    dropdown.classList.remove('hidden')
    openMenuButton.classList.add('hidden')
    closeMenuButton.classList.remove('hidden')
}

function closeMenu() {
    dropdown.classList.add('hidden')
    openMenuButton.classList.remove('hidden')
    closeMenuButton.classList.add('hidden')
}