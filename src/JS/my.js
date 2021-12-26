
  window.onscroll = function(e) {
    var myheader = document.getElementById('myheader');
    // target.style.transition = '1s';
    var product = document.querySelectorAll('.product')[0].offsetTop - 300;
    if(window.scrollY >= 10) {
      // target.style.transform = 'scale(2) translateX(100px)';
      myheader.classList.add('show');
      title.classList.add('show');
      loginbutton.classList.add('show');
      menu.classList.add('show')
      dropdown.classList.add('show')
    } else {
      // target.style.transform = 'scale(1) translateX(0px)';
      myheader.classList.remove('show');
      title.classList.remove('show');
      loginbutton.classList.remove('show');
      menu.classList.remove('show')
      dropdown.classList.remove('show')

    }
  }
