/**
 * Created by 浮生若梦 on 2016/8/7.
 */
angular.module("myapp").controller("massageCtrl", function ($scope,$ionicModal) {
    $scope.uesrs = [
        {
            "userName":"HTC",
            "userId":"@htc",
            "avatar": "images/htc.jpg"
        },
        {
            "userName":"Android",
            "userId":"@Android",
            "avatar": "images/avatar04.jpg"
        },
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
    $ionicModal.fromTemplateUrl('views/modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

});