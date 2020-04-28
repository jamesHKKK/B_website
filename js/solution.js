$(function () {
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
    // swiper2
    if($(window).width()<678){
        var swiper2 = new Swiper('.swiper2', {
            slidesPerView: 2,
            spaceBetween: 10,
            grabCursor: true,
            loop: true,
            speed:1000,
            loopFillGroupWithBlank: true,
            navigation: {
              nextEl: '.next2',
              prevEl: '.prev2',
            },
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
          });
    }else{
        var swiper2 = new Swiper('.swiper2', {
            slidesPerView: 4,
            spaceBetween: 30,
            grabCursor: true,
            speed:1000,
            loop: true,
            navigation: {
                nextEl: '.next2',
                prevEl: '.prev2',
            },
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
        });
    }
    // 固定定位
    window.onscroll=function(){
        var scrolltop=document.documentElement.scrollTop || document.body.scrollTop
        if(scrolltop>=400 && scrolltop<$(document).height()-1120){
            $(".fixed").show()
        }else{
            $(".fixed").hide()
        }
    }

    // 解决方案
    $(".solution_all ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })

    onsize()
    window.onresize = function () {
        onsize()
    }
    function onsize() {
        var widthsct = $(window).width()
        var caurHeight = widthsct / 2.56
        $(".carouse").css("height", caurHeight)
    }
})