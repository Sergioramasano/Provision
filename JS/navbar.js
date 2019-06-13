$(() => {
    const animTime = 400;
    const $left_menu = $(".left-menu");
    const $layer = $(".layer");

    const show = () => {
        $left_menu.attr('aria-hidden', false);
        $layer.attr('aria-hidden', false);
        $left_menu.css({left: '-400%'}).animate({left: 0}, {queue: false, duration: animTime});
        $layer.css({display: 'block'}).animate({backgroundColor: 'rgba(0,0,0,0.8)'}, {queue: false, duration: animTime});
        $layer.css({opacity: 1}).fadeIn(animTime);
    }

    const hide = () => {
        $left_menu.attr('aria-hidden', true);
        $layer.attr('aria-hidden', true);
        $left_menu.animate({left: '-100%'}, {queue: false, duration: animTime});
        $layer.animate({
            backgroundColor: 'rgba(0,0,0,0)'
        }, {queue: false, duration: animTime});
        $layer.fadeOut(animTime);
    }

    $(".navbar-toggler").click(show);
    $(".closer").click(hide);
    $layer.click(hide);
});
