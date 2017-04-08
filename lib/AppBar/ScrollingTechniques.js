'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _blockManager = require('../Block/blockManager');

var _blockManager2 = _interopRequireDefault(_blockManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getHeight(elem) {
  return elem.clientHeight;
}

var ScrollingTechniques = function (_Component) {
  _inherits(ScrollingTechniques, _Component);

  function ScrollingTechniques() {
    _classCallCheck(this, ScrollingTechniques);

    var _this = _possibleConstructorReturn(this, (ScrollingTechniques.__proto__ || Object.getPrototypeOf(ScrollingTechniques)).call(this));

    _this.handleScroll = function (event) {
      var currentFrame = _this.getCurrentFrame(event.target.body.scrollTop);
      _this.processFrame(currentFrame);
    };

    _this.getFixedStyle = function () {
      return _this.props.mock ? 'relative' : 'fixed';
    };

    _this.processFrame = function (currentFrame, force) {
      if (!force && (_this.rqf || currentFrame === null || _this.currentFrame === currentFrame)) return;

      _this.rqf = requestAnimationFrame(function () {
        _this.rqf = null;
        _this.currentFrame = currentFrame;

        _this.appBar.style.transition = 'none';
        _this.appBar.style['padding-top'] = _this.state.toolBarHeight + 'px';
        _this.appBar.style.left = '0px';
        _this.appBar.style.right = '0px';

        if (_this.toolBar.style.position !== _this.getFixedStyle()) {
          _this.toolBar.style.position = _this.getFixedStyle();
          _this.toolBar.style.top = '0px';
          _this.toolBar.style.left = '0px';
          _this.toolBar.style.right = '0px';
        }

        if (currentFrame === 0) {
          _this.appBar.style.top = '0px';
          _this.appBar.style.position = 'relative';
          _this.refs.padding.style.height = '0px';

          _this.toolBar.style.bottom = null;
        } else if (currentFrame === 1) {

          _this.appBar.style.top = '0px';
          _this.appBar.style.position = 'relative';

          _this.refs.padding.style.height = '0px';

          _this.toolBar.style.position = 'absolute';
          _this.toolBar.style.top = null;
          _this.toolBar.style.bottom = _this.state.tabBarHeight + 'px';
        } else if (currentFrame === -1) {
          _this.appBar.style.top = '-' + _this.computeFixedOffset(_this.state) + 'px';
          _this.appBar.style.position = _this.getFixedStyle();

          _this.refs.padding.style.height = _this.state.flexibleSpaceHeight + _this.state.toolBarHeight + _this.state.tabBarHeight + 'px';

          _this.toolBar.style.position = 'absolute';
          _this.toolBar.style.top = null;
          _this.toolBar.style.bottom = _this.state.tabBarHeight + 'px';
        }
      });
    };

    _this.getCurrentFrame = function (scrollY) {
      var frames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.frames;

      if (frames === null) return null;
      for (var i = 0; i < frames.length; i++) {
        if (scrollY < frames[i]) return i;
      }
      return -1;
    };

    _this.computeFixedOffset = function (state) {
      return _this.props.fixed ? state.flexibleSpaceHeight : state.flexibleSpaceHeight + state.toolBarHeight + state.tabBarHeight;
    };

    _this.computeFrames = function (state) {
      if (state.flexibleSpaceHeight === -1 || state.toolBarHeight === -1 || state.tabBarHeight === -1) return null;
      return [state.flexibleSpaceHeight, _this.computeFixedOffset(state)];
    };

    _this.registerBlock = function (key, elem) {
      _this[key] = _reactDom2.default.findDOMNode(elem);

      if (elem && _this.state[key + 'Height'] !== getHeight(elem)) {
        _this.setState(function (previousState) {
          var nextState = _extends({}, previousState, _defineProperty({}, key + 'Height', getHeight(elem)));

          var frames = _this.computeFrames(nextState);

          return _extends({}, nextState, {
            frames: frames,
            currentFrame: frames ? _this.getCurrentFrame(window.scrollY, frames) : null
          });
        });
      }
    };

    _this.state = {
      frames: null,
      flexibleSpaceHeight: -1,
      tabBarHeight: -1,
      toolBarHeight: -1
    };
    return _this;
  }

  _createClass(ScrollingTechniques, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      var currentFrame = this.getCurrentFrame(window.scrollY);
      this.processFrame(currentFrame);
      this.refs.scrolling;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.processFrame(this.getCurrentFrame(window.scrollY, nextState.frames), true);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          other = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.cloneElement(children, _extends({}, other, { registerBlock: this.registerBlock })),
        _react2.default.createElement('div', { ref: 'padding' })
      );
    }
  }]);

  return ScrollingTechniques;
}(_react.Component);

ScrollingTechniques.propTypes = {
  children: _react2.default.PropTypes.element.isRequired
};
;

ScrollingTechniques.displayName = 'ScrollingTechniques(AppBar)';

exports.default = ScrollingTechniques;