/* ===================================================================
 * Dazzle - Main JS
 *
 * ------------------------------------------------------------------- */

(function () {
    /* Opening modal window function */
  
    function openModal() {
      /* Get trigger element */
      var modalTrigger = document.getElementsByClassName("jsModalTrigger");
  
      /* Set onclick event handler for all trigger elements */
      for (var i = 0; i < modalTrigger.length; i++) {
        modalTrigger[i].onclick = function () {
          var target = this.getAttribute("href").substr(1);
          var modalWindow = document.getElementById(target);
  
          modalWindow.classList
            ? modalWindow.classList.add("open")
            : (modalWindow.className += " " + "open");
        };
      }
    }
  
    function closeModal() {
      /* Get close button */
      var closeButton = document.getElementsByClassName("jsModalClose");
      var closeOverlay = document.getElementsByClassName("jsOverlay");
  
      /* Set onclick event handler for close buttons */
      for (var i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function () {
          var modalWindow = this.parentNode.parentNode;
  
          modalWindow.classList
            ? modalWindow.classList.remove("open")
            : (modalWindow.className = modalWindow.className.replace(
                new RegExp(
                  "(^|\\b)" + "open".split(" ").join("|") + "(\\b|$)",
                  "gi"
                ),
                " "
              ));
        };
      }
  
      /* Set onclick event handler for modal overlay */
      for (var i = 0; i < closeOverlay.length; i++) {
        closeOverlay[i].onclick = function () {
          var modalWindow = this.parentNode;
  
          modalWindow.classList
            ? modalWindow.classList.remove("open")
            : (modalWindow.className = modalWindow.className.replace(
                new RegExp(
                  "(^|\\b)" + "open".split(" ").join("|") + "(\\b|$)",
                  "gi"
                ),
                " "
              ));
        };
      }
    }
  
    /* Handling domready event IE9+ */
    function ready(fn) {
      if (document.readyState != "loading") {
        fn();
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    }
  
    /* Triggering modal window function after dom ready */
    ready(openModal);
    ready(closeModal);
  })();
  
  (function ($) {
    "use strict";
  
    var cfg = {
        scrollDuration: 1200, // smoothscroll duration
      },
      $WIN = $(window);
  
    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute("data-useragent", navigator.userAgent);
  
    /* Preloader
     * -------------------------------------------------- */
    var ssPreloader = function () {
      $WIN.on("load", function () {
        // force page scroll position to top at page refresh
        $("html, body").animate({ scrollTop: 0 }, "normal");
  
        // will fade out the whole preloader DIV that covers the website.
        $("#preloader").delay(500).fadeOut("slow");
      });
    };
  
    /* Mobile Menu
     * ---------------------------------------------------- */
    var ssMobileMenu = function () {
      var toggleButton = $(".header-menu-toggle"),
        nav = $("#header-nav-wrap");
  
      toggleButton.on("click", function (event) {
        event.preventDefault();
  
        toggleButton.toggleClass("is-clicked");
        nav.slideToggle();
      });
  
      if (toggleButton.is(":visible")) nav.addClass("mobile");
  
      $(window).resize(function () {
        if (toggleButton.is(":visible")) nav.addClass("mobile");
        else nav.removeClass("mobile");
      });
  
      $("#header-nav-wrap")
        .find("a")
        .on("click", function () {
          if (nav.hasClass("mobile")) {
            toggleButton.toggleClass("is-clicked");
            nav.slideToggle();
          }
        });
    };
  
    /* FitVids
     * ---------------------------------------------------- */
    var ssFitVids = function () {
      $(".fluid-video-wrapper").fitVids();
    };
  
    /* Owl Carousel
     * ------------------------------------------------------ */
    var ssOwlCarousel = function () {
      $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        autoHeight: true,
        items: 1,
      });
    };
  
    /* Highlight the current section in the navigation bar
     * ------------------------------------------------------ */
    var ssWaypoints = function () {
      var sections = $("section"),
        navigation_links = $(".header-main-nav li a");
  
      sections.waypoint({
        handler: function (direction) {
          var active_section;
  
          active_section = $("section#" + this.element.id);
  
          if (direction === "up") active_section = active_section.prev();
  
          var active_link = $(
            '.header-main-nav li a[href="#' + active_section.attr("id") + '"]'
          );
  
          navigation_links.parent().removeClass("current");
          active_link.parent().addClass("current");
        },
  
        offset: "25%",
      });
    };
  
    /* Smooth Scrolling
     * ------------------------------------------------------ */
    var ssSmoothScroll = function () {
      $(".smoothscroll").on("click", function (e) {
        var target = this.hash,
          $target = $(target);
  
        e.preventDefault();
        e.stopPropagation();
  
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top,
            },
            cfg.scrollDuration,
            "swing",
            function () {
              window.location.hash = target;
            }
          );
      });
    };
  
    /* Placeholder Plugin Settings
     * ------------------------------------------------------ */
    var ssPlaceholder = function () {
      $("input, textarea, select").placeholder();
    };
  
    /* Alert Boxes
      ------------------------------------------------------- */
    var ssAlertBoxes = function () {
      $(".alert-box").on("click", ".close", function () {
        $(this).parent().fadeOut(500);
      });
    };
  
    /* Animate On Scroll
     * ------------------------------------------------------ */
    var ssAOS = function () {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
        delay: 300,
        once: true,
        disable: "mobile",
      });
    };
  
    /* AjaxChimp
     * ------------------------------------------------------ */
    var ssAjaxChimp = function () {
      $("#mc-form").ajaxChimp({
        language: "es",
        url: cfg.mailChimpURL,
      });
  
      // Mailchimp translation
      //
      //  Defaults:
      //	 'submit': 'Submitting...',
      //  0: 'We have sent you a confirmation email',
      //  1: 'Please enter a value',
      //  2: 'An email address must contain a single @',
      //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
      //  4: 'The username portion of the email address is invalid (the portion before the @: )',
      //  5: 'This email address looks fake or invalid. Please enter a real email address'
  
      $.ajaxChimp.translations.es = {
        submit: "Submitting...",
        0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
        1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
        2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        5: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      };
    };
  
    /* Back to Top
     * ------------------------------------------------------ */
    var ssBackToTop = function () {
      var pxShow = 500, // height on which the button will show
        fadeInTime = 400, // how slow/fast you want the button to show
        fadeOutTime = 400, // how slow/fast you want the button to hide
        scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
        goTopButton = $("#go-top");
  
      // Show or hide the sticky footer button
      $(window).on("scroll", function () {
        if ($(window).scrollTop() >= pxShow) {
          goTopButton.fadeIn(fadeInTime);
        } else {
          goTopButton.fadeOut(fadeOutTime);
        }
      });
    };
  
    function validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  
    $("#footer-waitlist-button").on("click", function (e) {
      document.getElementById("modal-waitlist-button").disabled = true;
      e.preventDefault();
      if (validateEmail($("#footer-email-waitlist").val())) {
        fetch("https://api.klutchh.in/v1/email/waitlist/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: $("#footer-email-waitlist").val(),
          }),
        }).then((res) => {
          res.json().then((data) => {
            data.status === "exists"
              ? alert("You're already a part of our waitlist!")
              : alert(
                  "Thank you for signing up! We've sent you a confirmation email."
                );
          });
        });
        console.log($("#footer-email-waitlist").val());
      } else {
        alert("Invalid Email ID!");
      }
    });
  
    $("#modal-waitlist-button").on("click", function (e) {
      e.preventDefault();
      if (validateEmail($("#modal-email-waitlist").val())) {
        fetch("https://api.klutchh.in/v1/email/waitlist/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: $("#modal-email-waitlist").val(),
          }),
        }).then((res) => {
          res.json().then((data) => {
            data.status === "exists"
              ? alert("You're already a part of our waitlist!")
              : alert(
                  "Thank you for signing up! We've sent you a confirmation email."
                );
          });
        });
        console.log($("#modal-email-waitlist").val());
      } else {
        alert("Invalid Email ID!");
      }
    });
  
    /* Initialize
     * ------------------------------------------------------ */
    (function ssInit() {
      ssPreloader();
      ssMobileMenu();
      ssFitVids();
      ssOwlCarousel();
      ssWaypoints();
      ssSmoothScroll();
      ssPlaceholder();
      ssAlertBoxes();
      ssAOS();
      ssBackToTop();
  
      // to use the mailchimp form, uncomment the
      // function call ssAjaxChimp() below:
      // ssAjaxChimp();
    })();
  })(jQuery);