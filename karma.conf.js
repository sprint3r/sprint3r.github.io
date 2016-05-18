'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    files: [
      'node_modules/angular/*.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/module.js',
      'app/components/**/*.js',
      'spec/**/*.js',
    ],
  });
};
