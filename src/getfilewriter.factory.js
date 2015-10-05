/*global angular, window */
(function () {
    'use strict';
    angular.module('GetFileWriter.Factory', [])
        .factory('GetFileWriterFactory', [
            function () {
                return {
                    /**
                     * Description for requestFileSystem
                     * @public
                     * @method requestFileSystem
                     * @param {Object} type Type of the storage
                     * @param {Number} size Size of the storage
                     * @param {Object} callback Callback function for success that will contain a FileSystem object
                     * @param {Object} errorCallback Callback function for error
                     */
                    requestFileSystem: function (type, size, callback, errorCallback) {
                        // Note: The file system has been prefixed as of Google Chrome 12:
                        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
                        window.requestFileSystem(type, size, callback, errorCallback);
                    },
                    /**
                    * Description for convertToMB
                    * @public
                    * @method convertToMB takes a number and converts it to a MB value
                    * @param {Number} numberOfMB
                    * @return {Number} MBs
                    */
                    convertToMB: function (numberOfMB) {
                        return numberOfMB * 1024 * 1024;
                    }
                };
            }]);
}());
