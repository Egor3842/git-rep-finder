import { put, call, takeEvery } from 'redux-saga/effects';
import { MainApi } from '../API/MainApi';
import { setCurrentPage, requestRepAmountSuccess, FindError, requestFetching, requestRepInfoSuccess } from './ActionCreators';
import { REP_AMOUNT, CURRENT_REP } from './Constants';

type GetInfoRepAmountAsyncType = {
    type: string
    findGitName: string
  }
  function* GetInfoRepAmountAsync(action: GetInfoRepAmountAsyncType) {
    try {
      yield put(setCurrentPage(1))
      const data = yield call(MainApi.takeAmountofRep, action.findGitName);
      yield put(requestRepAmountSuccess(data.public_repos));
    } catch (error) {
      yield put(FindError(true));
    }
  }
  
  type GetRepositoriesInfoAsyncType = {
    type: string
    findGitName: string
    currentPage: number
  }
  function* GetRepositoriesInfoAsync(action: GetRepositoriesInfoAsyncType) {
    try {
      yield put(requestFetching(true));
      yield put(FindError(false));
      const data = yield call(MainApi.takeRepInfo, action.findGitName, action.currentPage);
      yield put(requestRepInfoSuccess(data));
      yield put(requestFetching(false));
    } catch (error) {
      yield put(requestFetching(false));
      yield put(FindError(true));
    }
  }
  
  
  export function* RequestAxios() {
    yield takeEvery(REP_AMOUNT, GetInfoRepAmountAsync);
    yield takeEvery(CURRENT_REP, GetRepositoriesInfoAsync);
  
  }