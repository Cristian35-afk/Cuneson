const audio = document.getElementById("audioPlayer");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio
}

function setVolume(value) {
    audio.volume = value;
}
