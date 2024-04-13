$(function(){
//메뉴 클릭시 색상변경과 플러스아이콘에서 마이너스아이콘으로 변경
	$(".tit").click(function(){
		if($(this).hasClass("on")==false){
			$(".tit").removeClass("on");
			$(this).addClass("on");
//메인 메뉴를 클릭시 서브메뉴 나오게
			$(".lnb").slideUp(200);
			$(this).next().slideDown(200);
		}else{
			$(".tit").removeClass("on");
			$(".lnb").slideUp(200);
		}
	});
//메뉴를 클릭시 히든 네비게이션이 보이게
	$(".menu_link").click(function(){
		$(".gnb").stop().animate({right:0}, 200);
		return false;
	}); 
//클로즈 버튼 클릭시 메뉴 닫히게
	$(".btn_close").click(function(){
		$(".gnb").stop().animate({right:"-100%"}, 200);
		return false;
	});










});