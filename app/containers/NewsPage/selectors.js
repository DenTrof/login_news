import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the newsPage state domain
 */

const selectNewsPageDomain = state => state.newsPage || initialState;

const makeSelectNewsPage = () =>
  createSelector(
    selectNewsPageDomain,
    substate => substate.toJS()
  );

export default makeSelectNewsPage;
