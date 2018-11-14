import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTERS } from '../constants';

type Props = {
  activeFilter: string;
  setFilter: typeof setFilter;
};
type State = Readonly<{
  visibilityFilter: string;
}>;
class VisibilityFilters extends Component<Props, State> {
  render() {
    return (
      <div className="visibility-filters">
        {Object.values(VISIBILITY_FILTERS).map(filterValue => {
          return (
            <span
              key={`visibility-filter-${filterValue}`}
              className={cx(
                'filter',
                filterValue === this.props.activeFilter && 'filter--active'
              )}
              onClick={() => {
                this.props.setFilter(filterValue);
              }}
            >
              {filterValue}
            </span>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
