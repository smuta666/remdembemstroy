// $('.menu-btn').on('click', function(e) {
//   e.preventDefault();
//   $('.menu').toggleClass('menu_active');
//   $('.content').toggleClass('content_active');
// })


$(document).ready(function() {

  function toggleSidebar() {
    $('.menu').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
  }

  $(".menu-btn").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});
