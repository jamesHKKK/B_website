$(function () {
    // 固定定位
    window.onscroll = function () {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrolltop >= 400 && scrolltop < $(document).height() - 1120) {
            $(".fixed").show()
        } else {
            $(".fixed").hide()
        }
    }
   
    // 轮播图高度自动变化
    var widthsct = $(window).width()
    function onsize() {
        widthsct = $(window).width()
        if (widthsct >= 678) {
            $(".slidetoggle").remove()
        }
    }
    onsize()
    window.onresize = function () {
        onsize()
    }

    // header
    var data = window.location.search.substring(1)
    if (data == "") {
    } else {
        $(".first_page").removeClass("active")
        if (data != "9") {
            if (data == "e") {
                $(".navbar-nav .geteq").eq(5).addClass("active")
            } else if ((data == "c")) {
                $(".navbar-nav .geteq").eq(4).addClass("active")
            } else if (data == "b") {
                $(".navbar-nav .geteq").eq(3).addClass("active")
            } else if (data == "a") {
                $(".navbar-nav .geteq").eq(2).addClass("active")
            } else if (data == "d") {
                $(".navbar-nav .geteq").eq(1).addClass("active")
            }
        }
    }
    $(".navbar-nav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
    // 首页
    $(".first_page").click(function () {
        window.open("./index.html")
    })
    $(".navbar-nav li").hover(function () {
        if ($(this).index() >= 1) {
            $(".list-t").eq($(this).index() - 1).removeClass("list_dis")
        }
    }, function () {
        if ($(this).index() >= 1) {
            $(".list-t").eq($(this).index() - 1).addClass("list_dis")
        }
        $(".list-t").eq($(this).index() - 1).mouseover(function () {
            $(this).removeClass("list_dis")
        })
        $(".list-t").eq($(this).index() - 1).mouseout(function () {
            $(this).addClass("list_dis")
        })
    })
    $(".list_content .list_content_a").hover(function () {
        var num = $(this).index()
        $(".list1 .list_dis_ul li").eq(num).children(".list_dis_p").addClass("list_dis_active").parent().siblings().children(".list_dis_p").removeClass("list_dis_active")
    }, function () {
    })
    // 手机端
    $(".navbar-nav li").click(function () {
        $(this).next(".slidetoggle").slideToggle(100).siblings(".slidetoggle").slideUp()
    })
    $(".slidetoggle li").click(function () {
        $(this).next(".slidetoggle_two").slideToggle(100).siblings(".slidetoggle_two").slideUp()
    })
})