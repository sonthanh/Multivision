/**
 * Created by tdoson on 27.10.14.
 */
angular.module('app').controller('mvMainCtrl', function($scope){
    $scope.courses = [
        {name:'Abc', featured:true},
        {name:'DEF', featured:false}
    ]
});