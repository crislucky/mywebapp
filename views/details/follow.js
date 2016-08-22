/**
 * Created by 浮生若梦 on 2016/8/7.
 */
angular.module("myapp").controller("followCtrl", function ($scope,$ionicPopup) {
    $scope.users = [
        {
            "userName":"Barack Hussein Obama",
            "userId":"@obama",
            "avatar": "images/avatar07.jpg",
            "desc":"哈哈哈，老子已经天下无敌了"
        },
        {
            "userName":"Владимир Владимирович Путин",
            "userId":"@pujing",
            "avatar": "images/avatar08.jpg",
            "desc":"哥的征程是星辰大海"
        },
        {
            "userName":"김정은",
            "userId":"@Kim Jong-un",
            "avatar": "images/avatar09.jpg",
            "desc":"奥巴马真是个SB"
        }
    ];
    $scope.add = function (user) {
        var alertPopup = $ionicPopup.alert({
            title: '提示',
            template: '你关注了'+user.userName
        });
    }
});