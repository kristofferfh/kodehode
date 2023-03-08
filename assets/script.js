// Includes sub-pages //
$(function() {
    var $menu = $('#menu'),
        $target = $('#content');

    $menu.on('click', '> li a', function(event) {
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