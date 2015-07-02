$(function () {
  // open menu
  var menu = $('.menu');
  var menuButton = $('.menu-button')

  menuButton.click(function() {
  console.log(menu.position().left)
    if (menu.position().left < 0) {
      menu.transition({left:'0'});
    } else {
      menu.transition({left:'-300px'})
    }
  });

  // set back button if not start page
  $(window).on("hashchange", onhashchange );

  function onhashchange() {
    if(window.location.hash) {
      $('.back-button').show();
    }
    else {
      $('.back-button').hide();
    }
  }
});
