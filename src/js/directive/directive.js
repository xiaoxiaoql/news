//指令模块
;
(function(){
	var directives=angular.module('directives',[]);
	directives.directive('wefooter',function(){
		return{
			templateUrl:"directive/wefooter.html"
		}
	});
	directives.directive('weheader',function(){
		return{
			templateUrl:"directive/weheader.html"

		}
	})
	;
	directives.directive('slideshow',function(){
		return{
			templateUrl:'directive/slideshow.html',
			link:function(){
				var swiper = new Swiper('.swiper-container', {
				    pagination: '.swiper-pagination',
				    paginationClickable: true
				});
			}
		}
	});
	directives.directive('newlist',function(){
		return{
			templateUrl:'directive/newlist.html',
		}
	});
	directives.directive('loadmore',function(){
		return{
			templateUrl:'directive/loadmore.html',
		}
	});
	directives.directive('loading',function(){
		return{
			templateUrl:'directive/loading.html',
		}
	});
	directives.directive('seach',function(){
		return{
			templateUrl:'directive/seach.html',
		}
	});
	directives.directive('weTouch',function(){
		return{
			restrict:'ECMA',
			link:function(scope,ele,attr){
				var startX,startY,endY,endX;
				//开始位置
				ele.bind('touchstart',function(e){
					startX=e.changedTouches[0].pageX;
					startY=e.changedTouches[0].pageY;
				});
				//结束位置
				ele.bind('touchend',function(e){
					endX=e.changedTouches[0].pageX;
					endY=e.changedTouches[0].pageY;
					if(endY>startY){

					}


				})

				
			}
		}
	});
	directives.directive('touchrote',function(){
		return{
			templateUrl:'directive/touchrote.html'
			
		}
	});
	

})()
;