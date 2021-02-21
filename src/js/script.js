let likeBtn = document.querySelector('.btn-like');
let btnText = document.querySelector('.btn-text');

likeBtn.addEventListener('click', function() {
     likeBtn.classList.toggle('liked');
     btnText.innerHTML = 'FAVED';
});











// * ========================== Swiper Slider


new Swiper('.image-slider', {
     	
     

	navigation: {
		nextEl: '.swiper-button-next',               // * ========================== Arrows navigation
		prevEl: '.swiper-button-prev'
	},

     grabCursor: true,
     
	slidesPerView: 1,                                 // * ========================== Slides per view

	centeredSlides: false,                            // * ========================== Active slide

	loop: true,                                      // * ========================== Infinity slider


     // Автопрокрутка
	
	autoplay: {
		delay: 3000,                                  // * ========================== Pause before next slide
		stopOnLastSlide: false,                       // * ========================== Stop on last slide
		disableOnInteraction: false                  // * ========================== Disable after click
	},
	

});