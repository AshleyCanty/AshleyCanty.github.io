$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
      if(winTop >= 10) {
        $('.logo').addClass("active");
        $('.inner-logo').addClass("active");
 $('.menu').addClass("active");
      } else {
        $('.menu').removeClass("active");
      }
  })
})

console.log('ddjd');
console.log('Welcome To The Rocky Stack')
