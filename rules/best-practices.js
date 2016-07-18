module.exports = require('eslint-config-airbnb-base/rules/best-practices');

module.exports['no-case-declarations'] = 0;
module.exports['no-param-reassign'] = 0;
module.exports['no-unused-expressions'] = [2, { allowShortCircuit: true, allowTernary: true }];
