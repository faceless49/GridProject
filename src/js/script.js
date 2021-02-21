/* let likeBtn = document.querySelector('.btn-like');
let btnText = document.querySelector('.btn-text');

likeBtn.addEventListener('click', function() {
     likeBtn.classList.toggle('liked');
});
 */


// * Swiper Slider

const swiper = new Swiper('.image-slider', {
     // Optional parameters
     direction: 'vertical',
     loop: true,
   
     // If we need pagination
     pagination: {
       el: '.swiper-pagination',
     },
   
     // Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   
     // And if we need scrollbar
     scrollbar: {
       el: '.swiper-scrollbar',
     },
   });