// collapse filter
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})
$('#myCollapsible').collapse({
    toggle: false
})

function minicartsideright() {
    $('.jscartmini_side_right').on('click', function() {
        $('.sidecart_left_mini').addClass('active');
        $('.bg_sidecart_left_mini').addClass('active');
    });
    $('.closebtn').on('click', function() {
        $('.sidecart_left_mini').removeClass('active');
        $('.bg_sidecart_left_mini').removeClass('active');
    });
    $('.bg_sidecart_left_mini').on('click', function() {
        $('.sidecart_left_mini').removeClass('active');
        $('.bg_sidecart_left_mini').removeClass('active');
    });
}

function cartminimobile() {
    $('.jsiconcartmobile').on('click', function() {
        $('.sidecart_left_mini').addClass('active');
        $('.bg_sidecart_left_mini').addClass('active');
    });
    $('.closebtn').on('click', function() {
        $('.sidecart_left_mini').removeClass('active');
        $('.bg_sidecart_left_mini').removeClass('active');
    });
    $('.bg_sidecart_left_mini').on('click', function() {
        $('.sidecart_left_mini').removeClass('active');
        $('.bg_sidecart_left_mini').removeClass('active');
    });
}

function loginaccountmobile() {
    $('.js-account-mobile').on('click', function() {
        $('.overlay_login').addClass('active');
        $('.overlay_login-content').addClass('active');
    });
    $('.closebtn').on('click', function() {
        $('.overlay_login').removeClass('active');
        $('.overlay_login-content').removeClass('active');
    });
    $('.overlay_login').on('click', function() {
        $('.overlay_login').removeClass('active');
        $('.overlay_login-content').removeClass('active');
    });
}
function jssearchmb() {
    $('.js_searchmb').on('click', function() {
        $('.search-fieldsmoblie').toggleClass('active');        
    });
    

}

function addlogindestop() {
    $('.jsacount_destop').on('click', function() {
        $('.overlay_login').addClass('active');
        $('.overlay_login-content').addClass('active');
    });
    $('.closebtn').on('click', function() {
        $('.overlay_login').removeClass('active');
        $('.overlay_login-content').removeClass('active');
    });
    $('.overlay_login').on('click', function() {
        $('.overlay_login').removeClass('active');
        $('.overlay_login-content').removeClass('active');
    });
}

function changeLayout() {
    $('.row_product6').on('click', function() {
        $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
        $('.js-listproduct').addClass('col-lg-2dot4');
    });
    $('.row_product1').on('click', function() {
        $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
        $('.js-listproduct').addClass('col-lg-4');
    });
    $('.row_product4').on('click', function() {
        $('.js-listproduct').removeClass('col-lg-2dot4 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12');
        $('.js-listproduct').addClass('col-lg-3');
    });
}

function fixedHeader() {
    var $nav = $(".menu_destop");
    $nav.removeClass('menu_destopscroll');

    $(document).scroll(function() {

        $nav.toggleClass('menu_destopscroll', $(this).scrollTop() > $nav.height());
    });
}
function mobilescroll() {
    var $nav = $(".menu_mobile");
    $nav.removeClass('menu_mobilescroll');

    $(document).scroll(function() {

        $nav.toggleClass('menu_mobilescroll', $(this).scrollTop() > $nav.height());
    });
}


function menumobile() {
    $('.js_menumoblie_ok').on('click', function() {
        $('.content_menumobile').addClass('active');
        $('.background_content_menumobile').addClass('active');
    });
    $('.close-menu').on('click', function() {

        $('.content_menumobile').removeClass('active');
        $('.background_content_menumobile').removeClass('active');
    });
    $('.background_content_menumobile').on('click', function() {

        $('.content_menumobile').removeClass('active');
        $('.background_content_menumobile').removeClass('active');
    });

}
function closebtnfilter() {
    $('.jsclick_mnfilter').on('click', function() {
        $('.boxx_filtermenu').addClass('active');
        $('.bg_boxx_filtermenu').addClass('active');
    });
    
    $('.closebtn-filter').on('click', function() {

        $('.boxx_filtermenu').removeClass('active');
        $('.bg_boxx_filtermenu').removeClass('active');
    });
    $('.bg_boxx_filtermenu').on('click', function() {

        $('.boxx_filtermenu').removeClass('active');
        $('.bg_boxx_filtermenu').removeClass('active');
    });

}
function buttonclickmnmb(){
    
     $('.js_mna').on('click', function() {
      $(this).toggleClass('active');
     
    });
}
function jsBackLogin(){
     $('.jsCreate_account').on('click', function() {
        $('.form_register').show();
        $('.formlogin').hide();    
    });
     $('.jsBack_login').on('click', function() {
        $('.formlogin').show();
        $('.form_register').hide();        
    });
     $('.jsacount_destop').on('click', function() {
        $('.formlogin').show();
        $('.form_register').hide();        
    });
}
function jssvg(){
    $('.jssvg').on('click', function() {
        $('svg').addClass('active');
    });
}
changeLayout();
addlogindestop();
loginaccountmobile();
minicartsideright();
fixedHeader();
menumobile();
cartminimobile();
buttonclickmnmb();
closebtnfilter();
mobilescroll();
jssearchmb();
jsBackLogin();