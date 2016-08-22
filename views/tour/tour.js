/**
 * Created by 浮生若梦 on 2016/8/8.
 */
angular.module("myapp").controller("tourCtrl", function ($scope,$ionicSlideBoxDelegate) {
    $scope.images=[
        {"url":"images/IMG_3047.PNG"},
        {"url":"images/IMG_3048.PNG"},
        {"url":"images/IMG_3049.PNG"},
        {"url":"images/IMG_3050.PNG"}
    ];
    $scope.isShow= false;
    $scope.onSlideChanged = function () {
        if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount() - 1){
            $scope.isShow= true;
        }else{
            $scope.isShow= false;
        }
    };
});