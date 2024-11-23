// スライダー（キービジュアル）
$(function() {
  $(".skills__list").slick({
    autoplay: true,
    autoplaySpeed: 3000, //自動再生時に次が動くまでの時間
    speed: 500, //スライドが流れる速度（画像の端から端まで）
    slidesToShow: 5, //表示するスライドの数
    arrows: true,
    infinite: true,
    prevArrow: "<button class='slick-prev slick-arrow'></button>",
    nextArrow: "<button class='slick-next slick-arrow'></button>",
    centerMode: true,
    centerPadding: '1%',
    initialSlide: 2, // スライドの開始位置を変更
  });
});

// スクロールでフェードイン（身につくスキル）
$(function() {
  $(".fade-up").on("inview", function() {
    $(this).addClass("is-inview");
  });
}); 

// アコーディオンメニュー（よくある質問）
$(function() {
  $(".faq__item").on("click", function() {
    $(this).toggleClass("open");
    $(this).find(".faq__answer").slideToggle(); //クリックされたliタグの中のddタグを操作
  });
});