const video = document.querySelector('video');

video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause()
});

video.addEventListener('ended', () => video.currentTime = 0);