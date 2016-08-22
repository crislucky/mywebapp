/**
 * Created by 浮生若梦 on 2016/8/7.
 */
angular.module("myapp").controller("userCtrl", function ($scope,$ionicActionSheet) {
    $scope.user={
        userName:'Cris',
        userID:"@Cris_silan",
        password:'123456',
        avatar:'images/head.jpg',
        location:"上海，中华人民共和国",
        born:"出生于1993年6月6日",
        follow:106,
        followers:137
    };
    $scope.show = function() {

        // 显示操作表
        $ionicActionSheet.show({
            buttons: [
                { text: '分享给朋友' },
                { text: '草稿箱' },
                { text: '帮助' },
                {text:"为我们评分"}
            ],
            destructiveText: 'Delete',
            titleText: '更多操作',
            cancelText: 'Cancel',
            buttonClicked: function(index) {
                return true;
            }
        });
    };
});