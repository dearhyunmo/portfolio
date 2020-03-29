$(window).load(function(){
  $(".loadingbg").fadeOut();
});
jQuery(function($){
    // portfolio isotope filter
    $(window).on('load',function(){
            $obj=$('.grid').isotope();
        });
        
        $('.pf-menu a').on('click',function(e){
          $(this).addClass('active').siblings().removeClass('active');
          var filterName = $(this).data('filter');
          $obj.isotope({
            filter:filterName
          });
          e.preventDefault();
        });
    
    
    // portfolio popup
    var state = 0;

	function pop (idx){
		state = 1;
		$('.modal').fadeIn();
		$('.pop').eq(idx).fadeIn();
//		$('html, body').css({'overflow' : 'hidden'}); //스크롤 없애기
	}

	function pop_close (){
		state = 0;
		$('.modal').fadeOut();
		$('.pop').fadeOut();
//		$('html, body').css({'overflow' : 'visible'});
	}

	$('.grid .grid-item').click(function(){
		pop($(this).index());
	});


	$('i').click(function(){
		pop_close($(this).index());
	});
    
    
    $(".rslides").responsiveSlides();
});
$('.icon-scroll').click(function(){
    var offset = $(this).parent().next().offset().top;
    $("html,body").animate({"scrollTop":offset-40}, 1000);
  });
  
  
  
  jQuery(function( $ ) {
      "use strict";
      $(function() {
          function animated_contents() {
              $(".zt-skill-bar > div ").each(function (i) {
                  var $this  = $(this),
                      skills = $this.data('width');
                  $this.css({'width' : skills + '%'});
              });
          }
          if(jQuery().appear) {
              $('.zt-skill-bar').appear().on('appear', function() {
                  animated_contents();
              });
          } else {
              animated_contents();
          }
      });
  });
  
  
  
  
  $(document).ready(function() {
  //   init the rotating text
    rotation();
  
  //   handle soon-click
      $(".soon-heading, .soon-tm").on("click", function() {
        var soonlink = "https://www.linkedin.com/in/sławek-pełka-tailordigital/";
        window.location = soonlink;
      });
  
  //   handle soon scroll class add
    var ci = 0;
    var il =  $(".soon-scroll-item").length;
    var cni = 0;
    $(".soon-scroll-item").each(function() {
       $(this).addClass("soon-" + ci);
      ci++;
    });
    $(".soon-scroll-item").first().addClass("soon-first");
    $(".soon-scroll-item").last().addClass("soon-last");
  
  //   handle soon scrol scroll
    var intervaltime = 4000;
    function rotation() {
      $(".soon-scroll-item").removeClass("e");
      setTimeout(function() {
        $(".soon-scroll-item").removeClass("s").addClass("h");
      }, 300);
      setTimeout(function() {
        $(".soon-" + cni).removeClass("h").addClass("s");
        setTimeout(function() {
          $(".soon-scroll-item.s").addClass("e");
        }, 300);
        cni == il -1 ? cni = 0 : cni++;
      }, 500);
    }
    setInterval(function() {
      rotation();
    }, intervaltime);
  });
  
  