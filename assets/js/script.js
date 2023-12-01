lastScroll = 0;
$(window).scroll(function(){ 
  curr = $(this).scrollTop();

  if(curr>lastScroll){
      $('header').addClass('hide');
  }else{
      $('header').removeClass('hide');

  }
  lastScroll = curr;
})


$('.header .gnb .gnb-list > li').hover(function(){
  if($(this).find('.sub').length){
    $('.header').addClass('on');
    $(this).find('.sub').addClass('on');
  } 
  $(this).addClass('on');
},function(){
  $('.header').removeClass('on');
  $(this).find('.sub').removeClass('on');
  $(this).removeClass('on');
}
)
$('.header .gnb .sub li:first-child').addClass('on');
$('.header .gnb .sub li').hover(function(){
  $(this).addClass('on').siblings().removeClass('on');
},function(){
  $('.header .gnb .sub li:first-child').addClass('on').siblings().removeClass('on');
})




//메인 비주얼 슬라이드
var swiper1 = new Swiper(".sc-visual .swiper", {
    pagination: {
      el: ".pagination",
    },
  });

  //story섹션 무한롤링배너
  var swiper2 = new Swiper(".sc-story .swiper", {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 6000,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
});

$('.sc-story .swiper').on('mouseover', function(){
  swiper2.autoplay.stop();
});
$('.sc-story .swiper').on('mouseout', function(){
  swiper2.autoplay.start();
});

var swiper3 = new Swiper(".sc-fonts .swiper", {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 7000,
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 'auto',
});

$('.sc-vision .btn-control').click(function(){
  if($(this).hasClass('on')){
    $('.sc-vision video').get(0).currentTime = 0;
    $('.sc-vision video').get(0).play();
  }else{
    $('.sc-vision video').get(0).pause();
  }
  $('.sc-vision .btn-control').toggleClass('on');
})
$('.footer .group-related-site .site-box').click(function(){
  $('.footer .group-related-site .site-list').toggleClass('on');
})
