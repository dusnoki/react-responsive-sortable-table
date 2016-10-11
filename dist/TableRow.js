'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRow = function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow() {
    _classCallCheck(this, TableRow);

    return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).apply(this, arguments));
  }

  _createClass(TableRow, [{
    key: 'renderCells',
    value: function () {
      function renderCells() {
        var _this2 = this;

        return Object.keys(this.props.model).map(function (key) {
          var classes = (0, _classnames2['default'])({
            'hide-tablet': _this2.props.model[key].hideTablet,
            'hide-mobile': _this2.props.model[key].hideMobile
          });
          return _react2['default'].createElement(
            'td',
            { className: classes, key: key },
            _this2.renderCell(key)
          );
        });
      }

      return renderCells;
    }()
  }, {
    key: 'renderCell',
    value: function () {
      function renderCell(key) {
        return this.props.data[key];
      }

      return renderCell;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        return _react2['default'].createElement(
          'tr',
          { 'data-react-toolbox-table': 'row', className: 'row' },
          this.renderCells()
        );
      }

      return render;
    }()
  }]);

  return TableRow;
}(_react.Component);

TableRow.propTypes = {
  data: _react.PropTypes.object,
  index: _react.PropTypes.number,
  model: _react.PropTypes.object
};
exports['default'] = TableRow;