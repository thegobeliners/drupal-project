(function ($, window, document) {
    $(window).on('load', function () {
        setTimeout(function () {
            TweenMax.to($('.anime1'), 0.3, {
                top: '0',
                opacity: 1,
                ease: Power1.easeInOut,
            });

            TweenMax.to($('.anime2'), 0.3, {
                top: '0',
                opacity: 1,
                delay: 0.2,
                ease: Power1.easeInOut,
            });

            // Anime contenus Page
            var controller = new ScrollMagic.Controller();

            $('.anime3').each(function () {
                var tween = TweenMax.to($(this), 0.3, {
                    top: '0',
                    opacity: 1,
                    ease: Power1.easeInOut,
                });

                var scene = new ScrollMagic.Scene({
                    triggerElement: this,
                }).setTween(tween).addTo(controller);

                scene.offset(-$(window).height() / 4);
            });

            $('.anime4').each(function () {
                var tween = TweenMax.to($(this), 0.3, {
                    top: '0',
                    opacity: 1,
                    delay: 0.2,
                    ease: Power1.easeInOut,
                });

                var scene = new ScrollMagic.Scene({
                    triggerElement: this,
                }).setTween(tween).addTo(controller);

                scene.offset(-$(window).height() / 4);
            });
        }, 1000);
    });
}(window.jQuery, window, document));