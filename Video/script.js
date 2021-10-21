const button = document.querySelector('.container__button');
const video = document.querySelector('.container__video');

button.addEventListener('click', () => {
    if (!button.classList.contains('slide')){
        button.classList.add('slide')
        video.pause();
    }
    else {
        button.classList.remove('slide');
        video.play();
    }
})