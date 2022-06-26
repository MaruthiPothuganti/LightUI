const btnAction = document.querySelector('#btn-actionModal');
const btnInfo = document.querySelector('#btn-infoModal');
const actionModal = document.querySelector('#actionModal');
const closeModalBtn = document.querySelector('#closeModalBtn');

const actionModalHandler = () => {
    actionModal.classList.add("modalShow");
}

const closeActionHandler = () => {
    actionModal.classList.remove("modalShow");
}


btnAction.addEventListener('click', actionModalHandler);
closeModalBtn.addEventListener('click', closeActionHandler);
