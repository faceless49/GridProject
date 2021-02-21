let likeBtn = document.querySelector('.btn-like');
let btnText = document.querySelector('.btn-text');

likeBtn.addEventListener('click', function() {
     likeBtn.classList.toggle('liked');
     if (likeBtn.className == 'liked') {
        btnText.innerHTML = 'FAVED'
     }
});

/* document.addEventListener('keydown', function(key){
   if(key.key === 'l' || key.key === 'L') {
      likeBtn.classList.toggle('liked');
   }
}); */