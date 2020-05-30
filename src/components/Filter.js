import React from "react";
import { VisibilityFilters } from "../constants/Filters";
import FilterLink from "../containers/FilterLink";

class Filter extends React.Component {
  render() {
    return (
      <div className="filters">
        <p>Filter: </p>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_DISNEY}>Disney</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_FOOD}>Food</FilterLink>
      </div>
    );
  }
}

export default Filter;
