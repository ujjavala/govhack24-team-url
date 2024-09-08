'use strict';

var utils = require('../utils/writer.js');
var Feed = require('../service/FeedService');

module.exports.createFeed = function createFeed (req, res, next, body) {
  Feed.createFeed(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createFeed = function createFeed (req, res, next, body) {
  Feed.createFeed(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.feedIdDELETE = function feedIdDELETE (req, res, next, id) {
  Feed.feedIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.feedIdGET = function feedIdGET (req, res, next, id) {
  Feed.feedIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.feedIdPUT = function feedIdPUT (req, res, next, body, id) {
  Feed.feedIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.feedsGET = function feedsGET (req, res, next) {
  Feed.feedsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
