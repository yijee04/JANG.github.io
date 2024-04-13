$(function(){
	$(".typo").css({opacity:0});
	$(".typo").waypoint(function(){
		$(".typo").addClass("fadeInDown");
	}, {
		offset:"50%"
	});
	//페이지내의 링크 위치로 부드럽게 이동
	$(".gnb a, .logo a").click(function(){
		var target=$(this).attr("href");
		var targetPos=$(target).offset().top;
		console.log(target);
		console.log(targetPos);
		$("html, body").stop().animate({scrollTop:targetPos}, 1000);
		$(".gnb a").removeClass("active");
		$(this).addClass("active");
		return false;
	});
	//새로고침했을때 탑으로이동
	$("html,body").animate({scrollTop:0},200); 
	$(window).scroll(function(){
		var _pos=$(document).scrollTop();
		console.log(_pos);
	});
	//메뉴눌렀을때 커지는효과
	$(".gnb li a").click(function(e){
		e.preventDefault();
		$(".gnb li a").removeClass("active");
		$(this).addClass("active");
	});			
	//네비게이션 배경 색상 생성
	$(window).scroll(function(){
		var st=$(window).scrollTop();
		if(st>0){
			$(".header").addClass("fixed");
		}else{
			$(".header").removeClass("fixed");
		}
	});
	//포토폴리오 팝업창
	$(".menu").click(function(){
		$(this).next().show();
		$("body").css({overflow:"hidden"});
		return false;
	});
	$(".btn_close").click(function(){
		$(".overlay").hide();
		$("body").css({overflow:"auto"});
		return false;
	});
	
	$(".btn_guide").click(function(){
			$(this).parent().next().find(".over_guide").show();
			$("body").css({overflow:"hidden"});
			return false;
		});
	$(".btn_link").click(function(){
		$(this).parent().next().find(".over_mobile").show();
		$("body").css({overflow:"hidden"});
		return false;
	});
	$(".btn_close").click(function(){
		$(".overlay").hide();
		$("body").css({overflow:"auto"});
		return false;
	});
	//
	$(function(){
		var sectionInfo=[];
		$(".section").each(function(i){
			var tg=$(this);
			sectionInfo.push(tg.offset().top);
		});
		console.log(sectionInfo);

		//스크롤할때 색상변경
		$(window).scroll(function(){
			var sct=$(document).scrollTop()
			
			if(sct>sectionInfo[0]){
	           $(".gnb li a").removeClass("active");
	           $(".gnb li").eq(0).find("a").addClass("active");
	        }
	        if(sct>sectionInfo[1]){
	           $(".gnb li a").removeClass("active");
	           $(".gnb li").eq(1).find("a").addClass("active");
	        }
	        if(sct>sectionInfo[2]){
	           $(".gnb li a").removeClass("active");
	           $(".gnb li").eq(2).find("a").addClass("active");
	        }
	        if(sct>sectionInfo[3]){
	           $(".gnb li a").removeClass("active");
	           $(".gnb li").eq(3).find("a").addClass("active");
	        }
		});
   });
//graph
	$(function(){
		var num=$(".gra_area").length;
		var txt;
		$(window).scroll(function(){
			var t=$(document).scrollTop();
			for(i=0; i<num ; i++){
				txt=$(".gra_area").eq(i).find(".gr_num").text();
				if(t>=1200){
					$(".gra_area").eq(i).find(".gr_bar").stop().animate({width:txt});
				}else{
					$(".gra_area .gr_bar").stop().animate({width:'0%'});
				}
			}
		});
	})
//pc목업안에 사이트 이미지 자동 스크롤
	var ht;
	var mt=$(".pc_screen").height();
	$(".pc").mouseover(function(){
		ht=$(this).find(".img").height();
		$(this).find(".img").stop().animate({top:-(ht-mt)},2000);
	});
	$(".pc").mouseout(function(){
		ht=$(this).find(".img").height();
		$(this).find(".img").stop().animate({top:0},1000);
	});


	$("html,body").animate({scrollTop:0},200); //새로고침했을때 탑으로이동
				$(window).scroll(function(){
					var _pos=$(document).scrollTop();
					console.log(_pos);
					//fixed효과
					if(_pos>10){
						$(".header").addClass("fixed");
					}else{
						$(".header").removeClass("fixed");
					}

					//top버튼
					if(_pos>5){
						$("#top").fadeIn(200);
					}else{
						$("#top").fadeOut(200);
					}
				}); //scroll이벤트메서드 종료
				
	$("#top").click(function(){
					$("html,body").animate({scrollTop:0},200);
				});





});