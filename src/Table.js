import React, { Component, PropTypes } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
require('./styles/_index.css');

class ResponsiveSortableTable extends Component {
  state = {
    sortBy: null,
    sortDirection: 'asc',
    source: this.props.source || [],
    model: this.props.model || {}
  };
  static propTypes = {
    className: PropTypes.string,
    heading: PropTypes.bool,
    model: PropTypes.object,
    source: PropTypes.array
  };

  static defaultProps = {
    className: '',
    heading: true,
    source: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      source: nextProps.source,
      model: nextProps.model
    });
  }

  sortValues = (source, direction, key) => {
    if (direction === 'asc') {
      return (source.sort((a, b) => {
        if (a[ key ] > b[ key ]) {
          return 1;
        }
        if (a[ key ] < b[ key ]) {
          return -1;
        }
        return 0;
      }));
    } else {
      return (source.sort((a, b) => {
        if (a[ key ] < b[ key ]) {
          return 1;
        }
        if (a[ key ] > b[ key ]) {
          return -1;
        }
        return 0;
      }));
    }
  };

  onSort = (key) => {
    if (this.props.model[ key ].sortable) {
      this.setState({
        sortBy: key,
        sortDirection: this.state.sortDirection === 'asc' ? 'desc' : 'asc',
        source: this.sortValues(this.state.source, this.state.sortDirection, key)
      });
    }
  };

  renderHead() {
    // If you wish not to have heading show
    if (this.props.heading) {
      const { model } = this.props;
      const { sortBy, sortDirection } = this.state;
      return (
        <TableHead
          model={model}
          sortBy={sortBy}
          sortDirection={sortDirection}
          onSort={this.onSort}/>
      );
    }
    return null;
  }

  renderBody() {
    const rows = this.state.source.map((data, index) => {
      return (
        <TableRow
          data={data}
          index={index}
          key={index}
          model={this.props.model}/>
      );
    });

    return <tbody>{rows}</tbody>;
  }

  render() {
    let className = 'root';
    if (this.props.className) className += ` ${this.props.className}`;
    return (
      <div className='table'>
        <table data-react-toolbox='table' className={className}>
          {this.renderHead()}
          {this.renderBody()}
        </table>
      </div>
    );
  }
}

export default ResponsiveSortableTable;
