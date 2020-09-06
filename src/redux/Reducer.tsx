import { SET_FETCHING, ERROR_REP, REQUESTED_AMOUNT_OF_SUCCEEDED, REQUESTED_INFO_OF_REP_SUCCEEDED, SET_FINDED_REP, SET_CURRENT_PAGE, STARTED } from './Constants';
import { ActionType } from './ActionTypes';

type initialStateType = {
  amountOfRepos: number,
  repositoryInfo: [],
  findGitName: string,
  currentPage: number,
  isFetching: boolean,
  isError: boolean,
  isStartedUsing:boolean,
  reposHead:string[],
  countOfRepInPage:number
}

const initialState: initialStateType = {
  amountOfRepos: 0,
  repositoryInfo: [],
  findGitName: '',
  currentPage: 1,
  isFetching: false,
  isError: false,
  isStartedUsing:false,
  reposHead: ['Название репозитория','URL резопизория','Количество форков и просмотров','Количество звезд'],
  countOfRepInPage:10
};


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


