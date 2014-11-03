/**
 * Created by tdoson on 29.10.14.
 */
angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth){
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password){
        mvAuth.authenticateUser(username, password).then(function (success){
            if(success){
                mvNotifier.notify('You have successfully singed in!');
            }else{
                mvNotifier.notify('Username/password is not correct');
            }
        })
    }
});