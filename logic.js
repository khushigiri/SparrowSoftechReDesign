document.addEventListener('DOMContentLoaded', function() {
  const headerContainer = document.getElementById('headerContainer');
  const body = document.body;

  const scrollThreshold = 400; // 💡 Change this value to your desired height in px

  function handleScroll() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos >= scrollThreshold) {
      if (!headerContainer.classList.contains('fixed-header')) {
        headerContainer.classList.add('fixed-header');
        body.style.paddingTop = headerContainer.offsetHeight + 'px';
      }
    } else {
      if (headerContainer.classList.contains('fixed-header')) {
        headerContainer.classList.remove('fixed-header');
        body.style.paddingTop = '0';
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

window.addEventListener("scroll", function () {
  const langDiv = document.querySelector(".language_div");

  if (window.scrollY > 100) { // Trigger scroll threshold
    langDiv.classList.add("scrolled");
  } else {
    langDiv.classList.remove("scrolled");
  }
});
