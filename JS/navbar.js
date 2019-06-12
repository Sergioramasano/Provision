$(() => {
    const animTime = 400;
    const $left_menu = $(".left-menu");
    const $layer = $(".layer");

    const show = () => {
        $left_menu.attr('aria-hidden', false);
        $layer.attr('aria-hidden', false);
        $left_menu.css({left: '-400%'}).animate({left: 0}, animTime);
        layerAnimate(true, animTime)
        //$layer.css({opacity: 1}).fadeIn(animTime);
    }

    const hide = () => {
        $left_menu.attr('aria-hidden', true);
        $layer.attr('aria-hidden', true);
        $left_menu.animate({left: '-100%'}, animTime);
        layerAnimate(false, animTime);
        //$layer.fadeOut(animTime);
    }

    $(".navbar-toggler").click(show);
    $(".closer").click(hide);
    $layer.click(hide);
});

const layerAnimate = (dir = true, duration = 5000) => {
    const layer = document.getElementsByClassName('layer')[0];

    const action = k => {
        layer.style.backgroundColor = `rgba(0,0,0,${k * 0.8})`;

        layer.style.display = !k ? 'none' : 'block'
    }

    const savetime = Date.now();
    const timer = setInterval(() => {
        const delta = Date.now() - savetime;
        if (dir)
            action(delta / duration);
        else
            action(1 - (delta / duration));
        if (delta >= duration) {
            clearInterval(timer);
            action(~~dir);
        }
    }, 10);
}
