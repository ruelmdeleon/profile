'use strict';

angular.module('profileApp.version', [
  'profileApp.version.interpolate-filter',
  'profileApp.version.version-directive'
])

.value('version', '0.1');
