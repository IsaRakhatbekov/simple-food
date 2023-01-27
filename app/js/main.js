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

  $('.sidebar-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.sidebar-price__from').text(data.from);
      $('.sidebar-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.sidebar-price__from').text(data.from);
      $('.sidebar-price__to').text(data.to);
    },
  });

  $('.select-style').styler();

  $('.open-filter__btn').on('click', function(){
    $('.open-filter').addClass('open-filter--active');
    $('body').addClass('lock')
  }); 

  $('.open-filter__close').on('click', function(){
    $('.open-filter').removeClass('open-filter--active');
    $('body').removeClass('lock')
  });

  $(document).mouseup(function (e){
    const close = $(".open-filter");
    if(!close.is(e.target) && close.has(e.target).length === 0) {
      $(".open-filter").removeClass("open-filter--active");
      $("body").removeClass("lock")
    }
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 560) {
      $('.promotions__list:not(.slick-initialized)').slick({
        arrows: false,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        infinite: false,
      });
    } else {
      $(".promotions__list.slick-initialized").slick("unslick");
    }
  });

  $('.order__slider').slick({
    prevArrow: '<button type="button" class="order__arrow order__arrow-prev"> <svg class="order__svg"><use xlink:href="images/sprite.svg#icon-order-left"></use></svg> </button>',
    nextArrow: '<button type="button" class="order__arrow order__arrow-next"> <svg class="order__svg"><use xlink:href="images/sprite.svg#icon-order-right"></use></svg> </button>',
  });

  $(".star").rateYo({
    spacing   : "5px",
    starWidth: "16px",
    readOnly: true,
    normalFill: "#C1C1C14D",
    ratedFill: "#FFB800",
  });

  $(".tab-form__star").rateYo({
    spacing   : "5px",
    starWidth: "16px",
    normalFill: "#cecece",
    ratedFill: "#FFB800",
  });

  $('.interesting__slider').slick({
    slidesToShow: 5,
    waitForAnimate: false,
    prevArrow: '<button type="button" class="interesting__arrow interesting__arrow-prev"> <svg class="interesting__svg"><use xlink:href="images/sprite.svg#icon-order-left"></use></svg> </button>',
    nextArrow: '<button type="button" class="interesting__arrow interesting__arrow-next"> <svg class="interesting__svg"><use xlink:href="images/sprite.svg#icon-order-right"></use></svg> </button>',
    
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.tab__links').on('click', function(e){
    e.preventDefault();
    $('.tab__links').removeClass('tab__links--active');
    $(this).addClass('tab__links--active');

    $('.tab__block').removeClass('tab__block--active');
    $($(this).attr('href')).addClass('tab__block--active');
  });

  $('.popup__list').slick({
    waitForAnimate: false,
    dots: true,
    prevArrow: '<button type="button" class="popup__arrow popup__arrow-prev"> <svg class="popup__svg"><use xlink:href="images/sprite.svg#icon-order-left"></use></svg> </button>',
    nextArrow: '<button type="button" class="popup__arrow popup__arrow-next"> <svg class="popup__svg"><use xlink:href="images/sprite.svg#icon-order-right"></use></svg> </button>',
  });

})

const counters = document.querySelectorAll('[data-counter]');

if(counters) {
  counters.forEach(counter => {
    counter.addEventListener('click', e => {
      const target = e.target;

      if(target.closest('.counter__button')) {
        let value = parseInt(target.closest('.counter').querySelector('input').value);

        if (target.classList.contains('counter__button-plus')) {
          value++;
        } else{
          --value;
        }

        if (value <= 0) {
          value = 0;
          target.closest('.counter').querySelector('.counter__button-minus').classList.add('disabled')
        } else {
          target.closest('.counter').querySelector('.counter__button-minus').classList.remove('disabled')
        }

        target.closest('.counter').querySelector('input').value = value;
      }
    })
  })
}

var mixer = mixitup('.popular__items');	