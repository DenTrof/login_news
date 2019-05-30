import { put } from 'redux-saga/effects';
import axios from 'axios';
import { ServerDataLoaded } from './actions';

export default function* newsPageSaga() {
  try {
    const newsInfo = yield axios.get('http://www.mocky.io/v2/5cef97a13000001b303cd152');
    yield put(ServerDataLoaded(newsInfo.data.articles));
  } catch (err) {
    console.log(err);
  }
}
