 /**
 * CONTENTS
 *
 * Navigation..................Navigation will be active and the menu will open
 * up and down.
 * Navigation window resize....When resizing the window, remove the active class 
 * on the menu switch, then show or hide the menu.
 * Setinterval carousel................The carousel changes the picture sometimes.
 * Image the right the from carousel...By clicking on the arrow pointing to the
 * right, the carousel invites to the image on the right.
 * Image the left the from carousel....By clicking on the arrow pointing to the
 * left, the carousel invites to the image on the left.
 * Image the zero position.............By clicking on the zero indicator, the 
 * carousel invites the zero position for the image.
 * Image the first position............By clicking on the first indicator, the 
 * carousel invites the first position for the image.
 * Image the second position...........By clicking on the second indicator, the 
 * carousel invites the second position for the image.
 */

 
 
 

$(document).ready(function() {

  let navigation = $(".navigation");




  
/*------------------------------------*\
  #NAVIGATION
\*------------------------------------*/

/**
 * The navigation on the page can have two different states:
 *
 * A) Click navigation with slide down and active class.
 * B) Click with a navigation slide up and remove the active class.
 *
 */

  $(".navbarNav").click(function() {
	$(this).toggleClass("active");
    navigation.slideToggle();
  });

  
  
  
  
/*------------------------------------*\
  #NAVIGATION WINDOW RESIZE
\*------------------------------------*/ 

/**
 * The navigation on the page can have two different states:
 *
 * A) Show or hide navigation when window scaling is 576 pixels smaller.
 * B) Show or hide navigation if the window is 576 pixels larger and remove 
 * the active class.
 *
 */
 
  $(window).resize (function() {
    $(".navbarNav").removeClass("active")
    if($(window).innerWidth() < 576) {
      navigation.hide();	
    } else {
      navigation.show();
    }			
  });

  
  
  
  
 /*------------------------------------*\
  #SETINTERVAL CAROUSEL
\*------------------------------------*/	
	
	setInterval(function(){
		$("#carousel ul").animate({marginleft:"-800px"},800, function(){
		$("#carousel ul li:last").after($("#carousel ul li:first"));
		$(this).css("margin-left","0");
		});
		$(".carousel-indicators li.active").animate({marginleft:"-800px"},800, function(){
		$(".carousel-indicators li:last").after($(".carousel-indicators li:first"));
		$(this).css("margin-left","0");
		});
		$(".indi-carousel").hide();
	},20000);





/*------------------------------------*\
  #CLICK RIGHT CAROUSEL
\*------------------------------------*/	
	
	$(".right").click(function(){
		$("#carousel ul").animate({marginleft:"-800px"},800, function(){
		$("#carousel ul li:last").after($("#carousel ul li:first"));
		$(this).css("margin-left","0");
		});
		$(".carousel-indicators li.active").animate({marginleft:"-800px"},800, function(){
		$(".carousel-indicators li:last").after($(".carousel-indicators li:first"));
		$(this).css("margin-left","0");
		});
		$(".indi-carousel").hide();
	}); 





/*------------------------------------*\
  #CLICK LEFT CAROUSEL
\*------------------------------------*/
	
	$(".left").click(function(){
		$("#carousel ul").animate({marginleft:"-800px"},800, function(){
		$("#carousel ul li:first").before($("#carousel ul li:last"));
		$(this).css("margin-left","0");
		});
		$(".carousel-indicators li.active").animate({marginleft:"-800px"},800, function(){
		$(".carousel-indicators li:first").before($(".carousel-indicators li:last"));
		$(this).css("margin-left","0");
		});
		$(".indi-carousel").hide();	
	});





/*------------------------------------*\
  #CLICK NULL INDICATOR CAROUSEL
\*------------------------------------*/	
	
	$("ol li.0").click(function() {	
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





/*------------------------------------*\
  #CLICK ONE INDICATOR CAROUSEL
\*------------------------------------*/	
	
	$("ol li.1").click(function() {	
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





/*------------------------------------*\
  #CLICK TWO INDICATOR CAROUSEL
\*------------------------------------*/	
	
	$("ol li.2").click(function() {
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