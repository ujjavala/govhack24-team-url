'use strict';


/**
 * Create feed
 * This created feed
 *
 * body Feed Created feed object (optional)
 * returns Feed
 **/
exports.createFeed = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "James",
  "deletedAt" : "john@email.com",
  "description" : "need help around olympic park",
  "location" : "olympic park",
  "id" : 10,
  "userId" : 123,
  "status" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create feed
 * This created feed
 *
 * body Feed Created feed object (optional)
 * returns Feed
 **/
exports.createFeed = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "James",
  "deletedAt" : "john@email.com",
  "description" : "need help around olympic park",
  "location" : "olympic park",
  "id" : 10,
  "userId" : 123,
  "status" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a feed.
 *
 * id  
 * no response value expected for this operation
 **/
exports.feedIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a feed by its id.
 *
 * id  
 * returns Feed
 **/
exports.feedIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "James",
  "deletedAt" : "john@email.com",
  "description" : "need help around olympic park",
  "location" : "olympic park",
  "id" : 10,
  "userId" : 123,
  "status" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a feed.
 *
 * body Feed  (optional)
 * id  
 * returns Feed
 **/
exports.feedIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "James",
  "deletedAt" : "john@email.com",
  "description" : "need help around olympic park",
  "location" : "olympic park",
  "id" : 10,
  "userId" : 123,
  "status" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get users with status
 *
 * returns List
 **/
exports.feedsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "James",
  "deletedAt" : "john@email.com",
  "description" : "need help around olympic park",
  "location" : "olympic park",
  "id" : 10,
  "userId" : 123,
  "status" : 1
}, {
  "createdAt" : "James",
  "deletedAt" : "john@email.com",
  "description" : "need help around olympic park",
  "location" : "olympic park",
  "id" : 10,
  "userId" : 123,
  "status" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

