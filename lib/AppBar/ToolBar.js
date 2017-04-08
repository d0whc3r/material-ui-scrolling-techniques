'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _appBar = require('material-ui/lib/app-bar');

var _appBar2 = _interopRequireDefault(_appBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ToolBar = function ToolBar(_ref) {
  var children = _ref.children,
      _ref$zDepth = _ref.zDepth,
      zDepth = _ref$zDepth === undefined ? 0 : _ref$zDepth,
      other = _objectWithoutProperties(_ref, ['children', 'zDepth']);

  return children ? children : _react2.default.createElement(_appBar2.default, _extends({ zDepth: zDepth }, other));
};

ToolBar.displayName = 'AppBar.ToolBar';

exports.default = ToolBar;