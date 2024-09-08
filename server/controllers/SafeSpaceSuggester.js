'use strict';

var utils = require('../utils/writer.js');
var SafeSpaceSuggester = require('../service/SafeSpaceSuggesterService.js');

module.exports.safe_space_suggesterGET = function safe_space_suggesterGET (req, res, next, location) {
  SafeSpaceSuggester.safe_space_suggesterGET(location)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
