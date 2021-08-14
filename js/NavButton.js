const burgerBtn = document.getElementById('burger-btn');
const closeBtn = document.getElementById('close-btn');
const menuNav = document.getElementById('menu-nav');
const searchBtn = document.getElementById('search-btn');
const moonBtn = document.getElementById('moon-btn');


burgerBtn.addEventListener('click', function(){
  menuNav.style.display = 'block';
  closeBtn.style.display = 'block';
  burgerBtn.style.display = 'none';
  searchBtn.style.display = 'block'
  moonBtn.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
  menuNav.style.display = 'none';
  closeBtn.style.display = 'none';
  burgerBtn.style.display = 'block';
  searchBtn.style.display = 'none'
  moonBtn.style.display = 'none';
})