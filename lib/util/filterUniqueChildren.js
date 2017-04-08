'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterUniqueChildren;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filterUniqueChildren(children) {
  for (var _len = arguments.length, displayNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    displayNames[_key - 1] = arguments[_key];
  }

  var filteredChildren = {};

  _react2.default.Children.forEach(children, function (child) {
    if (child) {
      if (displayNames.indexOf(child.type.displayName) < 0) {} else {
        if (filteredChildren[child.type.displayName]) {} else {
          filteredChildren[child.type.displayName] = child;
        }
      }
    }
  });

  return filteredChildren;
}