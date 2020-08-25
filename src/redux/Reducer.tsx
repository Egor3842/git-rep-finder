import { put, call, takeEvery } from 'redux-saga/effects';
import { MainApi } from '../MainApi';

type initialStateType = {
  amountOfRepos: number,
  repositoryInfo: [],
  findGitName: string,
  currentPage: number,
  isFetching: boolean,
  isError: boolean,
  isStartedUsing:boolean
}

const initialState: initialStateType = {
  amountOfRepos: 0,
  repositoryInfo: [],
  findGitName: '',
  currentPage: 1,
  isFetching: false,
  isError: false,
  isStartedUsing:false
};

type ActionType = {
  type: string
  amountOfRepos: number
  isFetching: boolean
  findGitName: string
  repositoryInfo: []
  currentPage: number
  isError: boolean
  isStartedUsing:boolean
}

const Reducer = (state = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
    case REQUESTED_AMOUNT_OF_SUCCEEDED:
      return { ...state, amountOfRepos: action.amountOfRepos };
    case SET_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case SET_FINDED_REP: {
      return { ...state, findGitName: action.findGitName }
    }
    case REQUESTED_INFO_OF_REP_SUCCEEDED: {
      return { ...state, repositoryInfo: action.repositoryInfo }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case ERROR_REP: {
      return { ...state, isError: action.isError }
    }
    case STARTED:{
      return {...state, isStartedUsing:action.isStartedUsing}
    }
    default:
      return state;
  }
};

export default Reducer

const REQUESTED_AMOUNT_OF_SUCCEEDED = 'REQUESTED_AMOUNT_OF_SUCCEEDED';
const SET_FETCHING = 'SET_FETCHING';
const SET_FINDED_REP = 'SET_FINDED_REP';
const REQUESTED_INFO_OF_REP_SUCCEEDED = 'REQUESTED_INFO_OF_REP_SUCCEEDED';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const ERROR_REP = 'ERROR_REP';
const REP_AMOUNT = 'REP_AMOUNT';
const CURRENT_REP = 'CURRENT_REP';
const STARTED = 'STARTED'

type ActionTypeType = {
  type: string
  isFetching?: boolean
  isError?: boolean
  findGitName?: string
  currentPage?: number
  amountOfRepos?: number
  repositoryInfo?: []
  isStartedUsing?:boolean

}

const requestFetching = (isFetching: boolean): ActionTypeType => {
  return { type: SET_FETCHING, isFetching }
};
const FindError = (isError: boolean): ActionTypeType => {
  return { type: ERROR_REP, isError }
}
const requestRepAmountSuccess = (amountOfRepos: number): ActionTypeType => {
  return { type: REQUESTED_AMOUNT_OF_SUCCEEDED, amountOfRepos }
};
const requestRepInfoSuccess = (repositoryInfo: []): ActionTypeType => {
  return { type: REQUESTED_INFO_OF_REP_SUCCEEDED, repositoryInfo }
};
export const setCurrentFinderName = (findGitName: string): ActionTypeType => {
  return { type: SET_FINDED_REP, findGitName }
}
export const setCurrentPage = (currentPage: number): ActionTypeType => {
  return { type: SET_CURRENT_PAGE, currentPage }
}

export const ShowAmountOfRep = (findGitName: string): ActionTypeType => {
  return { type: REP_AMOUNT, findGitName }
};
export const ShowCurrentRep = (findGitName: string, currentPage: number): ActionTypeType => {
  return { type: CURRENT_REP, findGitName, currentPage }
};

export const StartAction = (isStartedUsing:boolean):ActionTypeType =>{
  return {type:STARTED, isStartedUsing}
}

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
