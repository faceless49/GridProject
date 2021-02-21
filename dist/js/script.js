let likeBtn = document.querySelector('.btn-like');
let btnText = document.querySelector('.btn-text');

likeBtn.addEventListener('click', function() {
     likeBtn.classList.toggle('liked');
});
