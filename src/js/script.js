$(".header__burger").on("click", function () {
  $(".header__burger").toggleClass("active");
  $(".sidebar").toggleClass("active");
});
$(".sidebar__nav a").on("click", function () {
  $(".sidebar").removeClass("active");
  $(".header__burger").removeClass("active");
});
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
$(".profile__form_item_data input").on("click", function () {
  $(".profile__form_item_data span").css("text-decoration", "line-through");
});
