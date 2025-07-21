const botaoMobile = document.getElementById('botaoMobile');
const menuSusp = document.getElementById('menuSusp');

botaoMobile.addEventListener('click', () => {
  if (menuSusp.style.display === 'flex') {
    menuSusp.style.display = 'none';
  } else {
    menuSusp.style.display = 'flex';
  }
});
