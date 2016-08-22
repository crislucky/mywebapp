/**
 * Created by 浮生若梦 on 2016/8/7.
 */
angular.module("myapp").controller("homeCtrl", function ($scope,$http,$ionicScrollDelegate,$ionicPopup,$timeout) {
    $scope.massage = "这是HOME页面的控制器";
    $scope.posts = [
        {
            "userName": "Lindsey Stirling",
            "userId":"@LindseyStirling",
            "time": "3分",
            "avatar": "images/avatar01.jpg",
            "img": "images/img07.jpg",
            "likes": 234,
            "comments": 32,
            "forwards":20,
            "post":"Tune in to my set from @lollapalooza today at 2:50pm CT at http://redbull.tv/lollapalooza  on Channel 3!"
        },
        {
            "userName": "竹達 彩奈",
            "userId":"@Ayana_take",
            "time": "6分",
            "avatar": "images/avatar02.jpg",
            "img": "images/img05.jpg",
            "likes": 25,
            "comments": 16,
            "forwards":18,
            "post":"何ヵ月ぶりに髪をロングに！今日だけウィッグつけてポニーテールになりました。久々に自撮りしたら自分の手が写ってしまった…写真撮るの下手なうちの母と同じことやってる。笑"
        },
        {
            "userName": "Android",
            "userId":"@android",
            "time": "16分",
            "avatar": "images/avatar04.jpg",
            "img": "images/img09.jpg",
            "likes": 666,
            "comments": 38,
            "forwards":133,
            "post":"Relax & enjoy your Saturday. #AndroidTip: Have your music match your mood. http://android.com/phones/tips"
        },
        {
            "userName": "Life on Earth",
            "userId":"@planetepics",
            "time": "2时",
            "avatar": "images/avatar06.jpg",
            "img": "images/img10.jpg",
            "likes": 2378,
            "comments": 663,
            "forwards":235,
            "post":"She looked perfectly into the camera."
        }
    ];
    $scope.doRefresh = function () {
        var data = [
            {
                "userName": "Mindy Kaling",
                "userId":"@mindykaling",
                "time": "1分",
                "avatar": "images/avatar05.jpg",
                "img": "images/img01.jpg",
                "likes": 65,
                "comments": 11,
                "forwards":1,
                "post":"喜欢清晨的阳光啊"
            },
            {
                "userName": "J.K. Rowling",
                "userId":"@jk_rowling",
                "time": "2分",
                "avatar": "images/img06.jpg",
                "img": "images/img06.jpg",
                "likes": 754,
                "comments": 605,
                "forwards":113,
                "post":"Like sunshine in the morning~~~"
            },
            {
                "userName": "marissamayer",
                "userId":"@marissamayer",
                "time": "5分",
                "avatar": "images/img07.jpg",
                "img": "images/img02.jpg",
                "likes": 74,
                "comments": 60,
                "forwards":13,
                "post":"@奥巴马"
            }
        ];
        setTimeout(function () {
            $scope.posts = data;
            $scope.$broadcast('scroll.refreshComplete');
        }, 2000);
    };
    $scope.loadMore = function () {
        $http.get("json/posts.json").success(function (data) {
            setTimeout(function () {
                Array.prototype.push.apply($scope.posts, data);
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 2000);
        }).finally(function () {
            Array.prototype.push.apply($scope.posts, data);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };
    $scope.like=function(item){
        if(!item.liked){
            item.likes++;
            item.liked=!item.liked;
            var likePopup =$ionicPopup.alert({
                title: '喜欢',
                template: '标记为喜欢'
            });
            likePopup.then(function(res){
            });
        } else {
            item.likes--;
            item.liked=!item.liked;
            var likePopup =$ionicPopup.alert({
                title: '取消喜欢',
                template: '已取消喜欢'
            });
            likePopup.then(function(res){
            });
        }
    };
    $scope.addComment=function(item){
        $scope.data={};
        var myPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="data.entry">',
            title: '添加新评论',
            subTitle: '请输入评论内容',
            scope: $scope,
            buttons: [
                { text: '放弃' },
                {
                    text: '<b>提交</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.entry) {
                            e.preventDefault();
                        } else {
                            item.comments++;
                            return $scope.data.entry;
                        }
                    }
                }
            ]
        });
        myPopup.then(function(res) {
            console.log("成功提交评论：", res);
        });
        $timeout(function() {
            myPopup.close();
        }, 5000);
    };
    $scope.addForward = function (item) {
        var confirmPopup = $ionicPopup.confirm({
            title: '转发',
            template: '确认转发此条推文吗？'
        });
        confirmPopup.then(function (res) {
            if (res) {
                item.forwards++;
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };
    $scope.toTop = function () {
        $ionicScrollDelegate.scrollTop(true);
    };
});