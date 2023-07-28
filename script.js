
// Инициализируем карусель и указываем стандартный слайд (индекс 1 в данном примере)
var carousel = document.querySelector('.carousel');
var flkty = new Flickity(carousel, {
    initialIndex: 1,
    wrapAround: true, // Allows continuous looping
    autoPlay: true, // Set to true if you want auto-play
    prevNextButtons: true, // Show prev/next buttons
    pageDots: true,// Установите индекс слайда, с которого хотите начать при загрузке страницы
});