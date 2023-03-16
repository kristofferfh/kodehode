// Includes sub-pages //
$(function() {
    var $menu = $('.dropdown'),
        $target = $('#content');

    $menu.on('click', 'a', function(event) {
        var $this = $(this);
        event.preventDefault();
        $target.load($this.attr('href'));
    });
});

// Hiding bonfire splash
window.onload = function() {
    $( "#bonfire" ).click(function() {
      $( "#bonfire" ).fadeOut( "slow", function() {
        // Animation complete.
      });
    });
  };

// Random color for H3 headers (wip)
/* window.onload = function() {
  var colors = ['#ff0000', '#00ff00', '#0000ff'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  document.getElementsByTagName()('h3').style.color = random_color;
}; */

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// Lazyloading cnewsc
$(window).on("load",function() {
  const hiddenElements = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  }, {
    threshold: 0.5,
  })

  hiddenElements.forEach((el) => observer.observe(el));
});