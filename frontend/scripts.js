document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-control');
    
    // Verifica se os elementos existem para não dar erro no console
    if (btn && music) {
        btn.addEventListener('click', function() {
            if (music.paused) {
                music.play();
                btn.innerHTML = '⏸️ Pausa n bro';
            } else {
                music.pause();
                btn.innerHTML = '🎵 Toca dnv';
            }
        });
    }
});