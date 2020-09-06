import { SET_FETCHING, ERROR_REP, REQUESTED_AMOUNT_OF_SUCCEEDED, REQUESTED_INFO_OF_REP_SUCCEEDED, SET_FINDED_REP, SET_CURRENT_PAGE, REP_AMOUNT, CURRENT_REP, STARTED } from './Constants';

export type requestFetchingType = {
    type: typeof SET_FETCHING
    isFetching: boolean
  }
export type FindErrorType = {
    type: typeof ERROR_REP
    isError: boolean
  };
export type requestRepAmountSuccessType = {
    type: typeof REQUESTED_AMOUNT_OF_SUCCEEDED
    amountOfRepos: number
  };
export type requestRepInfoSuccessType = {
    type: typeof REQUESTED_INFO_OF_REP_SUCCEEDED
    repositoryInfo:[]
  };
export type setCurrentFinderNameType = {
    type: typeof SET_FINDED_REP
    findGitName:string
  };
export type setCurrentPageType = {
    type:typeof SET_CURRENT_PAGE
    currentPage:number
  };
export type ShowAmountOfRepType = {
    type: typeof REP_AMOUNT
    findGitName:string
  };
export type ShowCurrentRepType = {
    type: typeof CURRENT_REP
    findGitName:string
    countOfRepInPage:number
    currentPage: number
  };
export type StartActionType = {
    type:typeof STARTED
    isStartedUsing:boolean
  }
  export type ActionType = requestFetchingType | FindErrorType | requestRepAmountSuccessType| requestRepInfoSuccessType | 
setCurrentFinderNameType | setCurrentPageType | ShowAmountOfRepType | ShowCurrentRepType | StartActionType