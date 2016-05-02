var app = angular.module('app', []);

(function () {
    'use strict';

    app.directive('timepicker', timepicker);

    function timepicker() {

        function ctrl($scope) {
            var timeSplit = function () {
                
                var hrsAndMins = $scope.model.split(' ')[0];
                $scope.hours = hrsAndMins.split(':')[0];
                if ($scope.hours.charAt(0) === '0') {
                    $scope.hours = $scope.hours.charAt(1);
                }
                $scope.minutes = hrsAndMins.split(':')[1];
                $scope.ampm = $scope.model.split(' ')[1].toUpperCase();
            };
            timeSplit();
            
            
            $scope.updateModelString = function () {
                $scope.model = $scope.hours + ":" + $scope.minutes + " " + $scope.ampm;
            }
        };

        function link(scope, element, attrs, ctrl) {
            scope.minuteInterval = attrs.minuteInterval || 15;
            scope.minutesOptions = [];
            var steps = 60/scope.minuteInterval;
            for (var i = 0; i < steps; i++) {
                var min = i * scope.minuteInterval;
                if (min.toString().length < 2) {
                    min = "0" + min.toString();
                    scope.minutesOptions.push(min);
                } else {
                    scope.minutesOptions.push(min);
                }
                
            }
        };
        var directive = {
            restrict: 'E',
            replace: true,
            transclude: false,
            templateUrl: 'tpl.timepicker.html',
            scope: {
                model: '=model'
            },
            controller: ctrl,
            link: link
        };
        return directive;

    };
})();