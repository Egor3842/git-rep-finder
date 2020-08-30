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

type ActionType = requestFetchingType | FindErrorType | requestRepAmountSuccessType| requestRepInfoSuccessType | 
setCurrentFinderNameType | setCurrentPageType | ShowAmountOfRepType | ShowCurrentRepType | StartActionType

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

type requestFetchingType = {
  type: typeof SET_FETCHING
  isFetching: boolean
}
const requestFetching = (isFetching: boolean): requestFetchingType => {
  return { type: SET_FETCHING, isFetching }
};
type FindErrorType = {
  type: typeof ERROR_REP
  isError: boolean
};
const FindError = (isError: boolean): FindErrorType => {
  return { type: ERROR_REP, isError }
};

type requestRepAmountSuccessType = {
  type: typeof REQUESTED_AMOUNT_OF_SUCCEEDED
  amountOfRepos: number
};
const requestRepAmountSuccess = (amountOfRepos: number): requestRepAmountSuccessType => {
  return { type: REQUESTED_AMOUNT_OF_SUCCEEDED, amountOfRepos }
};

type requestRepInfoSuccessType = {
  type: typeof REQUESTED_INFO_OF_REP_SUCCEEDED
  repositoryInfo:[]
};
const requestRepInfoSuccess = (repositoryInfo: []): requestRepInfoSuccessType => {
  return { type: REQUESTED_INFO_OF_REP_SUCCEEDED, repositoryInfo }
};

type setCurrentFinderNameType = {
  type: typeof SET_FINDED_REP
  findGitName:string
};
export const setCurrentFinderName = (findGitName: string): setCurrentFinderNameType => {
  return { type: SET_FINDED_REP, findGitName }
};

type setCurrentPageType = {
  type:typeof SET_CURRENT_PAGE
  currentPage:number
};
export const setCurrentPage = (currentPage: number): setCurrentPageType => {
  return { type: SET_CURRENT_PAGE, currentPage}
};

type ShowAmountOfRepType = {
  type: typeof REP_AMOUNT
  findGitName:string
};
export const ShowAmountOfRep = (findGitName: string): ShowAmountOfRepType => {
  return { type: REP_AMOUNT, findGitName }
};

type ShowCurrentRepType = {
  type: typeof CURRENT_REP
  findGitName:string
  currentPage: number
};
export const ShowCurrentRep = (findGitName: string, currentPage: number): ShowCurrentRepType => {
  return { type: CURRENT_REP, findGitName, currentPage }
};

type StartActionType = {
  type:typeof STARTED
  isStartedUsing:boolean
}
export const StartAction = (isStartedUsing:boolean):StartActionType =>{
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
