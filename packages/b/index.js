const { double } = require("a");
// b has lodash as a dependency so this is expected to work
const _ = require("lodash");

console.log(`${_.capitalize("hello")} ${double(2)}`);
