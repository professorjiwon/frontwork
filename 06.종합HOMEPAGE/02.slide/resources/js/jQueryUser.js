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

    // 이미지 fadeIn_Out 적용
    setInterval(slide, 2000);
    let x = $('#imgslide>img');
    let y = 3;

    function slide() {
        y--;
        if(y == 0) {
            x.fadeIn();
            y=3;
        } else {
            x.eq(y).fadeOut();
        }
    }

    /*
    let x = $('#imgslide>img');
    let y = 3;
    setInterval(function() {
        y--;
        if(y == 0) {
            x.fadeIn();
            y=3;
        } else {
            x.eq(y).fadeOut();
        }
    }, 2000);
    */
})