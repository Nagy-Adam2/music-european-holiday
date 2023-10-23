window.addEventListener('DOMContentLoaded', event => {


  /*----------------------------------------*\
    #NAVBAR SHRINK FUNCTION
  \*----------------------------------------*/

  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  };




  
  /*----------------------------------------*\
    #SHRINK THE NAVBAR
  \*----------------------------------------*/

  navbarShrink();





  /*----------------------------------------*\
    #SHRINK THE NAVBAR WHEN PAGE IS SCROLLED
  \*----------------------------------------*/

  document.addEventListener('scroll', navbarShrink);





  /*----------------------------------------*\
    #ACTIVE BOOTSTRAP SCROLLSPY ON THE
    MAIN NAV ELEMENT
  \*----------------------------------------*/

  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  };





  /*----------------------------------------*\
    #COLLAPSE RESPONSIVE NAVBAR WHEN TOGGLE
    IS VISIBLE
  \*----------------------------------------*/

  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });





	/*----------------------------------------*\
	  #SETINTERVAL CAROUSEL
	\*----------------------------------------*/

	setInterval(function () {
		$("#carousel ul").animate({ marginleft: "-800px" }, 800, function () {
			$("#carousel ul li:last").after($("#carousel ul li:first"));
			$(this).css("margin-left", "0");
		});
		$(".carousel-indicators li.active").animate({ marginleft: "-800px" }, 800, function () {
			$(".carousel-indicators li:last").after($(".carousel-indicators li:first"));
			$(this).css("margin-left", "0");
		});
		$(".indi-carousel").hide();
	}, 20000);





	/*----------------------------------------*\
	  #CLICK RIGHT CAROUSEL
	\*----------------------------------------*/

	$(".right").click(function () {
		$("#carousel ul").animate({ marginleft: "-800px" }, 800, function () {
			$("#carousel ul li:last").after($("#carousel ul li:first"));
			$(this).css("margin-left", "0");
		});
		$(".carousel-indicators li.active").animate({ marginleft: "-800px" }, 800, function () {
			$(".carousel-indicators li:last").after($(".carousel-indicators li:first"));
			$(this).css("margin-left", "0");
		});
		$(".indi-carousel").hide();
	});





	/*----------------------------------------*\
	  #CLICK LEFT CAROUSEL
	\*----------------------------------------*/

	$(".left").click(function () {
		$("#carousel ul").animate({ marginleft: "-800px" }, 800, function () {
			$("#carousel ul li:first").before($("#carousel ul li:last"));
			$(this).css("margin-left", "0");
		});
		$(".carousel-indicators li.active").animate({ marginleft: "-800px" }, 800, function () {
			$(".carousel-indicators li:first").before($(".carousel-indicators li:last"));
			$(this).css("margin-left", "0");
		});
		$(".indi-carousel").hide();
	});





	/*----------------------------------------*\
	  #CLICK NULL INDICATOR CAROUSEL
	\*----------------------------------------*/

	$("ol li.0").click(function () {
		$(this).addClass("active");
		$(".1").removeClass("active");
		$(".2").removeClass("active");
		let CurrentSrcImage = $("ol li.0 img").attr("src");
		$(".indi-carousel img").attr("src", CurrentSrcImage);
		let CurrentTitleImage = $("ol li.0 img").attr("title");
		$(".indi-carousel img").attr("title", CurrentTitleImage);
		let CurrentAltImage = $("ol li.0 img").attr("alt");
		$(".indi-carousel img").attr("alt", CurrentAltImage);
		let CurrentHrefLink = $("ol li.0 a").attr("href");
		$(".indi-carousel a").attr("href", CurrentHrefLink);
		$(".indi-carousel").show();
	});





	/*----------------------------------------*\
	  #CLICK ONE INDICATOR CAROUSEL
	\*----------------------------------------*/

	$("ol li.1").click(function () {
		$(this).addClass("active");
		$(".0").removeClass("active");
		$(".2").removeClass("active");
		let CurrentSrcImage = $("ol li.1 img").attr("src");
		$(".indi-carousel img").attr("src", CurrentSrcImage);
		let CurrentTitleImage = $("ol li.1 img").attr("title");
		$(".indi-carousel img").attr("title", CurrentTitleImage);
		let CurrentAltImage = $("ol li.1 img").attr("alt");
		$(".indi-carousel img").attr("alt", CurrentAltImage);
		let CurrentHrefLink = $("ol li.1 a").attr("href");
		$(".indi-carousel a").attr("href", CurrentHrefLink);
		$(".indi-carousel").show();
	});





	/*----------------------------------------*\
	  #CLICK TWO INDICATOR CAROUSEL
	\*----------------------------------------*/

	$("ol li.2").click(function () {
		$(this).addClass("active");
		$(".1").removeClass("active");
		$(".0").removeClass("active");
		let CurrentSrcImage = $("ol li.2 img").attr("src");
		$(".indi-carousel img").attr("src", CurrentSrcImage);
		let CurrentTitleImage = $("ol li.2 img").attr("title");
		$(".indi-carousel img").attr("title", CurrentTitleImage);
		let CurrentAltImage = $("ol li.2 img").attr("alt");
		$(".indi-carousel img").attr("alt", CurrentAltImage);
		let CurrentHrefLink = $("ol li.2 a").attr("href");
		$(".indi-carousel a").attr("href", CurrentHrefLink);
		$(".indi-carousel").show();
	});

});