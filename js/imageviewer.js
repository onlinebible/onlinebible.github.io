$(function () {
    $(".wp-colorbox-image").colorbox({
        maxWidth: "95%",
        maxHeight: "95%",
        photo: true
    });
});

$(".wp-colorbox-iframe").colorbox({
    iframe: true,

    width: "95%",
    height: "95%",

    maxWidth: "95%",
    maxHeight: "95%",

    reposition: true,
    fixed: true,

    scrolling: true
});