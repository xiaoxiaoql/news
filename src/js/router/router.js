//路由模块
;
(function(){
	var routers=angular.module('routers',[]);
	routers.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.when("","/index/recommend");
		$stateProvider.state('index',{
			url:'/index',
			templateUrl:'template/index.html',
			controller:'indexctrl'
		})
		.state('index.recommend',{
			url:'/recommend',
			templateUrl:'template/recommend.html',
			controller:'recommendctrl'

		})
		.state('index.entertain',{
			url:'/entertain',
			templateUrl:'template/entertain.html',
			controller:'entertainctrl'

		})
		.state('index.society',{
			url:'/society',
			templateUrl:'template/society.html',
			controller:'societyctrl'

		})
		.state('index.military',{
			url:'/military',
			templateUrl:'template/military.html',
			controller:'militaryctrl'
			
		})
		
		.state('detail',{
			url:'/detail/:url',
			templateUrl:'template/detail.html',
			controller:'detailctrl'
		});

	})
})()
;