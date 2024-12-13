document.querySelector('.cards').addEventListener('click', function () {
  const card = this.querySelector('.card');
  card.classList.toggle('flipped'); //
});