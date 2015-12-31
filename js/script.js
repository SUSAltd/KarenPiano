"use strict";

$(document).ready(function() {
	// protects email from spambots/crawlers
	var a = $(document.createElement("a"));
	a.attr("href", "mailto:musikgarden@att.net");
	a.text("musikgarden" + "@" + "att.net");
	$(".email").append(a);
	
	// initialize the dropdown nav thing
	var windowMd = $(window).width() > 992;
	if (!windowMd) {
		$(".navlinks").click(function() {
			$(".navlinks").slideToggle();
		});
	}
	
	$(window).resize(function() {
		// medium (md) window size
		if ($(window).width() > 992 && !windowMd) {
			windowMd = true;
			$(".navlinks").off("click");
		} else if ($(window).width() < 992 && windowMd) {
			windowMd = false;
			$(".navlinks").click(function() {
				$(".navlinks").slideToggle();
			});
		}
	});

	$(".navbutton").click(function() {
		$(".navlinks").slideToggle();
	});
});