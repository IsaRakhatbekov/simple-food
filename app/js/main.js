$(function() {
  $('.feedback__wrapper').slick({
    dots: true,
    arrows: true,
    infinite: false,
    prevArrow: '<button type="button" class="feedback__arrow feddback__arrow-prev"> <svg class="feedback__svg"><use xlink:href="images/sprite.svg#icon-left"></use></svg> </button>',
    nextArrow: '<button type="button" class="feedback__arrow feddback__arrow-next"> <svg class="feedback__svg"><use xlink:href="images/sprite.svg#icon-right"></use></svg> </button>',
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
        speed: 300,
        slidesToShow: 1,
        infinite: false,
      });
    } else {
      $(".best__wrapper.slick-initialized").slick("unslick");
    }
  });  

	$('.burger').on('click', function(){
    $('.mobile-menu').addClass('mobile-menu--active');
    $('body').addClass('lock')
  });
  
  $('.mobile-menu__burger').on('click', function(){
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('body').removeClass('lock')
  });

  $(document).mouseup(function (e){
    const close = $(".mobile-menu");
    if(!close.is(e.target) && close.has(e.target).length === 0) {
      $(".mobile-menu").removeClass("mobile-menu--active");
      $("body").removeClass("lock")
    }
  });

})
var mixer = mixitup('.popular__items');	