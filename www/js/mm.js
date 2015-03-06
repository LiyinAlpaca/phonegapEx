/**
 * Created by haojianhua on 2015/3/2.
 */

$(function(){

    //tab
    $(".ui-mm-qz-title>li").on('tap', function(){
        var i = $(this).index();
        $(this).addClass("cur").siblings("li").removeClass("cur");
        $(".ui-mm-qz-dian>li").eq(i).addClass("cur").siblings("li").removeClass("cur");
        $(".ui-mm-qz-c>div").eq(i).addClass("cur").siblings("div").removeClass("cur");
    });


    $(".ui-mm-qz-c").on("swipeleft", function(){

        console.log("left");

    });




});
