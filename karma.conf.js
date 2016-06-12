'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    files: [
      'node_modules/angular/*.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/moment/min/moment.min.js',
      'app/module.js',
      'app/components/**/*.js',
      'spec/**/*.js',
    ],
  });
};
