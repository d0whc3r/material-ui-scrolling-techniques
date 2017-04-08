'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexibleSpace = function FlexibleSpace(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  return _react2.default.createElement(
    'div',
    { className: className, style: style },
    children
  );
};

FlexibleSpace.displayName = 'AppBar.FlexibleSpace';

exports.default = FlexibleSpace;