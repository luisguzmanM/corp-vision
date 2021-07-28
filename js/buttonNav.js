const buttonNav = document.getElementById('btn-menu');
const iconX = document.getElementById('iconX');
const iconBurger = document.getElementById('iconBurger');
const iconsHeader = document.getElementById('iconsHeader');

buttonNav.addEventListener('click', function(){
  iconBurger.classList.toggle('hidden')
  iconX.classList.toggle('show')
  iconsHeader.classList.toggle('show')
})