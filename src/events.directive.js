/*global angular */
(function () {
    'use strict';
    angular.module('Event.directive', [])
        .directive('fileInputChange', [function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var onChangeHandler;
                    onChangeHandler = scope.$eval(attrs.fileInputChange);
                    element.bind('change', onChangeHandler);
                }
            };
        }]);
}());
