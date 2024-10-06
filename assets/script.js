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

    function moveToNext(current, nextId) {
      if (current.value.length === 1) {
        document.getElementById(nextId).focus();
      }
      checkInputs();
    }


    function checkInputs() {
      const inputs = document.querySelectorAll('.otp-input');
      const verifyBtn = document.getElementById('verify-btn');
      let allFilled = true;

      inputs.forEach(input => {
        if (input.value === '') {
          allFilled = false;
        }
      });

      if (allFilled) {
        verifyBtn.removeAttribute('disabled');
        verifyBtn.classList.add('enabled');
      } else {
        verifyBtn.setAttribute('disabled', true);
        verifyBtn.classList.remove('enabled');
      }
    };
    let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    

    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function goToSlide(index) {
    showSlide(index);
}


showSlide(slideIndex);
const buttons = document.querySelectorAll('.packages-option button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});