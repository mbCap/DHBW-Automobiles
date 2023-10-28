$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : CarVilla HTML Template
* Version       : 1.0
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. welcome animation support
3. owl carousel
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 300) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

	// 2. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	
	// 3. owl carousel

		// i.  new-cars-carousel
		
			$("#new-cars-carousel").owlCarousel({
				items: 1,
				autoplay:true,
				loop: true,
				dots:true,
				mouseDrag:true,
				nav:false,
				smartSpeed:1000,
				transitionStyle:"fade",
				animateIn: 'fadeIn',
				animateOut: 'fadeOutLeft'
				// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			});


		// ii. .testimonial-carousel
	
		
			var owl=$('.testimonial-carousel');
			owl.owlCarousel({
				items:3,
				margin:0,
				
				loop:true,
				autoplay:true,
				smartSpeed:1000,
				
				//nav:false,
				//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				
				dots:false,
				autoplayHoverPause:false,
			
				responsiveClass:true,
					responsive:{
						0:{
							items:1
						},
						640:{
							items:2
						},
						992:{
							items:3
						}
					}
				
				
			});

		// iii. .brand-item (carousel)
		
			$('.brand-item').owlCarousel({
				items:6,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:false,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:3
						},
						1000:{
							items:6
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})

});

















// Annahme: Hier würdest du die Daten aus deiner Datenquelle (z.B. XML) abrufen und in die Variablen einfügen
var brand = "Volkswagen";
var model = "Golf";
var b2_1 = "12345";
var b2_2 = "67890";
var j = "1234";
var four = "5678";
var d1 = "9012";
var d2 = "3456";
var two = "7890";
var five = "1234";
var v9 = "5678";
var fourteen = "9012";
var p3 = "3456";
var s = "7890";
var nefz = "12 g/km";
var urban = "5.5 l/100km";
var extra_urban = "4.0 l/100km";
var combined = "4.8 l/100km";
var co2_combined = "110 g/km";
var wltp = "14 g/km";
var fast = "8.5 l/100km";
var quick = "6.0 l/100km";
var slow = "7.2 l/100km";
var co2_combined2 = "95 g/km";

// Aktualisiere die Anzeigetafel mit den Daten
document.getElementById("brand").textContent = brand;
document.getElementById("model").textContent = model;
document.getElementById("b2_1").textContent = b2_1;
document.getElementById("b2_2").textContent = b2_2;
document.getElementById("j").textContent = j;
document.getElementById("four").textContent = four;
document.getElementById("d1").textContent = d1;
document.getElementById("d2").textContent = d2;
document.getElementById("two").textContent = two;
document.getElementById("five").textContent = five;
document.getElementById("v9").textContent = v9;
document.getElementById("fourteen").textContent = fourteen;
document.getElementById("p3").textContent = p3;
document.getElementById("s").textContent = s;
document.getElementById("nefz").textContent = nefz;
document.getElementById("urban").textContent = urban;
document.getElementById("extra_urban").textContent = extra_urban;
document.getElementById("combined").textContent = combined;
document.getElementById("co2_combined").textContent = co2_combined;
document.getElementById("wltp").textContent = wltp;
document.getElementById("fast").textContent = fast;
document.getElementById("quick").textContent = quick;
document.getElementById("slow").textContent = slow;
document.getElementById("co2_combined2").textContent = co2_combined2;




