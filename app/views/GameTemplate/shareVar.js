'use strict';

angular.module('shareData', [])
.factory('shareVar', function() {
 alert("help");
 var savedData = {}
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});