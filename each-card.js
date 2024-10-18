/*/ Dapatkan elemen-elemen yang diperlukan
const addExpensesBtn = document.getElementById('add-expenses-btn');
const addIncomeBtn = document.getElementById('add-income-btn');
const expensesFormContainer = document.getElementById('expenses-form-container');
const incomeFormContainer = document.getElementById('income-form-container');
const expensesForm = document.getElementById('expenses-form');
const incomeForm = document.getElementById('income-form');
const expensesCardContainer = document.getElementById('expenses-card-container');
const incomeCardContainer = document.getElementById('income-card-container');
const closeFormBtns = document.querySelectorAll('.close-form-btn');

// Fungsi untuk menampilkan form
function showForm(formContainer) {
    formContainer.classList.remove('d-none');
}

// Fungsi untuk menyembunyikan form
function hideForm(formContainer) {
    formContainer.classList.add('d-none');
}

// Tambahkan event listener untuk menampilkan form
addExpensesBtn.addEventListener('click', () => showForm(expensesFormContainer));
addIncomeBtn.addEventListener('click', () => showForm(incomeFormContainer));

// Tambahkan event listener untuk menyembunyikan form pada tombol cancel
closeFormBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        hideForm(expensesFormContainer);
        hideForm(incomeFormContainer);
    });
});

// Fungsi untuk menambahkan kartu baru
function addCard(container, title, content) {
    const card = document.createElement('div');
    card.className = 'card m-2';
    card.style.width = '18rem';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = content;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm mt-2';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        container.removeChild(card);
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(deleteButton);
    card.appendChild(cardBody);
    container.appendChild(card);
}

// Form untuk menambah kartu Expenses
expensesForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('expenses-title').value;
    const content = document.getElementById('expenses-text').value;
    addCard(expensesCardContainer, title, content);
    expensesForm.reset();
    hideForm(expensesFormContainer);
});

// Form untuk menambah kartu Income
incomeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('income-title').value;
    const content = document.getElementById('income-text').value;
    addCard(incomeCardContainer, title, content);
    incomeForm.reset();
    hideForm(incomeFormContainer);
});*/




const leftData = [
    { title: "Card 1", content: "This is the content of card 1" },
    { title: "Card 2", content: "This is the content of card 2" },
    { title: "Card 3", content: "This is the content of card 3" }
]; 


const rightData = [
    { title: "Card 4", content: "This is the content of card 4" },
    { title: "Card 5", content: "This is the content of card 5" },
    { title: "Card 6", content: "This is the content of card 6" }
];


function createCards(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = item.title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = item.content;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);

        container.appendChild(card);

        if (container.children.length > 5) {
            container.removeChild(container.firstElementChild);
        }
    });
}


createCards(leftData, 'left-card-container');
createCards(rightData, 'right-card-container');


const addLeftCardBtn = document.getElementById('add-left-card-btn');
const addRightCardBtn = document.getElementById('add-right-card-btn');
const cardFormContainer = document.getElementById('card-form-container');
const submitCardBtn = document.getElementById('submit-card-btn');
const cancelCardBtn = document.getElementById('cancel-card-btn');
let targetContainerId = ''; 


addLeftCardBtn.addEventListener('click', () => {
    targetContainerId = 'left-card-container';
    cardFormContainer.style.display = 'flex';
});

addRightCardBtn.addEventListener('click', () => {
    targetContainerId = 'right-card-container';
    cardFormContainer.style.display = 'flex';
});



submitCardBtn.addEventListener('click', () => {
    const title = document.getElementById('card-title').value;
    const content = document.getElementById('card-content').value;

    
    const newCard = { title: title, content: content };

    
    createCards([newCard], targetContainerId);

    
    document.getElementById('card-title').value = '';
    document.getElementById('card-content').value = '';
    cardFormContainer.style.display = 'none';
});



cancelCardBtn.addEventListener('click', () => {
    cardFormContainer.style.display = 'none';
});


