let spanny = document.getElementById('mySpan');
let pageHeader = document.getElementById('mainHeader');

pageHeader.addEventListener('mouseover', (event) => {
  spanny.style.color = 'gold';
  spanny.style.transition = '0.6s ease';
  pageHeader.style.opacity = '0.8';
  pageHeader.style.transition = '0.6s ease';
});

pageHeader.addEventListener('mouseleave', (event) => {
  spanny.style.color = 'black';
  spanny.style.transition = '0.6s ease';
  pageHeader.style.border = '4px solid white';
  pageHeader.style.opacity = '0.6';
  pageHeader.style.transition = '0.6s ease';
});