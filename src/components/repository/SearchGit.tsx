import React from 'react';
import s from '../../assets/styles/App.module.css';
import TitleComponent from '../core/TitleComponent';
import AllRepos from './AllRepos';
import Pagination from './Pagination';

type PropsType = {
    amountOfRepos:number
    setCurrentPage:(currentPage:number)=>void
    ShowCurrentRep:(findGitName:string, countOfRepInPage:number, currentPage:number)=>void
    findGitName:string
    currentPage:number
    repositoryInfo:[]
    reposHead:string[]
    countOfRepInPage:number
}

const SearchGit: React.FC<PropsType> = (props) =>{
   
      
    return(
        <div>
        <TitleComponent amountOfRepos = {props.amountOfRepos}
                        title = {'Общее количество репозиториев:'}/>
        <div className = {s.Table_Container}>
          <AllRepos repositoryInfo = {props.repositoryInfo}
                    reposHead = {props.reposHead}/>
        </div>
        <div className={s.Paginnation_Wrapper}>
          <Pagination setCurrentPage = {props.setCurrentPage}
                      ShowCurrentRep = {props.ShowCurrentRep}
                      amountOfRepos = {props.amountOfRepos}
                      currentPage = {props.currentPage}
                      countOfRepInPage = {props.countOfRepInPage}
                      findGitName = {props.findGitName}/>
        </div>
        </div>
    )
} 
export default SearchGit