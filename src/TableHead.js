import React, { PropTypes } from 'react';
import cx from 'classnames';

// Split on underscore and uppercase first letters
const humanize = (str) => {
  const frags = str.split('_');
  for (let i = 0; i < frags.length; i++) {
    frags[ i ] = frags[ i ].charAt(0).toUpperCase() + frags[ i ].slice(1);
  }
  return frags.join(' ');
};

const TableHead = ({
  model,
  onSort,
  sortBy,
  sortDirection
}) => {
  const contentCells = Object.keys(model).map((key) => {
    const classes = cx({
      'hide-tablet': model[ key ].hideTablet,
      'hide-mobile': model[ key ].hideMobile,
      'selectable': model[key].selectable
    });
    const name = model[ key ].title || key;
    const translatedName = humanize(name);
    const descClass = cx('fa-icon-sort-down', {
      'hidden': !model[ key ].sortable || name !== sortBy || sortDirection !== 'desc'
    });
    const ascClass = cx('fa-icon-sort-up', {
      'hidden': !model[ key ].sortable || name !== sortBy || sortDirection !== 'asc'
    });
    if (model[ key ].sortable && name !== sortBy) {
      return (<th onClick={onSort.bind(this, key)} className={classes} key={key}>{translatedName}
        <i className='fa-icon-sort'/>
      </th>);
    }
    return (<th onClick={onSort.bind(this, key)} className={classes} key={key}>{translatedName}
      <i className={descClass} /><i className={ascClass} />
    </th>);
  });

  return (
    <thead>
    <tr>{[ ...contentCells ]}</tr>
    </thead>
  );
};

TableHead.propTypes = {
  className: PropTypes.string,
  model: PropTypes.object,
  onSort: PropTypes.func,
  sortBy: PropTypes.string,
  sortDirection: PropTypes.string
};

TableHead.defaultProps = {
  className: '',
  model: {}
};

export default TableHead;
