/**
 * Created by 浮生若梦 on 2016/8/7.
 */
angular.module("myapp").controller("noticeCtrl", function ($scope,$ionicPopup) {
    $scope.users = [
        {
            "userName":"Barack Hussein Obama",
            "userId":"@obama",
            "avatar": "images/avatar07.jpg"
        },
        {
            "userName":"Владимир Владимирович Путин",
            "userId":"@pujing",
            "avatar": "images/avatar08.jpg"
        },
        {
            "userName":"김정은",
            "userId":"@Kim Jong-un",
            "avatar": "images/avatar09.jpg"
        }
    ];
    $scope.data = {
        showDel: false,
        showReorder: false
    };
    $scope.reOrder = function (user, from, to) {
        $scope.users.splice(from, 1);
        $scope.users.splice(to, 0, user);
    };
    $scope.follow = function (user) {
        var alertPopup = $ionicPopup.alert({
            title: '提示',
            template: '你关注了'+user.userName
        });
        alertPopup.then(function(res) {
            console.log(user.userName);
        });
    };
    $scope.delete = function (user) {
        var confirmPopup = $ionicPopup.confirm({
            title: '警告',
            template: '确定删除?'
        });
        confirmPopup.then(function(res) {
            if(res) {
                var i = $scope.users.indexOf(user);
                $scope.users.splice(i, 1);
            } else {
                console.log('You are not sure');
            }
        });
    };
});