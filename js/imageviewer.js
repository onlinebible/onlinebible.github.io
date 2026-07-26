$(function () {
    $(".wp-colorbox-image").colorbox({
        maxWidth: "95%",
        maxHeight: "95%",
        photo: true
    });
});

$(".wp-colorbox-iframe").colorbox({
    iframe: true,

    width: "90%",
    height: "90%",

    maxWidth: "90%",
    maxHeight: "90%",

    reposition: true,
    fixed: true,

    scrolling: true
});