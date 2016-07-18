module.exports = require('eslint-config-airbnb-base/rules/style');

module.exports['indent'] = 2;
module.exports['max-len'] = [0, 120, 4, { ignoreUrls: true }];
module.exports['operator-linebreak'] = [1, 'after', {
  overrides: {
    '?': 'before',
    ':': 'before',
    '&&': 'ignore',
    '||': 'ignore',
    '=': 'ignore',
    '+': 'ignore'
  }
}];
module.exports['quotes'] = 0;
module.exports['quote-props'] = [0, 'consistent'];
module.exports['strict'] = 0;
