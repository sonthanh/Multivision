/**
 * Created by tdoson on 03.11.14.
 */
angular.module('app').factory('mvIdentity', function () {
    return {
        currentUser: undefined,
        isAuthenticated: function () {
            return !!this.currentUser;
        }

    }
});

