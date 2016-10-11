'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableHead = require('./TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveSortableTable = function (_Component) {
  _inherits(ResponsiveSortableTable, _Component);

  function ResponsiveSortableTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResponsiveSortableTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResponsiveSortableTable.__proto__ || Object.getPrototypeOf(ResponsiveSortableTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sortBy: null,
      sortDirection: 'asc',
      source: _this.props.source || [],
      model: _this.props.model || {}
    }, _this.sortValues = function (source, direction, key) {
      if (direction === 'asc') {
        return source.sort(function (a, b) {
          if (a[key] > b[key]) {
            return 1;
          }
          if (a[key] < b[key]) {
            return -1;
          }
          return 0;
        });
      } else {
        return source.sort(function (a, b) {
          if (a[key] < b[key]) {
            return 1;
          }
          if (a[key] > b[key]) {
            return -1;
          }
          return 0;
        });
      }
    }, _this.onSort = function (key) {
      if (_this.props.model[key].sortable) {
        _this.setState({
          sortBy: key,
          sortDirection: _this.state.sortDirection === 'asc' ? 'desc' : 'asc',
          source: _this.sortValues(_this.state.source, _this.state.sortDirection, key)
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResponsiveSortableTable, [{
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        this.setState({
          source: nextProps.source,
          model: nextProps.model
        });
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'renderHead',
    value: function () {
      function renderHead() {
        // If you wish not to have heading show
        if (this.props.heading) {
          var model = this.props.model;
          var _state = this.state;
          var sortBy = _state.sortBy;
          var sortDirection = _state.sortDirection;

          return _react2['default'].createElement(_TableHead2['default'], {
            model: model,
            sortBy: sortBy,
            sortDirection: sortDirection,
            onSort: this.onSort });
        }
        return null;
      }

      return renderHead;
    }()
  }, {
    key: 'renderBody',
    value: function () {
      function renderBody() {
        var _this2 = this;

        var rows = this.state.source.map(function (data, index) {
          return _react2['default'].createElement(_TableRow2['default'], {
            data: data,
            index: index,
            key: index,
            model: _this2.props.model });
        });

        return _react2['default'].createElement(
          'tbody',
          null,
          rows
        );
      }

      return renderBody;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var className = 'root';
        if (this.props.className) className += ' ' + this.props.className;
        return _react2['default'].createElement(
          'div',
          { className: 'table' },
          _react2['default'].createElement(
            'table',
            { 'data-react-toolbox': 'table', className: className },
            this.renderHead(),
            this.renderBody()
          )
        );
      }

      return render;
    }()
  }]);

  return ResponsiveSortableTable;
}(_react.Component);

ResponsiveSortableTable.propTypes = {
  className: _react.PropTypes.string,
  heading: _react.PropTypes.bool,
  model: _react.PropTypes.object,
  source: _react.PropTypes.array
};
ResponsiveSortableTable.defaultProps = {
  className: '',
  heading: true,
  source: []
};
exports['default'] = ResponsiveSortableTable;