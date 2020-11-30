const sounds = [
    'contra',
    'keişan',
    'sokrat',
    'stabil'
]

sounds.forEach((sound) => {
    const btn = document.createElement('button');

    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
    document.body.appendChild(btn);
});

stopSongs = () => {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currenTime = 0;
    });
}

