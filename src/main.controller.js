/*global angular */
(function () {
    'use strict';
    angular.module('Main.controller', [])
        .controller('MainCtrl', ['GetFileWriterFactory', function (GetFileWriterFactory) {
            var self;
            self = this;
            self.singleFileAdded = function (event) {
                var callback, errorCallback;
                callback = function (fileSystemObject) {
                    alert(fileSystemObject);
                };
                errorCallback = function (error) {
                    console.log(error);
                };
                GetFileWriterFactory.requestFileSystem(window.Persistent, GetFileWriterFactory.convertToMB(5), callback, errorCallback);
                //alert(event.target.files[0]);
            };
        }]);
}());
