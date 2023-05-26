// ハンバーガーメニュー
$(function(){
    $('#hamburger-work').click(function(){
        $(this).toggleClass('active');
        $('#mask').toggleClass('active');
        $('#nav').toggleClass('active');
    });
 
 
    $('#mask').click(function(){
        $(this).removeClass('active');
        $('#hamburger-work').removeClass('active');
        $('#nav').removeClass('active');
    });
 
 
    $('.nav-item a').click(function(){
        $('#hamburger-work').removeClass('active');
        $('#nav').removeClass('active');
        $('#mask').removeClass('active');
    });
 
 
    var hamburger = $('#hamburger-work');
    hamburger.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 400){
            hamburger.fadeIn();
        } else {
            hamburger.fadeOut();
        }
    });
 });
 
 
 // トップへスクロール
 $(function(){
    var topBtn = $('#top');
    topBtn.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
 
 
    topBtn.click(function(){
        $('body,html').animate({'scrollTop':0},500);
        return false;
    });
 });
 
 
 // スムーススクロール
 $(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var type = 'swing';
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({'scrollTop':position},speed,type);
        return false;
    });
 });
 
 
 // fadein
 $(function(){
    $('.fade-in').on('inview',function(){
        $(this).addClass('show');
    });
 });
 
 