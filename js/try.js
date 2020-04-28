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
    for (i = 0; i < swiper1.pagination.bullets.length; i++) {
        swiper1.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }
    // 轮播图高度自动变化
    function onsize() {
        var widthsct = $(window).width()
        var caurHeight = widthsct / 2.56
        $(".carouse").css("height", caurHeight)
    }
    onsize()
    window.onresize = function () {
        onsize()
    }

})