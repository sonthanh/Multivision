/**
 * Created by tdoson on 27.10.14.
 */
angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCourses){
    $scope.courses = mvCachedCourses.query();
});