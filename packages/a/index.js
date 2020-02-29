// package a does NOT has lodash as a dependency, this shouldn't work
const _ = require("lodash");
const double = num => num * _.add(1, 2);

module.exports = {
  double
};
