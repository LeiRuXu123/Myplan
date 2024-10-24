// Dapatkan elemen-elemen yang diperlukan
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
});
