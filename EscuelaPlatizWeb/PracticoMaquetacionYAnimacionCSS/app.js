const modal = document.querySelector('.modal')
const button1 = document.querySelector('#button1')

button1.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})