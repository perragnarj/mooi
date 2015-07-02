$(function () {
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
