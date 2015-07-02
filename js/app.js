$(function () {
  // menu
  var menu = $('.menu');
  var menuButton = $('.menu-button');
  var menuChoice = $('.menu > ul > a');
  menuButton.click(function() {
    if (menu.position().left < 0) {
      menu.transition({left:'0'});
    } else {
      menu.transition({left:'-265px'});
    }
  });

  menuChoice.click(function () {
    menu.transition({left:'-265px'});
    $(this).find('li').toggleClass('sel')
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
