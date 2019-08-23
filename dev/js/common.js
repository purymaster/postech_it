$(function() {

    var is_mobile = false, //모바일 판별 변수
        scrollbar_width = window.outerWidth - $(window).width(); // 스크롤바 너비

    /******************** 모바일 판별 및 네비게이션 초기화 ********************/

    $(window).on('load resize', function() {
        ($(window).width() + scrollbar_width) > 1024 ?
            (
                is_mobile = false,
                $('header .menu_wrap').removeClass('on'),
                $('nav .menu > li').removeClass('on').find('.sub-menu').hide()
            ) : (
                is_mobile = true
            )
    });

    /******************** 하위브라우저 경고 ********************/

    $('.ie9').find('button').on('click', function() {
        $('.ie9').fadeOut();
    });

    /******************** 헤더 검색창 제어 ********************/

    $('header .search button').on('click', function() {
        $(this).hasClass('on') ?
            $(this).siblings('input[type="text"]').val() === "" ?
            $(this).text('검색창 열기').removeClass('on') :
            // [D] 검색 결과 페이지로 이동
            location.href = "https://naver.com" :
            $(this).addClass('on').text('검색창 닫기');
    });

    /******************** 네비게이션 제어 ********************/

    /* 모바일 메뉴 열기 */
    $('header .open_menu').on('click', function() {
        $('header .menu_wrap').addClass('on');
    });

    /* 모바일 메뉴 펼치기 */
    $('nav .menu > li > a').on('click', (function() {
        if (is_mobile) {
            $(this).parent().hasClass('on') ?
                $('nav .menu > li').removeClass('on').find('.sub-menu').stop().slideUp() :
                (
                    $('nav .menu > li').removeClass('on').find('.sub-menu').stop().slideUp(),
                    $(this).parent().addClass('on').find('.sub-menu').stop().slideDown()
                )
            return false;
        }
    }));

    /* 모바일 메뉴 닫기 */
    $('header .close_menu').on('click', function() {
        $('header .menu_wrap').removeClass('on');
        $('nav .menu > li').removeClass('on').find('.sub-menu').slideUp();
    });

    /******************** 슬라이드 제어 ********************/

    /* 메인페이지 슬라이드 */
    $('[slide].main').slick({

    });

});