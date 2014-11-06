/**
 * Created by tdoson on 06.11.14.
 */
angular.module('app').controller('mvUserListCtrl', function($scope, mvUser){
    $scope.users = mvUser.query();
})