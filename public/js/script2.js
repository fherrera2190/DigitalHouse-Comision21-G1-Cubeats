

// Cards
$(document).ready(function () {
  var zindex = 10;

  $(".card-title").click(function (e) {
    e.preventDefault();
    console.log(e.currentTarget.id);
    var isShowing = false;
    if ($('.card_' + e.currentTarget.id).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $('.card_' + e.currentTarget.id)
          .css({ zIndex: zindex })
          .addClass("show");
      }
      zindex++;
    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $('.card_' + e.currentTarget.id)
        .css({ zIndex: zindex })
        .addClass("show");
      zindex++;
    }
  });
});