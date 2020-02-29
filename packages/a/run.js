// package a does NOT has lodash as a dependency, this shouldn't work
const _ = require("lodash");

console.log(`${_.capitalize("woo")}`);
