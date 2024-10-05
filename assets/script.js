const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;
const itemWidth = slider.querySelector('li').offsetWidth;
const maxScroll = slider.scrollWidth - slider.clientWidth;

prevBtn.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= itemWidth * 1; 
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
  updateButtons();
});

nextBtn.addEventListener('click', () => {
  if (scrollAmount < maxScroll) {
    scrollAmount += itemWidth * 1; 
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
  updateButtons();
});

function updateButtons() {
  prevBtn.disabled = scrollAmount === 0;
  nextBtn.disabled = scrollAmount >= maxScroll;
}


updateButtons();
document.getElementById('projects').addEventListener('click', function() {
  document.querySelectorAll('li').forEach(function(li) {
      li.classList.remove('active');
  });
  this.classList.add('active');
});

document.getElementById('jobs').addEventListener('click', function() {
  document.querySelectorAll('li').forEach(function(li) {
      li.classList.remove('active');
  });
  this.classList.add('active');
});
