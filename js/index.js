$(function(){
     // 轮播图
     var swiper1 = new Swiper('.swiper1', {
        pagination: {
            el: '.swiper1-pagination',
            clickable :true,
        },
        autoplay: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        loop:true,
        speed:1500,
    });
    for(i=0;i<swiper1.pagination.bullets.length;i++){
        swiper1.pagination.bullets[i].onmouseover=function(){
          this.click();
        };
    } 
      // 轮播图高度自动变化
      var widthsct = $(window).width()
      function onsize() {
          widthsct = $(window).width()
          var caurHeight = widthsct / 2.56
          $(".carouse").css("height", caurHeight)
            if(widthsct <= 767){
                var schoolHeight=widthsct*0.4
            }else if(widthsct>767 && widthsct<= 1200){
                var schoolHeight=widthsct*0.4
            }else{
                var schoolHeight=widthsct*0.35
                  console.log(schoolHeight)
            }
          $(".school").css("height", schoolHeight)
         
      }
      onsize()
      window.onresize = function () {
          onsize()
      }
    // 生态圈
   $(".ecorphere_line_wrap li .ecorphere_content_bac").click(function(){ 
    $(this).addClass("eco_changge").parent().siblings().children(".ecorphere_content_bac").removeClass("eco_changge")
   })
   
  
})