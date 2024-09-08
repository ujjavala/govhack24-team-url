'use strict';


/**
 * Get service by its location.
 *
 * location  
 * returns Service
 **/
exports.service_suggesterGET = function(location) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "need help around olympic park",
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

