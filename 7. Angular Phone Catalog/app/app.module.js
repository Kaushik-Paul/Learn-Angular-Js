'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  // ...which depends on the `phoneList` module
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
]);