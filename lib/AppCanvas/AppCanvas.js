'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterUniqueChildren2 = require('../util/filterUniqueChildren');

var _filterUniqueChildren3 = _interopRequireDefault(_filterUniqueChildren2);

var _AppBar = require('../AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _ScrollingTechniques = require('../AppBar/ScrollingTechniques');

var _ScrollingTechniques2 = _interopRequireDefault(_ScrollingTechniques);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppCanvas = function (_Component) {
  _inherits(AppCanvas, _Component);

  function AppCanvas() {
    _classCallCheck(this, AppCanvas);

    return _possibleConstructorReturn(this, (AppCanvas.__proto__ || Object.getPrototypeOf(AppCanvas)).call(this));
  }

  _createClass(AppCanvas, [{
    key: 'render',
    value: function render() {

      var style = {
        height: '100%',
        position: 'relative'
      };

      var _props = this.props,
          children = _props.children,
          scrollingTechniques = _props.scrollingTechniques;

      var _filterUniqueChildren = (0, _filterUniqueChildren3.default)(this.props.children, _AppBar2.default.displayName, _Content2.default.displayName),
          appBar = _filterUniqueChildren[_AppBar2.default.displayName],
          content = _filterUniqueChildren[_Content2.default.displayName];

      var scrollingAppBar = scrollingTechniques ? _react2.default.createElement(
        _ScrollingTechniques2.default,
        { fixed: true },
        appBar
      ) : appBar;

      return _react2.default.createElement(
        'div',
        { style: style },
        scrollingAppBar,
        content
      );
    }
  }]);

  return AppCanvas;
}(_react.Component);

exports.default = AppCanvas;