$(document).ready(function() {

  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  $('#myTab2 a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  $('#myTab3 a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  $('.menu-icon').click(function (e) {
    e.preventDefault()
    $('.menu-wrap').toggleClass('active')
    $('.main-container').toggleClass('active')
  });

  // Add scrollspy to <body>
  $('body').scrollspy({target: "#navbar-example", offset: 50}); 

  // Add smooth scrolling to all links inside a navbar
  $("#navbar-example a").on('click', function(event){

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash (#)
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  
  // Diplay result levels on click
  $('.level-1 .category').click(function (e) {
    e.preventDefault()
    $('.level-2').addClass('active')
    $(this).addClass('category-active')
  });
  $('.level-2 .category').click(function (e) {
    e.preventDefault()
    $('.level-3').addClass('active')
    $(this).addClass('category-active')
  });
  $('.level-3 .category').click(function (e) {
    e.preventDefault()
    $('.level-4').addClass('active')
    $(this).addClass('category-active')
  });
  $('.level-4 .category').click(function (e) {
    e.preventDefault()
    $(this).addClass('category-active')
  });

  // Display and close overlay
  $('.result-block').click(function (e) {
    e.preventDefault()
    $('.overlay').removeClass('hidden')
    $('.overlay').addClass('clicked')
    $(this).addClass('block-active')
  });
  $('.result-block').mouseover(function (e) {
    e.preventDefault()
    $('.overlay').removeClass('hidden')
    $('.overlay').addClass('active')
  });
  $('.result-block').mouseout(function (e) {
    e.preventDefault()
    $('.overlay').removeClass('active')
    $('.overlay').addClass('hidden')
  });
  $('.close').click(function (e) {
    e.preventDefault()
    $('.overlay').addClass('hidden')
    $('.result-block').removeClass('block-active')
  });

  // Level results categories width based on categories number 
  $('.level-1 .category').css({
    height: $('.level-1').height() / $('.level-1 .category').length
  })
  $('.level-2 .category').css({
    height: $('.level-2').height() / $('.level-2 .category').length
  })
  $('.level-3 .category').css({
    height: $('.level-3').height() / $('.level-3 .category').length
  })
  $('.level-4 .category').css({
    height: $('.level-4').height() / $('.level-4 .category').length
  })

  $(window).resize(function () {
    $('.level-1 .category').css({
      height: $('.level-1').height() / $('.level-1 .category').length
    })
    $('.level-2 .category').css({
      height: $('.level-2').height() / $('.level-2 .category').length
    })
    $('.level-3 .category').css({
      height: $('.level-3').height() / $('.level-3 .category').length
    })
    $('.level-4 .category').css({
      height: $('.level-4').height() / $('.level-4 .category').length
    })
  });

  // Refresh page
  $('.reset').click(function() {
    location.reload();
  });
});