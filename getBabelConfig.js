const fs = require('fs');
const path = require('path');

const getBabelConfig = () => Object.assign(
  {},
  { babelrc: false },
  JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf8')),
);

module.exports = getBabelConfig;