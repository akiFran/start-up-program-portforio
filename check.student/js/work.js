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
 });
 
 
 // read more
 $(function(){
    $('#ver2-box').hover(
        function(){
            $('#ver2-box-img').addClass('active');
            $('#ver2-box-p').addClass('active');
        },
        function(){
            $('#ver2-box-img').removeClass('active');
            $('#ver2-box-p').removeClass('active');
        }
    );
 
 
    $('#ver1-box').hover(
        function(){
            $('#ver1-box-img').addClass('active');
            $('#ver1-box-p').addClass('active');
        },
        function(){
            $('#ver1-box-img').removeClass('active');
            $('#ver1-box-p').removeClass('active');
        }
    );
 
 
    $('#bike-box').hover(
        function(){
            $('#bike-box-img').addClass('active');
            $('#bike-box-p').addClass('active');
        },
        function(){
            $('#bike-box-img').removeClass('active');
            $('#bike-box-p').removeClass('active');
        }
    );
 
 
    $('#photo1-box').hover(
        function(){
            $('#photo1-box-img').addClass('active');
            $('#photo1-box-p').addClass('active');
        },
        function(){
            $('#photo1-box-img').removeClass('active');
            $('#photo1-box-p').removeClass('active');
        }
    );
 
 
    $('#photo2-box').hover(
        function(){
            $('#photo2-box-img').addClass('active');
            $('#photo2-box-p').addClass('active');
        },
        function(){
            $('#photo2-box-img').removeClass('active');
            $('#photo2-box-p').removeClass('active');
        }
    );
 
 
    $('#recipe1-box').hover(
        function(){
            $('#recipe1-box-img').addClass('active');
            $('#recipe1-box-p').addClass('active');
        },
        function(){
            $('#recipe1-box-img').removeClass('active');
            $('#recipe1-box-p').removeClass('active');
        }
    );
 
 
    $('#recipe2-box').hover(
        function(){
            $('#recipe2-box-img').addClass('active');
            $('#recipe2-box-p').addClass('active');
        },
        function(){
            $('#recipe2-box-img').removeClass('active');
            $('#recipe2-box-p').removeClass('active');
        }
    );
 
 
    $('#juwerly-box').hover(
        function(){
            $('#juwerly-box-img').addClass('active');
            $('#juwerly-box-p').addClass('active');
        },
        function(){
            $('#juwerly-box-img').removeClass('active');
            $('#juwerly-box-p').removeClass('active');
        }
    );
 
 
    $('#travel-box').hover(
        function(){
            $('#travel-box-img').addClass('active');
            $('#travel-box-p').addClass('active');
        },
        function(){
            $('#travel-box-img').removeClass('active');
            $('#travel-box-p').removeClass('active');
        }
    );
 
 
    $('#coffee-box').hover(
        function(){
            $('#coffee-box-img').addClass('active');
            $('#coffee-box-p').addClass('active');
        },
        function(){
            $('#coffee-box-img').removeClass('active');
            $('#coffee-box-p').removeClass('active');
        }
    );
 
 
    $('#furniture-box').hover(
        function(){
            $('#furniture-box-img').addClass('active');
            $('#furniture-box-p').addClass('active');
        },
        function(){
            $('#furniture-box-img').removeClass('active');
            $('#furniture-box-p').removeClass('active');
        }
    );
 
 
    $('#bbb-box').hover(
        function(){
            $('#bbb-box-img').addClass('active');
            $('#bbb-box-p').addClass('active');
        },
        function(){
            $('#bbb-box-img').removeClass('active');
            $('#bbb-box-p').removeClass('active');
        }
    );
 
 
    $('#house-box').hover(
        function(){
            $('#house-box-img').addClass('active');
            $('#house-box-p').addClass('active');
        },
        function(){
            $('#house-box-img').removeClass('active');
            $('#house-box-p').removeClass('active');
        }
    );
 
 
    $('#sneaker-box').hover(
        function(){
            $('#sneaker-box-img').addClass('active');
            $('#sneaker-box-p').addClass('active');
        },
        function(){
            $('#sneaker-box-img').removeClass('active');
            $('#sneaker-box-p').removeClass('active');
        }
    );
 
 
    $('#flower-box').hover(
        function(){
            $('#flower-box-img').addClass('active');
            $('#flower-box-p').addClass('active');
        },
        function(){
            $('#flower-box-img').removeClass('active');
            $('#flower-box-p').removeClass('active');
        }
    );
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
 
 