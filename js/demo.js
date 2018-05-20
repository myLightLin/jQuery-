$(document).ready(function (){

    $('#izl_rmenu').each(function () {
        $(this).find(".btn-sao").mouseenter(function () {
           $(this).find(".sao-before").css('display','none');
           $(this).find(".sao-hover").css({
               'display':'table',
               'position':'relative',
               'left':'26px'
           });
           $(this).find('p').css({
               'position':'relative',
               'top':'4px',
               'color':'#ff6700'
           });

           $(this).find('.pic').fadeIn();
        });
        $(this).find(".btn-sao").mouseleave(function () {
            $(this).find(".sao-before").css('display','');
            $(this).find(".sao-hover").css({
                'display':'none'
                // 'position':'relative',
                // 'left':'26px'
            });
            $(this).find('p').css({
                'position':'',
                'top':'',
                'color':''
            });

            $(this).find('.pic').fadeOut();
        });
        $(this).find(".btn-user").mouseenter(function () {
            $(this).find(".user-before").css('display','none');
            $(this).find(".user-hover").css({
                'display':'table',
                'position':'relative',
                'left':'26px'
            });
            $(this).find('p').css({
                'position':'relative',
                'top':'4px',
                'color':'#ff6700'
            });
        });
        $(this).find(".btn-user").mouseleave(function () {
            $(this).find(".user-before").css('display','');
            $(this).find(".user-hover").css({
                'display':'none'
                // 'position':'relative',
                // 'left':'26px'
            });
            $(this).find('p').css({
                'position':'',
                'top':'',
                'color':''
            });
        });
        $(this).find(".btn-kefu").mouseenter(function () {
            $(this).find(".kefu-before").css('display','none');
            $(this).find(".kefu-hover").css({
                'display':'table',
                'position':'relative',
                'left':'26px'
            });
            $(this).find('p').css({
                'position':'relative',
                'top':'4px',
                'color':'#ff6700'
            });
        });
        $(this).find(".btn-kefu").mouseleave(function () {
            $(this).find(".kefu-before").css('display','');
            $(this).find(".kefu-hover").css({
                'display':'none'
                // 'position':'relative',
                // 'left':'26px'
            });
            $(this).find('p').css({
                'position':'',
                'top':'',
                'color':''
            });
        });
        $(this).find(".btn-shop").mouseenter(function () {
            $(this).find(".shop-before").css('display','none');
            $(this).find(".shop-hover").css({
                'display':'table',
                'position':'relative',
                'left':'26px'
            });
            $(this).find('p').css({
                'position':'relative',
                'top':'4px',
                'color':'#ff6700'
            });
        });
        $(this).find(".btn-shop").mouseleave(function () {
            $(this).find(".shop-before").css('display','');
            $(this).find(".shop-hover").css({
                'display':'none'
                // 'position':'relative',
                // 'left':'26px'
            });
            $(this).find('p').css({
                'position':'',
                'top':'',
                'color':''
            });
        });
        $(this).find(".btn-top").mouseenter(function () {
            $(this).find(".top-before").css('display','none');
            $(this).find(".top-hover").css({
                'display':'table',
                'position':'relative',
                'left':'26px'
            });
            $(this).find('p').css({
                'position':'relative',
                'top':'4px',
                'color':'#ff6700'
            });
        });
        $(this).find(".btn-top").mouseleave(function () {
            $(this).find(".top-before").css('display','');
            $(this).find(".top-hover").css({
                'display':'none'
                // 'position':'relative',
                // 'left':'26px'
            });
            $(this).find('p').css({
                'position':'',
                'top':'',
                'color':''
            });
        });
        $(this).find(".btn-top").click(function(){
            $("html, body").animate({
                "scroll-top":0
            },"fast");
        });

    });
    var lastRmenuStatus=false;
    $(window).scroll(function(){
        var _top=$(window).scrollTop();
        if(_top>200){
            $("#izl_rmenu").data("expanded",true);
        }else{
            $("#izl_rmenu").data("expanded",false);
        }
        if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
            lastRmenuStatus=$("#izl_rmenu").data("expanded");
            if(lastRmenuStatus){
                $("#izl_rmenu .btn-top").slideDown("fast");
            }else{
                $("#izl_rmenu .btn-top").slideUp("fast");
            }
        }
    });
});