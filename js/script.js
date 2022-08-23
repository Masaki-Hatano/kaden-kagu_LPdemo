
// alert('うに')



jQuery('.hamburger-icon').on('click', function() {

    // alert('click');
    // jQuery('.qa__answer').slideToggle('is-active');
    // jQuery('.qa-items').toggleClass('is-active');
  
    jQuery(this).next().slideToggle();
    jQuery(this).children('.hamburger-icon__bars').toggleClass('is-active')
  
    return false;
  });




jQuery('.faq__question-text').on('click', function() {

  // alert('click');
  // jQuery('.qa__answer').slideToggle('is-active');
  // jQuery('.qa-items').toggleClass('is-active');

  jQuery(this).next().slideToggle();
  jQuery('.faq__question-text').not($(this)).siblings('.faq__answer').slideUp();
  jQuery(this).children('.faq-items').toggleClass('is-active')
  jQuery(this).toggleClass('is-active')

  return false;
});


jQuery(window).on('scroll', function(){
  if ( 100 < jQuery(this).scrollTop()) {
    jQuery('#page-top').addClass('is-show');
  } else {
    jQuery('#page-top').removeClass('is-show');
  }
});
jQuery('a[href^="#"]').on('click', function() {

  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id !='#') {
    var position = jQuery(id).offset().top - 50;
  }
  
jQuery('html,body').animate({
    scrollTop: position
},
300);
});




new WOW().init();