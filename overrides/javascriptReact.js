const javascriptRule = require('./rules/javascript');
const reactRule = require('./rules/react');

module.exports = {
  files: ['*.jsx'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...javascriptRule,
    ...reactRule,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
