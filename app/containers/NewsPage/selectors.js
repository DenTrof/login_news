import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the newsPage state domain
 */

const selectNewsPageDomain = state => state.newsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewsPage
 */

const makeSelectNewsPage = () =>
  createSelector(
    selectNewsPageDomain,
    substate => substate.toJS()
  );

export default makeSelectNewsPage;
