'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// style={{marginTop: 10}}
var Content = function Content(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'main',
    null,
    children
  );
};

Content.displayName = 'AppCanvas.Content';

exports.default = Content;