$(document).ready(function () {
    // Scrolla プラグインの設定
    $(".animate-on-scroll").scrolla({
        mobile: true, // モバイルデバイス対応
        once: false,  // 繰り返しアニメーションを実行
    });

    // スクロールイベントを監視
    $(window).scroll(function() {
        $("h2").each(function() {
            const element = $(this);
            const elementTop = element.offset().top;
            const elementBottom = elementTop + element.outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                // 要素が表示領域内にある場合
                element.stop().animate({ fontSize: "3rem", opacity: 0.5 }, 500);
            } else {
                // 要素が表示領域外の場合
                element.stop().animate({ fontSize: "2rem", opacity: 0.5 }, 500);
            }
        });
    });
});
