(function () {
    'use strict';

    app.controller('timepickerCtrl', timepickerCtrl);

    timepickerCtrl.$inject = ['$rootScope'];
    
    function timepickerCtrl($rootScope) {
        var vm = this;

        vm.timestamp = "04:45 pm";   
    };

})();



