// 登录验证
loginApp.controller('loginCtrls', ['$scope',
    function($scope) {
        $scope.user = {
            name: 'yangying',
            psw: '123456'
        };

        $scope.login = function(){
            alert('登录');
        }

    }
]);



/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */
