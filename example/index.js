import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../src';
require('../dist/_index.css');

const tableModel = {
  code: { type: Number, hideTablet: true, sortable: true },
  middle: { type: Number, hideTablet: true },
  buying: { type: Number, hideMobile: true },
  selling: { type: Number, sortable: true },
  updated: { type: String, sortable: false }
};

const tableValues = [
  {
    'code': 978,
    'middle': 123.3362,
    'buying': 121.3362,
    'selling': 124.3362,
    'updated': '2016-08-10'
  },
  {
    'code': 840,
    'middle': 110.3362,
    'buying': 111.3362,
    'selling': 112.33621,
    'updated': '2016-08-10'
  },
  {
    'code': 348,
    'middle': 30.3362,
    'buying': 31.3362,
    'selling': 32.3362,
    'updated': '2016-08-10'
  }
];
ReactDOM.render(
  <Table model={tableModel}
         source={tableValues} />, document.getElementById('app'));
