'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Split on underscore and uppercase first letters
var humanize = function () {
  function humanize(str) {
    var frags = str.split('_');
    for (var i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

  return humanize;
}();

var TableHead = function () {
  function TableHead(_ref) {
    var model = _ref.model;
    var onSort = _ref.onSort;
    var sortBy = _ref.sortBy;
    var sortDirection = _ref.sortDirection;
    var sortClass = _ref.sortClass;
    var sortUpClass = _ref.sortUpClass;
    var sortDownClass = _ref.sortDownClass;

    var contentCells = Object.keys(model).map(function (key) {
      var classes = (0, _classnames2['default'])({
        'hide-tablet': model[key].hideTablet,
        'hide-mobile': model[key].hideMobile,
        'selectable': model[key].selectable
      });
      var name = model[key].title || key;
      var translatedName = humanize(name);
      var descClass = (0, _classnames2['default'])(sortDownClass || 'fa-icon-sort-down', {
        'hidden': !model[key].sortable || name !== sortBy || sortDirection !== 'desc'
      });
      var ascClass = (0, _classnames2['default'])(sortUpClass || 'fa-icon-sort-up', {
        'hidden': !model[key].sortable || name !== sortBy || sortDirection !== 'asc'
      });
      if (model[key].sortable && name !== sortBy) {
        return _react2['default'].createElement(
          'th',
          { onClick: onSort.bind(undefined, key), className: classes, key: key },
          translatedName,
          _react2['default'].createElement('i', { className: sortClass || 'fa-icon-sort' })
        );
      }
      return _react2['default'].createElement(
        'th',
        { onClick: onSort.bind(undefined, key), className: classes, key: key },
        translatedName,
        _react2['default'].createElement('i', { className: descClass }),
        _react2['default'].createElement('i', { className: ascClass })
      );
    });

    return _react2['default'].createElement(
      'thead',
      null,
      _react2['default'].createElement(
        'tr',
        null,
        [].concat(_toConsumableArray(contentCells))
      )
    );
  }

  return TableHead;
}();

TableHead.propTypes = {
  className: _react.PropTypes.string,
  model: _react.PropTypes.object,
  onSort: _react.PropTypes.func,
  sortBy: _react.PropTypes.string,
  sortDirection: _react.PropTypes.string
};

TableHead.defaultProps = {
  className: '',
  model: {}
};

exports['default'] = TableHead;