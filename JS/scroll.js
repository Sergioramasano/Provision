
$(() => {
	$(window).on('scroll', () => {
        const ratio = $(document).scrollTop() / (($(document).height() - ($(window).height())) / 100);
        const $progress = $('#progress');
        $progress.width(ratio + "%");
    });
})


$('.navbar-toggler').on('click', () => {
    $("html").css("overflow","hidden");
});
$('.closer').on('click',  ()=> {
    $("html").css("overflow","auto");
});
$('.layer').on('click',  ()=> {
    $("html").css("overflow","auto");
});
