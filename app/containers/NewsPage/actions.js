/*
 *
 * NewsPage actions
 *
 */

import { LOAD_NEWS_INFO } from "./constants";

export function ServerDataLoaded(newsInfo) {
  return {
    type: LOAD_NEWS_INFO,
    newsInfo,
  };
}
