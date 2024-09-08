'use strict';


/**
 * Get service by its location.
 *
 * location  
 * returns EvacuationPoint
 **/
exports.safe_space_suggesterGET = function(location) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "location" : "Near George Street",
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

