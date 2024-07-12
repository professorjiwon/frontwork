$(() => {
    // 전체 내려오기
    /*
    $('.nav').mouseover(function() {
        $('.submenu').stop().slideDown();
    });
    $('.nav').mouseout(function() {
        $('.submenu').stop().slideUp();
    })
    */

    // 각각 내려오기
    $('.nav>li').mouseover(function() {
        $(this).children('.submenu').stop().slideDown();
    })
    $('.nav>li').mouseout(function() {
        $(this).children('.submenu').stop().slideUp();
    })

    // 이미지 slide 적용
    setInterval(slide, 2000);
    let x = $('#imgslide>div');
    function slide() {
        if(x.position().left == -2000) {
            x.animate({left:'-=1000px'}, function() {
                x.css('left',0);
            });
        } else {
            x.animate({left:'-=1000px'});
        }
    }
})