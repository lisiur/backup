import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTER } from '../constants';
import { STATE, TODOS, TODO_ITEM } from '../redux/typings/state';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import { enumEntries, enumKeys } from '../utils/enumUtil';
import store from '../redux/store';

type Props = {
  activeFilter: VISIBILITY_FILTER;
  setFilter: typeof setFilter;
  state: STATE;
};
type State = Readonly<{
  visibilityFilter: VISIBILITY_FILTER;
}>;
class VisibilityFilters extends Component<Props, State> {
  render() {
    console.log(enumKeys(VISIBILITY_FILTER));
    const { setFilter, activeFilter, state } = this.props;
    return (
      <div className="visibility-filters">
        {enumEntries(VISIBILITY_FILTER).map(([filterKey, filterValue]) => {
          return (
            <span
              key={`visibility-filter-${filterValue}`}
              className={cx(
                'filter',
                filterValue === activeFilter && 'filter--active'
              )}
              onClick={() => {
                setFilter(filterValue);
              }}
            >
              {filterKey}
              &nbsp;-&nbsp;
              {getTodosByVisibilityFilter(state, filterValue).length}
            </span>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return { activeFilter: state.visibilityFilter, state: store.getState() };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
