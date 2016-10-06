import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class TableRow extends Component {
  static propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
    model: PropTypes.object
  };

  renderCells() {
    return Object.keys(this.props.model).map((key) => {
      const classes = cx({
        'hide-tablet': this.props.model[ key ].hideTablet,
        'hide-mobile': this.props.model[ key ].hideMobile
      });
      return <td className={classes} key={key}>{this.renderCell(key)}</td>;
    });
  }

  renderCell(key) {
    return this.props.data[ key ];
  }

  render() {
    return (
      <tr data-react-toolbox-table='row' className='row'>
        {this.renderCells()}
      </tr>
    );
  }
}

export default TableRow;
