// Data untuk card di kolom kiri
const leftData = [
    { title: "Card 1", content: "This is the content of card 1" },
    { title: "Card 2", content: "This is the content of card 2" },
    { title: "Card 3", content: "This is the content of card 3" }
];

// Data untuk card di kolom kanan
const rightData = [
    { title: "Card 4", content: "This is the content of card 4" },
    { title: "Card 5", content: "This is the content of card 5" },
    { title: "Card 6", content: "This is the content of card 6" }
];

// Fungsi untuk membuat kartu dan menambahkannya ke container yang ditentukan
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

// Panggil fungsi untuk mengisi kartu di kolom kiri dan kanan
createCards(leftData, 'left-card-container');
createCards(rightData, 'right-card-container');

// Tombol dan elemen formulir
const addLeftCardBtn = document.getElementById('add-left-card-btn');
const addRightCardBtn = document.getElementById('add-right-card-btn');
const cardFormContainer = document.getElementById('card-form-container');
const submitCardBtn = document.getElementById('submit-card-btn');
const cancelCardBtn = document.getElementById('cancel-card-btn');
let targetContainerId = ''; // Menyimpan ID kontainer yang dituju

// Tampilkan formulir sesuai kolom yang dipilih
addLeftCardBtn.addEventListener('click', () => {
    targetContainerId = 'left-card-container';
    cardFormContainer.style.display = 'flex';
});

addRightCardBtn.addEventListener('click', () => {
    targetContainerId = 'right-card-container';
    cardFormContainer.style.display = 'flex';
});

// Fungsi untuk menambahkan kartu baru ke kolom yang dipilih
submitCardBtn.addEventListener('click', () => {
    const title = document.getElementById('card-title').value;
    const content = document.getElementById('card-content').value;

    // Buat objek kartu baru
    const newCard = { title: title, content: content };

    // Tambahkan kartu ke kolom yang sesuai
    createCards([newCard], targetContainerId);

    // Reset dan sembunyikan formulir
    document.getElementById('card-title').value = '';
    document.getElementById('card-content').value = '';
    cardFormContainer.style.display = 'none';
});

// Sembunyikan formulir jika tombol cancel diklik
cancelCardBtn.addEventListener('click', () => {
    cardFormContainer.style.display = 'none';
});


