'use strict';


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object (optional)
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "Jane",
  "lastName" : "Doe",
  "isVolunteer" : true,
  "location" : "olympic park",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "jane_doe",
  "status" : "active"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object (optional)
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "Jane",
  "lastName" : "Doe",
  "isVolunteer" : true,
  "location" : "olympic park",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "jane_doe",
  "status" : "active"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs user into the system
 *
 * username String The user name for login (optional)
 * password String The password for login in clear text (optional)
 * returns String
 **/
exports.loginUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a user.
 *
 * id  
 * no response value expected for this operation
 **/
exports.userIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a user by its id.
 *
 * id  
 * returns User
 **/
exports.userIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "Jane",
  "lastName" : "Doe",
  "isVolunteer" : true,
  "location" : "olympic park",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "jane_doe",
  "status" : "active"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a user.
 *
 * body User  (optional)
 * id  
 * returns User
 **/
exports.userIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "Jane",
  "lastName" : "Doe",
  "isVolunteer" : true,
  "location" : "olympic park",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "jane_doe",
  "status" : "active"
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
 * status  
 * returns List
 **/
exports.usersGET = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "Jane",
  "lastName" : "Doe",
  "isVolunteer" : true,
  "location" : "olympic park",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "jane_doe",
  "status" : "active"
}, {
  "firstName" : "Jane",
  "lastName" : "Doe",
  "isVolunteer" : true,
  "location" : "olympic park",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "jane_doe",
  "status" : "active"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

