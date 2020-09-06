import React from 'react';
import s from '../../assets/styles/App.module.css';
import { connect } from 'react-redux';
import {
  ShowAmountOfRep,
  setCurrentFinderName,
  ShowCurrentRep,
  setCurrentPage,
  StartAction
} from '../../redux/ActionCreators'
import Preloader from '../core/Preloader';
import SearchGit from '../repository/SearchGit';
import Header from '../repository/Header';
import Notification from '../core/Notification';
import { AppStateType } from '../../redux/redux';

type MapStateToPropsType = {
  amountOfRepos: number
  findGitName: string
  currentPage: number
  repositoryInfo: []
  isError: boolean
  isFetching: boolean
  isStartedUsing:boolean
  reposHead:string[]
  countOfRepInPage:number
}
type MapDispatchToProps = {
  setCurrentFinderName: (findGitName: string) => void
  ShowAmountOfRep: (findGitName: string) => void
  setCurrentPage: (currentPage: number) => void
  ShowCurrentRep: (findGitName: string,countOfRepInPage:number, currentPage: number) => void
  StartAction: (isStartedUsing:boolean)=> void
}

const SearchGitPage: React.FC<MapStateToPropsType & MapDispatchToProps> = (props) => {
  return (

    <div className={s.container}>
      <Header setCurrentFinderName={props.setCurrentFinderName}
        ShowAmountOfRep={props.ShowAmountOfRep}
        ShowCurrentRep={props.ShowCurrentRep}
        countOfRepInPage={props.countOfRepInPage}
        findGitName={props.findGitName}
        currentPage={props.currentPage}
        StartAction={props.StartAction} />
      {!props.isStartedUsing ? <Notification notify={'Выполните поиск...'} /> :
        props.isError ?
          <Notification notify={'Данной организации не существует'} /> :
          props.isFetching ?
            <Preloader /> :
            <SearchGit amountOfRepos={props.amountOfRepos}
              setCurrentPage={props.setCurrentPage}
              ShowCurrentRep={props.ShowCurrentRep}
              findGitName={props.findGitName}
              currentPage={props.currentPage}
              repositoryInfo={props.repositoryInfo}
              countOfRepInPage={props.countOfRepInPage}
              reposHead = {props.reposHead} />
      }
    </div>
  );
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  amountOfRepos: state.Reducer.amountOfRepos,
  isFetching: state.Reducer.isFetching,
  findGitName: state.Reducer.findGitName,
  repositoryInfo: state.Reducer.repositoryInfo,
  currentPage: state.Reducer.currentPage,
  isError: state.Reducer.isError,
  isStartedUsing: state.Reducer.isStartedUsing,
  reposHead:state.Reducer.reposHead,
  countOfRepInPage:state.Reducer.countOfRepInPage
})

export default connect  (MapStateToProps,
  { ShowAmountOfRep, setCurrentFinderName, ShowCurrentRep, setCurrentPage,StartAction })(SearchGitPage);
