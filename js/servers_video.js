$(function(){
    $(".servers_wrap_title ul li").click(function(){
     $(this).addClass("active").siblings().removeClass("active")
    })
    var data=parseInt(window.location.search.substring(1))
    if(data==7){
        $(".servers_wrap_title ul li").eq(0).addClass("active").siblings().removeClass("active");
    }else{
        $(".servers_wrap_title ul li").eq(data+1).addClass("active").siblings().removeClass("active");  
    }
})