const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content')
const openModal = document.querySelectorAll('.openModal')
const closeModal = document.querySelector('.modal__content--close')

openModal.forEach((btnModal) =>
    btnModal.addEventListener('click', () => {
        openModalFunction(modal)
        openModalFunction(modalContent)
    }) 
)

closeModal.addEventListener('click', () => {
    closeModalFunction(modal)
    closeModalFunction(modalContent)
})

const openModalFunction = function  (objModal){
    objModal.classList.remove('hidden')
    objModal.classList.add('visible')
}
const closeModalFunction = function  (objModal){
    objModal.classList.remove('visible')
    objModal.classList.add('hidden')
}