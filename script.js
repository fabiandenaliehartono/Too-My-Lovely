function selectOption(option) {
    if (option === 'yes') {
        document.getElementById('options').style.display = 'none';
        var yeText = document.createElement('div');
        yeText.id = 'yeText';
        yeText.innerText = 'YEYYYYYY';
        yeText.style.fontSize = '36px';
        yeText.style.fontFamily = 'Sacramento, cursive';
        yeText.style.marginTop = '20px';
        document.getElementById('text-container').appendChild(yeText);

        // Tampilkan gambar "yeyy.png" sebelum efek pelangi
        changeImage('cat-meme.gif');

        // Flash rainbow colors sebelum menampilkan gambar cat-heart
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function untuk mengubah gambar di image-container
function changeImage(imageSrc) {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Kosongkan isi sebelumnya

    var newImage = new Image();
    newImage.src = imageSrc;
    newImage.alt = imageSrc;

    newImage.onload = function() {
        imageContainer.appendChild(newImage);
    };

    newImage.onerror = function() {
        console.error('Gagal memuat gambar:', imageSrc);
    };
}

// Function untuk efek warna pelangi
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function untuk menampilkan efek hujan hati
function startHeartRain() {
    const heartRainInterval = setInterval(() => {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '♥';

        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 200);

    setTimeout(() => {
        clearInterval(heartRainInterval);
    }, 10000);
}

// Function untuk menampilkan gambar cat-heart.gif setelah efek pelangi selesai
function displayCatHeart() {
    changeImage('cat-heart.gif');

    var yeText = document.getElementById('yeText');
    if (yeText) {
        yeText.innerText = 'i lovee youu my lovely';
    }

    startHeartRain();
}

// Function untuk menampilkan gambar awal (cat.gif)
function displayCat() {
    changeImage('cat1.gif');
}

// Jalankan gambar awal
displayCat();
