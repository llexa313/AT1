(function(angular) {
    'use strict';

    angular.module('task1App', [])
        .controller('FormCtrl', ['$scope', function($scope) {
            $scope.test = 'test';

            $scope.reset = function() {
                $scope.test = null;
            };
        }])
        .directive('age', function() {
            var INTEGER_REGEXP = /^\-?\d+$/;
            return {
                require: 'ngModel',
                link: function(scope, elm, attrs, ctrl) {
                    ctrl.$validators.age = function(modelValue, viewValue) {
                        if (_.isEmpty(modelValue)) {
                            return true;
                        }

                        var value = INTEGER_REGEXP.exec(viewValue);

                        return !!(value && value[0] && _.inRange(value, 18, 60));
                    };
                }
            };
        });

})(window.angular);