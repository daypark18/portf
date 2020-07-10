$(function(){

    var bar = $('.header_inner nav .bar');
    var list = $('.header_inner nav > ul > li');

  list.hover(function(){
    var _this = $(this);
    var listW = _this.width();
    var width = _this.children().width();
    var padding = parseInt(_this.children().css('padding-right'));
    var index = _this.index();
    var newLeft = (width*index)+((2*index+1)*padding);

    bar.css({"width":width+"px","left":newLeft+"px"})
  },function(){
    bar.css({"width":0,"left":0})
  })

  $(window).scroll(function(){

       // console.log("parell.winHT==" , parell.winHT);
       // console.log("$(window).scrollTop()==", $(window).scrollTop());
     if($(window).scrollTop() >= parell.winHT * 1){
       $('.side_btn_set').addClass('view');
     }else{
       $('.side_btn_set').removeClass('view');
     }

     $(".side_btn_set >.top_btn").on("click",function(e){
        e.preventDefault();
        $("html, body").stop().animate({scrollTop: 0}, '500');
      });


    });


    $(".art_line").delay(3000).fadeOut("slow");
    $(".art_color .color").delay(1700).addClass("show");



    var parell = { }
    parell.winHT = $(window).height();
    parell.distance = parell.winHT;
    parell.count = 0;
    parell.mnoving = false;
    parell.length = $(document).find(".page").length;

//    var parell = {
//    winHT : $(window).height(),
//    distance : parell.winHT,
//    count : 0,
//    mnoving : false,
//    length : $(document).find(".page").length
//    }


    $(".page").each(function (index, element) {

  		$(element).on("mousewheel DOMMouseScroll", function (e) {
  			//console.log($(this).html());

  			// console.log("e ====", e);
  			// console.log("originalEvent ====", e.originalEvent);

  			e.preventDefault();

  			var El = e.originalEvent;

  			var delta = 0;


  			if (El.wheelDelta) {
  				delta = event.wheelDelta / 120;
  				//if (window.opera) delta = -delta;
  			} else if (El.detail) delta = -El.detail / 3;


  			if(parell.mnoving == false) {
  				parell.mnoving = true;

  				// 마우스휠을 위에서 아래로
  				if (delta  < 0 ) {
  					if($(window).scrollTop() == parell.distance * (parell.length-1)) {
  						moveTop = $(this).offset().top;
  					} else {
  						moveTop = $(this).next().offset().top;
  					}
  				// 마우스휠을 아래에서 위로
  				} else {
  					if($(window).scrollTop() < parell.distance) {
  					   moveTop = $(this).offset().top;
  					} else {
  						moveTop = $(this).prev().offset().top;
  					}
  				}


  				$("html,body").stop().animate({
  					scrollTop: moveTop + 'px'
  				}, {
  					duration: 800, complete: function () {
  						parell.mnoving = false;
  					}
  				});
  			}

  		});
  	});


    var now = 1;
	var maxData = parell.length;


	$('.side_btn_set > .vertical_nav >a ').on("click", function() {

		var delta = this.id == "prev" ? -1 : 1;

		if(now == 0 && this.id == "prev") {
			now = 1;
		} else if(now == maxData && this.id == "next") {
//			console.log("마지막에 도달했을때 ==", now);
			now = maxData;
		} else {

//			console.log("중간에 돌때 ==", now);
			now = now + delta;

			$("html, body").stop().animate({"scrollTop" : "+=" + ( parell.distance * delta)});
		}
	})

  var msgAlert = function() {

  $('body').css('overflow-y', 'hidden');
	$("#alertLypop").removeClass("out");
	$("#alertLypop").removeClass("off");
	$("#alertLypop").addClass("open");
	$("#alertLypop").fadeIn();
}
var msgAlert2 = function() {

$('body').css('overflow-y', 'hidden');
$("#alertLypop2").removeClass("out");
$("#alertLypop2").removeClass("off");
$("#alertLypop2").addClass("open");
$("#alertLypop2").fadeIn();
}

  $(".lypop").on("click", msgAlert);
  $(".lypop2").on("click", msgAlert2);

var msgAlertClose = function() {

		$("#alertLypop,#alertLypop2").removeClass("open");
		$("#alertLypop,#alertLypop2").addClass("off");
		setTimeout(function() {
			$("#alertLypop,#alertLypop2").fadeOut();
		}, 10);
    $('body').css('overflow-y', 'visible');
}

$(".btnclose").on("click", msgAlertClose);

})
