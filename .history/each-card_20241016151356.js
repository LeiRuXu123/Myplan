// Fungsi untuk mendapatkan data dari localStorage
function getCardsData(containerId) {
    const data = localStorage.getItem(containerId);
    return data ? JSON.parse(data) : [];
}

// Fungsi untuk menyimpan data ke localStorage
function saveCardsData(containerId, data) {
    localStorage.setItem(containerId, JSON.stringify(data));
}

// Fungsi untuk membuat kartu dan menambahkannya ke container secara descending
function createCard(item, containerId) {
    const container = document.getElementById(containerId);

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

    // Menambah kartu ke bagian atas container
    container.insertBefore(card, container.firstChild);

    // Menghapus kartu pertama jika lebih dari lima
    if (container.children.length > 5) {
        container.removeChild(container.lastChild);
    }
}

// Fungsi untuk memuat kartu dari localStorage saat halaman dimuat
function loadCards(containerId) {
    const data = getCardsData(containerId);
    data.reverse().forEach(item => createCard(item, containerId));
}

// Fungsi untuk menambah kartu baru dari input user
function addNewCard(containerId, title, content) {
    const data = getCardsData(containerId);
    const newCard = { title, content };
    
    // Tambahkan kartu baru di awal array (agar urutan descending)
    data.unshift(newCard);
    
    // Simpan ke localStorage dan perbarui tampilan
    saveCardsData(containerId, data);
    createCard(newCard, containerId);
}

// Muat kartu yang disimpan di localStorage saat halaman dimuat
loadCards('left-card-container');
loadCards('right-card-container');

// Event listener untuk form tambah kartu
document.getElementById('cardForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('cardTitle').value;
    const content = document.getElementById('cardContent').value;
    
    // Tambah kartu di container kiri
    addNewCard('left-card-container', title, content);
    
    // Reset form setelah submit
    document.getElementById('cardTitle').value = '';
    document.getElementById('cardContent').value = '';
    
    // Sembunyikan form
    document.getElementById('cardFormContainer').style.display = 'none';
});

document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('cardFormContainer').style.display = 'flex';
});

document.getElementById('cancelFormButton').addEventListener('click', function() {
    document.getElementById('cardFormContainer').style.display = 'none';
});
