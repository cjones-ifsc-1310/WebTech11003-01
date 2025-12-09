$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });
});

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tabbuttons;

  // Get all elements with class="tab-content" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tab-button" and remove the "active" class
  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the first tab as active by default on page load
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tab-button').click();
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = document.getElementById(header.getAttribute('aria-controls'));

    if (content.hidden) {
      content.hidden = false;
      header.setAttribute('aria-expanded', 'true');
      header.classList.add('active');
    } else {
      content.hidden = true;
      header.setAttribute('aria-expanded', 'false');
      header.classList.remove('active');
    }
  });
});

 