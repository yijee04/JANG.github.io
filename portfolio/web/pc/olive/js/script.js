$(function(){
			 	var swiper = new Swiper('.swiper-container', {
				      navigation: {
				        nextEl: '.swiper-button-next',
				        prevEl: '.swiper-button-prev',
			      },
			       pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      },
			      autoplay: {
			        delay: 2500,
			        disableOnInteraction: false,
			      },
			      loop: true, //이미지순서대로 무한반복
			    });

				$("html,body").animate({scrollTop:0},200); //새로고침했을때 탑으로이동
				$(window).scroll(function(){
					var _pos=$(document).scrollTop();
					console.log(_pos);
					//fixed효과
					/*if(_pos>10){
						$(".header").addClass("fixed");
					}else{
						$(".header").removeClass("fixed");
					}*/

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