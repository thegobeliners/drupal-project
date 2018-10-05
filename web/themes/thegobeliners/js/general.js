(function ($, window, document) {
    $(document).ready(function () {
        // Menu Mobile
        $('#open-menu').click(function () {
            $(this).toggleClass('active');
            $("body").toggleClass('active');
            $("header nav").toggle();
        });

        // Infos Messages
        $(document).on('click', '#close_infos_message, #infos_message', function () {
            $('#infos_message').fadeOut();
        });

        // Scroll To Top
        $('#scrollToTop').click(function (e) {
            var offset = $('body').offset().top;

            $('html, body').animate({scrollTop: offset}, 'slow');
        });

        // Scroll To Ancre
        $('a.ancre').click(function (e) {
            e.preventDefault();

            var id = $(this).attr('href');
            var offset = $(id).offset().top;

            $('html, body').animate({scrollTop: offset}, 'slow');
        });
    });

    $(window).on('load', function () {
        // Preloader
        $('#status').fadeOut();
        $('#preloader').delay(150).fadeOut('slow');

        setTimeout(function () {
            $('#preloader').remove();
        }, 1000);
    });

    
    // // Link with Preloader
    // $('a').click(function (e) {
    //     e.preventDefault();

    //     showPreloader($(this).attr('href'));
    // });

    // // Form with Preloader
    // $("form [type='submit']").click(function (event) {
    //     event.preventDefault();

    //     showPreloader($(this).parent('form'));
    // });
    

    // $(window).on('load', function () {
    //     hidePreloader();
    // });

    // function hidePreloader() {
    //     TweenMax.to($('#preloader #status'), 1, {
    //         opacity: '0',
    //         ease: Power4.easeInOut,
    //     });
    //
    //     TweenMax.to($('#preloader'), 1, {
    //         left: '100%',
    //         delay: 0.4,
    //         ease: Power4.easeInOut
    //     });
    // }
    //
    // function showPreloader(action) {
    //     $("#preloader").css('left', '-100%');
    //
    //     TweenMax.to($('#preloader'), 1, {
    //         left: '0',
    //         ease: Power4.easeInOut
    //     });
    //
    //     TweenMax.to($('#preloader #status'), 1, {
    //         opacity: '1',
    //         delay: 0.4,
    //         ease: Power4.easeInOut,
    //         onComplete: function () {
    //             switch (typeof action) {
    //                 case 'string':
    //                     window.location = action;
    //                     break;
    //
    //                 case 'object':
    //                     if (action.is('form')) {
    //                         action.submit();
    //                     }
    //                     break;
    //             }
    //
    //         }
    //     });
    // }
}(window.jQuery, window, document));