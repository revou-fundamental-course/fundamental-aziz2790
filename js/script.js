//ini javascript
function displayMessage() {
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    if (!nama || !tanggalLahir || !pesan) {
        alert('Data masih kosong maka data belum lengkap. Mohon dilengkapi.');
        return;
    }

    document.getElementById('displayNama').innerText = nama;
    document.getElementById('displayTanggalLahir').innerText = tanggalLahir;
    document.getElementById('displayJenisKelamin').innerText = jenisKelamin;
    document.getElementById('displayPesan').innerText = pesan;

    const now = new Date();
    document.getElementById('currentTime').innerText = now.toString();
}

document.addEventListener("DOMContentLoaded", function() {
    function replaceName() {
        let name = "";
        while (!name) {
            name = prompt("Halo, siapa nama Anda? Nama tidak boleh kosong.", "");
        }
        document.getElementById("name").innerText = name;
    }
    replaceName();

    document.getElementById("tombol").addEventListener("click", replaceName);
});

document.addEventListener('DOMContentLoaded', function() {
    const bannerContainer = document.querySelector('.banner-container');
    const images = [
        'assets/20141011_134857.jpg',
        'assets/overlay-bg.jpg',
        'assets/20141011_135334.jpg',
        // Tambahkan URL gambar lain yang diinginkan
    ];
    let currentImageIndex = 0;
    const changeInterval = 5000; // Ubah gambar setiap 5 detik

    function changeBannerImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        bannerContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }

    setInterval(changeBannerImage, changeInterval);
});


