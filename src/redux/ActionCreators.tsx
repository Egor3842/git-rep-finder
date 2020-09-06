import { SET_FETCHING, ERROR_REP, REQUESTED_AMOUNT_OF_SUCCEEDED, REQUESTED_INFO_OF_REP_SUCCEEDED, SET_FINDED_REP, SET_CURRENT_PAGE, REP_AMOUNT, CURRENT_REP, STARTED } from './Constants';
import { requestFetchingType, FindErrorType, requestRepAmountSuccessType, requestRepInfoSuccessType, setCurrentFinderNameType, setCurrentPageType, ShowAmountOfRepType, ShowCurrentRepType, StartActionType } from './ActionTypes';


  export const requestFetching = (isFetching: boolean): requestFetchingType => {
    return { type: SET_FETCHING, isFetching }
  };
  
  export const FindError = (isError: boolean): FindErrorType => {
    return { type: ERROR_REP, isError }
  };
  
  
  export const requestRepAmountSuccess = (amountOfRepos: number): requestRepAmountSuccessType => {
    return { type: REQUESTED_AMOUNT_OF_SUCCEEDED, amountOfRepos }
  };
  
  
  export const requestRepInfoSuccess = (repositoryInfo: []): requestRepInfoSuccessType => {
    return { type: REQUESTED_INFO_OF_REP_SUCCEEDED, repositoryInfo }
  };
  
  
  export const setCurrentFinderName = (findGitName: string): setCurrentFinderNameType => {
    return { type: SET_FINDED_REP, findGitName }
  };
  
  
  export const setCurrentPage = (currentPage: number): setCurrentPageType => {
    return { type: SET_CURRENT_PAGE, currentPage}
  };
  
  
  export const ShowAmountOfRep = (findGitName: string): ShowAmountOfRepType => {
    return { type: REP_AMOUNT, findGitName }
  };
  
  
  export const ShowCurrentRep = (findGitName: string,countOfRepInPage:number, currentPage: number): ShowCurrentRepType => {
    return { type: CURRENT_REP, findGitName,countOfRepInPage, currentPage }
  };
  
  
  export const StartAction = (isStartedUsing:boolean):StartActionType =>{
    return {type:STARTED, isStartedUsing}
  }
  