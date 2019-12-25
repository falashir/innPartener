jQuery(document).ready(function($) {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  $("#intro-carousel").owlCarousel({
    autoplay: false,
    dots: true,
    loop: true,
    animateOut: "fadeOut",
    items: 1
  });

  new WOW().init();

  $(".nav-menu").superfish({
    animation: {
      opacity: "show"
    },
    speed: 400
  });

  $(".nav-menu a, .scrollto").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this)
            .closest("li")
            .addClass("menu-active");
        }
        return false;
      }
    }
  });

  $(".portfolio-popup").magnificPopup({
    type: "image",
    removalDelay: 300,
    mainClass: "mfp-fade",
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function(openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      }
    }
  });

  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  $(".clients-carousel").owlCarousel({
    autoplay: 2500,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 3
      }
    }
  });

    /* AR link possion*/
    if ($(window).width() < 992) {
      $("#nav-2-en").addClass("not-vis");
      $("#ar-page-in").removeClass("not-vis");
    } else {
      $("#nav-2-en").removeClass("not-vis");
      $("#ar-page-in").addClass("not-vis");
    }


});
