import React from 'react';
import s from './components/App.module.css';
import { connect } from 'react-redux';
import {
  ShowAmountOfRep,
  setCurrentFinderName,
  ShowCurrentRep,
  setCurrentPage,
  StartAction
} from './redux/ActionCreators'
import Preloader from './components/Preloader';
import MainBody from './components/MainBody';
import Header from './components/Header';
import Notification from './components/Notification';
import { AppStateType } from './redux/redux';

type MapStateToPropsType = {
  amountOfRepos: number
  findGitName: string
  currentPage: number
  repositoryInfo: []
  isError: boolean
  isFetching: boolean
  isStartedUsing:boolean
  reposHead:string[]
}
type MapDispatchToProps = {
  setCurrentFinderName: (findGitName: string) => void
  ShowAmountOfRep: (findGitName: string) => void
  setCurrentPage: (currentPage: number) => void
  ShowCurrentRep: (findGitName: string, currentPage: number) => void
  StartAction: (isStartedUsing:boolean)=> void
}

const App: React.FC<MapStateToPropsType & MapDispatchToProps> = (props) => {
  return (

    <div className={s.container}>
      <Header setCurrentFinderName={props.setCurrentFinderName}
        ShowAmountOfRep={props.ShowAmountOfRep}
        ShowCurrentRep={props.ShowCurrentRep}
        findGitName={props.findGitName}
        currentPage={props.currentPage}
        StartAction={props.StartAction} />
      {!props.isStartedUsing ? <Notification notify={'Выполните поиск...'} /> :
        props.isError ?
          <Notification notify={'Данного репозитория не существует'} /> :
          props.isFetching ?
            <Preloader /> :
            <MainBody amountOfRepos={props.amountOfRepos}
              setCurrentPage={props.setCurrentPage}
              ShowCurrentRep={props.ShowCurrentRep}
              findGitName={props.findGitName}
              currentPage={props.currentPage}
              repositoryInfo={props.repositoryInfo}
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
  reposHead:state.Reducer.reposHead
})

export default connect  (MapStateToProps,
  { ShowAmountOfRep, setCurrentFinderName, ShowCurrentRep, setCurrentPage,StartAction })(App);
