let score = 0; // Başlangıç skoru
let timeRemaining = 30; // Başlangıç zamanı (saniye cinsinden)
let gameTimer; // Zamanlayıcıyı tutacak değişken
let gameInProgress = false; // Oyun durumunu takip eder

// Oyun başlatıldığında çalışacak fonksiyon
function startGame() {
    // Başlangıç butonunu devre dışı bırak ve oyun butonunu etkinleştir
    document.getElementById('startButton').disabled = true;
    document.getElementById('gameButton').disabled = false;
    
    // Skoru sıfırla ve zamanlayıcıyı başlat
    score = 0;
    document.getElementById('score').textContent = score;
    
    timeRemaining = 30; // Zamanı sıfırla
    document.getElementById('timer').textContent = timeRemaining;
    
    // Zamanlayıcıyı başlat
    gameTimer = setInterval(updateTimer, 1000);
    
    gameInProgress = true; // Oyunun başladığını belirle
}

// Zamanlayıcı her saniyede bir çalışacak fonksiyon
function updateTimer() {
    timeRemaining--; // Zamanı bir saniye azalt
    document.getElementById('timer').textContent = timeRemaining; // Ekranda göster

    // Zaman bittiğinde oyunu bitir
    if (timeRemaining <= 0) {
        clearInterval(gameTimer); // Zamanlayıcıyı durdur
        endGame(); // Oyunu bitir
    }
}

// Skoru artıracak fonksiyon
function increaseScore() {
    if (gameInProgress) {
        score++; // Skoru artır
        document.getElementById('score').textContent = score; // Ekranda güncelle
    }
}

// Oyun bittiğinde çalışacak fonksiyon
function endGame() {
    gameInProgress = false;
    document.getElementById('gameButton').disabled = true; // Oyun butonunu devre dışı bırak
    alert("Oyun Bitti! Toplam Skorunuz: " + score); // Skoru göster
}
