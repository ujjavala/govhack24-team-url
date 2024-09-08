'use strict';

var utils = require('../utils/writer.js');
var ServiceSuggester = require('../service/ServiceSuggesterService');

module.exports.service_suggesterGET = function service_suggesterGET (req, res, next, location) {
  ServiceSuggester.service_suggesterGET(location)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
