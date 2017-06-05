//控制器模块
(function(){
	var controllers=angular.module('controllers',[]);
	controllers.controller('indexctrl',function($scope){
		$scope.item=0;
		$scope.addclass=function(n){
			$scope.item=n;
		}
	});
	//推荐板块控制器
	controllers.controller('recommendctrl',function($scope,$http,$timeout,$window){
		$scope.titles='推荐';
		$scope.page=0;
		$scope.newsList=[];
		$scope.isShow=false;
		$scope.moreNews=function(){
			$scope.isShow=true;
			$timeout(function(){
				$http({
					url:"http://route.showapi.com/1310-1",
					method:'POST',
					params:{
						"showapi_appid": '26916', //这里需要改成自己的appid
						"showapi_sign": '72fa78be4c2045138d456456fb9a3a90' ,
						page:$scope.page++
					}
				}).then(function(data){
					console.log(data)
					console.log(data.data.showapi_res_body.showapi_res_body.list)
					$scope.newsList=$scope.newsList.concat(data.data.showapi_res_body.showapi_res_body.list);
					$scope.isShow=false;
				});
			},1000)
			
		}
		$scope.moreNews();
		$scope.isrefresh=false;
		$scope.refresh=function(){
			$scope.isrefresh=true;
			location.reload();
			$scope.isrefresh=false;
		}
		$scope.isSeach=false;
		$scope.search=function(){
			$scope.isSeach=true;
		}
		;
		$scope.isremove=false;
		$scope.text='';
		$scope.Cancel=function(){
			$scope.isremove=true;
		}
		$scope.isrotate=false;
		$scope.touchess=function(){
			$scope.isrotate=true
		}
		// $scope.moreNews=function(){
		// 	$http({
		// 		url:'http://localhost:8080/toutiao/src/php/news.php',
		// 		method:'GET',
		// 		params:{
		// 			 $showapi_appid:'36258', //替换此值,在官网的"我的应用"中找到相关值
  //   				$showapi_secret:'7693b3110ac345c695801f2c4f88e686' //
		// 		}
		// 	}).then(function(data){
		// 		console.log(data)
		// 		$scope.newsList=$scope.newsList.concat(data.data.news_list);
		// 	})
		// }
		// $scope.moreNews();
		

	});
	//娱乐板块控制器
	controllers.controller('entertainctrl',function($scope,$http){
		$scope.titles='娱乐';
		$scope.page=0;
		$scope.newsList=[];
		$scope.moreNews=function(){
			$http({
				url:"http://route.showapi.com/1310-1",
				method:'POST',
				params:{
					"showapi_appid": '26916', //这里需要改成自己的appid
					"showapi_sign": '72fa78be4c2045138d456456fb9a3a90' ,
					page:$scope.page++
				}

			}).then(function(data){
				console.log(data.data.showapi_res_body.showapi_res_body.list)
				$scope.newsList=$scope.newsList.concat(data.data.showapi_res_body.showapi_res_body.list);
			});

		}
		$scope.moreNews();

	});
	//社会板块控制器
	controllers.controller('societyctrl',function($scope,$http){
		$scope.titles='社会';
		$scope.page=0;
		$scope.newsList=[];
		$scope.moreNews=function(){
			$http({
				url:"http://route.showapi.com/1310-1",
				method:'POST',
				params:{
					"showapi_appid": '26916', //这里需要改成自己的appid
					"showapi_sign": '72fa78be4c2045138d456456fb9a3a90' ,
					page:$scope.page++
				}

			}).then(function(data){
				$scope.newsList=$scope.newsList.concat(data.data.showapi_res_body.showapi_res_body.list);
			});

		}
		$scope.moreNews();

	});
	//军事板块控制器
	controllers.controller('militaryctrl',function($scope,$http){
		$scope.titles='军事';
		$scope.page=0;
		$scope.newsList=[];
		$scope.moreNews=function(){
			$http({
				url:"http://route.showapi.com/1310-1",
				method:'POST',
				params:{
					"showapi_appid": '26916', //这里需要改成自己的appid
					"showapi_sign": '72fa78be4c2045138d456456fb9a3a90' ,
					page:$scope.page++
				}

			}).then(function(data){
				console.log(data.data.showapi_res_body.showapi_res_body.list)
				$scope.newsList=$scope.newsList.concat(data.data.showapi_res_body.showapi_res_body.list);
			});

		}
		$scope.moreNews();

	});
	//详情页控制器
	controllers.controller('detailctrl',function($scope,$state,$http){
		// $http({
		// 	url:'js/detail.json',
		// 	method:'GET',
		// 	params:{
		// 		id:$state.params.id
		// 	}
		// }).then(function(data){
		// 	console.log(data);
		// 	// data.data.news_list.forEach(function(item){
		// 		console.log(item)
		// 		if(item.id==$state.params.id){
		// 			$scope.newsdetail=item;
		// 		}
		// 	})
		// })

	})
})()
;