$(window).scroll(function() {
  toScroll = $(document).height() - $(window).height() - 200;
  if ($(this).scrollTop() > toScroll) {
    $(".content2").css("background-color", "rgba(227, 226, 213, 1)");
  } else {
    $(".content2").css("background-color", "rgba(227, 226, 213, 0.3)");
  }
});