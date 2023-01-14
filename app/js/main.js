$(function() {
  $('.feedback__wrapper').slick({
    dots: true,
    arrows: true,
    infinite: false,
    prevArrow: '<button type="button" class="feedback__arrow feddback__arrow-prev"><img class="feedback__svg" src="images/icons/icon-left.svg"></button>',
    nextArrow: '<button type="button" class="feedback__arrow feddback__arrow-next"><img class="feedback__svg" src="images/icons/icon-right.svg"></button>',
  });

  $(".logo, .menu__link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $(window).on('load resize', function() {
    if ($(window).width() < 560) {
      $('.best__wrapper:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        infinite: false,
      });
    } else {
      $(".best__wrapper.slick-initialized").slick("unslick");
    }
  });  

	$('.burger').on('click', function(){
    $('.mobile-menu').toggleClass('mobile-menu--active');
    $('body').toggleClass('lock')
  });
  

})
var mixer = mixitup('.popular__items');	