const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');

 

let count = 0;

 

clickButton.addEventListener('click', () => {
  count++;
  clickCount.textContent = `Cliques: ${count}`;
});
