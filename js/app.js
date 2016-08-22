/**
 * Created by 浮生若梦 on 2016/8/7.
 */
var myapp = angular.module("myapp",["ionic"]);
myapp.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    });
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}
    });
    $stateProvider.state("tabs.notice",{
        url:"/notice",
        views:{"tab-notice":{templateUrl:"views/notice/notice.html",controller:"noticeCtrl"}}
    });
    $stateProvider.state("tabs.follow",{
        url:"/follow",
        views:{"tab-notice":{templateUrl:"views/details/follow.html",controller:"followCtrl"}}
    });
    $stateProvider.state("tabs.massage",{
        url:"/massage",
        views:{"tab-massage":{templateUrl:"views/massage/massage.html",controller:"massageCtrl"}}
    });
    $stateProvider.state("tabs.user",{
        url:"/user",
        views:{"tab-user":{templateUrl:"views/user/user.html",controller:"userCtrl"}}
    });
    $stateProvider.state("settings",{
        url:"/settings",
        templateUrl:"views/details/settings.html"
    });
    $urlRouterProvider.otherwise("/tour");
});
myapp.controller("indexCtrl", function ($scope,$ionicPopup,$rootScope) {
    $scope.login={
        in:false,
        out:true,
        nameInvalid:false,
        pwInvalid:false
    };
    $rootScope.userLogin=$scope.login;
    $scope.user={
        userName:'Cris',
        password:'123456',
        avatar:'images/head.jpg'
    };
    $scope.userL={
        userName:'',
        password:''
    };
    $scope.userLogin=function(name,pwd) {
        if (name!=$scope.user.userName) {
            $scope.login.nameInvalid=true;
            $scope.login.pwInvalid=false;
        } else if(pwd!=$scope.user.password) {
            $scope.login.nameInvalid=false;
            $scope.login.pwInvalid=true;
        } else {
            $scope.login.in = true;
            $scope.login.out = false;
            $scope.login.nameInvalid=false;
            $scope.login.pwInvalid=false;
        }
    };
    $scope.userLoginOut=function(){
        var confirmPopup =$ionicPopup.confirm({
            title: '退出登陆',
            template: '确定退出？'
        });
        confirmPopup.then(function(res) {
            if (res) {
                $scope.login.in = false;
                $scope.login.out = true;
                $scope.login.invalid = false;
                $scope.userL.userName = '';
                $scope.userL.password = '';
            }
        });
    };
});