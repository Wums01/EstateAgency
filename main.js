 $(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
      center: true,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      items: 3,
      dots: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  });
