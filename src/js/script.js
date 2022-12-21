let slider = $(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

$('.header__burger').on('click', function(){
  $('.header__burger').toggleClass('active');
  $('.sidebar').toggleClass('active');
})

$(".item").on("click", function () {
  $(".item").removeClass("active");
  $(this).addClass("active");
  let tabs = $(this).data("tabs");
  $(".content").addClass("d-none");
  $(".content[data-tabs = " + tabs + "]").removeClass("d-none");
  $(".content[data-tabs = " + tabs + "]").addClass("d-block");
});
$(".sidebar__nav a").on("click", function () {
  $(".sidebar__nav a").removeClass("active");
  $(this).addClass("active");
  let tabs = $(this).data("tabs");
  $(".content-secondary").addClass("d-none");
  $(".content-secondary[data-tabs = " + tabs + "]").removeClass("d-none");
  $(".content-secondary[data-tabs = " + tabs + "]").addClass("d-block");
});