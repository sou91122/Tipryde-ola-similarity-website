/*-------------------------------------
      Responsive Menu js
-------------------------------------*/
	   jQuery(document).ready(function($) {
			jQuery('.stellarnav').stellarNav({
				theme: 'light'
			});
		});

/*-------------------------------------
      Owl
-------------------------------------*/	
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        loop: true,
		autoplay:true,
		nav:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 2
          }
        }
      })

/*-------------------------------------
      Fare Estimate
-------------------------------------*/	
	  
function myFunction() {
	"use strict";
    var x = document.getElementById("car-display");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/*-------------------------------------
      Individual Income
-------------------------------------*/

$(document).ready(function(){
    $('#individual-earning-date').click(function(event){
        event.stopPropagation();
        $("#individual-earning-details").toggle();

    });
    $("#individual-earning-date").on("click", function (event) {
        event.stopPropagation();
    });

});


/*-------------------------------------
      Side Nav
-------------------------------------*/	 
 
function openNav() {
	"use strict";
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main");
}
function closeNav() {
	"use strict";
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main");
}

/*-------------------------------------
      In Admin Page - Date Picker
-------------------------------------*/
$(function () {	
"use strict";	
var mdate = new Date('');
$("#expiry-date-1, #expiry-date-2, #expiry-date-3, #expiry-date-4, #expiry-date-5, #expiry-date-6, #expiry-date-7, #expiry-date-8").datetimepicker({
minView: 2,
format: 'mm/dd/yyyy',
autoclose: true,
startDate: mdate
});
});


