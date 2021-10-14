document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleFormSubmit = function(event){
    event.preventDefault();
    newListItem();
    const form = document.querySelector('form');
    form.reset();
}

const newListItem = function() {
    const newListItem = document.createElement('li');
    const newP = document.createElement('p');
    newP.textContent = this.pizza_topping.value;
    newListItem.classList.add('topping');
    newListItem.appendChild(newP);
    const toppingList = document.querySelector('#topping_list');
    toppingList.appendChild(newListItem);
}

const handleDeleteAllClick = function () {
    const toppingList = document.querySelector('#topping_list');
    toppingList.innerHTML = '';
}