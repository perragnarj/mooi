$(function () {
  // menu
  var menu = $('.menu');
  var menuButton = $('.menu-button');
  var menuChoice = $('.menu > ul > a');
  menuButton.click(function() {
    if (menu.position().left < 0) {
      menu.transition({left:'0'});
    } else {
      menu.transition({left:'-300px'});
    }
  });

  menuChoice.click(function () {
    menu.transition({left:'-300px'});
  })

  // set back button if not start page
  /*$(window).on("hashchange", onhashchange );

  function onhashchange() {
    if(window.location.hash) {
      $('.back-button').show();
    }
    else {
      $('.back-button').hide();
    }
  }*/
});
