'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _paper = require('material-ui/lib/paper');

var _paper2 = _interopRequireDefault(_paper);

var _toClass = require('recompose/toClass');

var _toClass2 = _interopRequireDefault(_toClass);

var _FlexibleSpace = require('./FlexibleSpace');

var _FlexibleSpace2 = _interopRequireDefault(_FlexibleSpace);

var _TabBar = require('./TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

var _ToolBar = require('./ToolBar');

var _ToolBar2 = _interopRequireDefault(_ToolBar);

var _filterUniqueChildren2 = require('../util/filterUniqueChildren');

var _filterUniqueChildren3 = _interopRequireDefault(_filterUniqueChildren2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  zDepth: 1
};

// Need to swap this out with official root styles from project and theme integration...
var styles = {
  root: {
    zIndex: 1,
    backgroundColor: 'rgb(0, 188, 212)',
    WebkitFontSmoothing: 'antialiased'
  }
};

var AppBar = function AppBar(props) {
  var children = props.children,
      _props$registerBlock = props.registerBlock,
      registerBlock = _props$registerBlock === undefined ? function (elem) {
    return elem;
  } : _props$registerBlock,
      zDepth = props.zDepth,
      other = _objectWithoutProperties(props, ['children', 'registerBlock', 'zDepth']);

  var _filterUniqueChildren = (0, _filterUniqueChildren3.default)(children, _FlexibleSpace2.default.displayName, _TabBar2.default.displayName, _ToolBar2.default.displayName),
      flexibleSpace = _filterUniqueChildren[_FlexibleSpace2.default.displayName],
      tabBar = _filterUniqueChildren[_TabBar2.default.displayName],
      toolBar = _filterUniqueChildren[_ToolBar2.default.displayName];

  // If none of the new supported child components are provided, render the old AppBar as a ToolBar


  var backwardsCompatibleToolBar = !flexibleSpace && !tabBar && !toolBar ? _react2.default.cloneElement(_react2.default.createElement(_ToolBar2.default, { zDepth: zDepth, rounded: false }), other) : toolBar ? _react2.default.cloneElement(toolBar, other) : null;

  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      _paper2.default,
      { ref: function ref(elem) {
          return registerBlock('appBar', elem);
        }, zDepth: zDepth, rounded: false, style: styles.root },
      _react2.default.createElement(
        'div',
        { ref: function ref(elem) {
            return registerBlock('toolBar', elem);
          } },
        backwardsCompatibleToolBar
      ),
      _react2.default.createElement(
        'div',
        { ref: function ref(elem) {
            return registerBlock('flexibleSpace', elem);
          } },
        flexibleSpace
      ),
      _react2.default.createElement(
        'div',
        { ref: function ref(elem) {
            return registerBlock('tabBar', elem);
          } },
        tabBar
      )
    )
  );
};

AppBar.displayName = 'AppBar';
AppBar.defaultProps = defaultProps;

exports.default = (0, _toClass2.default)(AppBar);