/*
 *
 * NewsPage reducer
 *
 */
import { fromJS } from 'immutable';
import { LOAD_NEWS_INFO } from "./constants";

export const initialState = fromJS({
  newsInfo: [{},],
});

  function newsPageReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD_NEWS_INFO:
        return state.set('newsInfo', action.newsInfo);
      default:
        return state;
    }
  }

export default newsPageReducer;
