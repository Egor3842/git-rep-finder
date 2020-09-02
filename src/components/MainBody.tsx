import React from 'react';
import s from './App.module.css';
import TitleComponent from './TitleComponent';
import AllRepos from './AllRepos';

type PropsType = {
    amountOfRepos:number
    setCurrentPage:(currentPage:number)=>void
    ShowCurrentRep:(findGitName:string, currentPage:number)=>void
    findGitName:string
    currentPage:number
    repositoryInfo:[]
    reposHead:string[]
}

const MainBody: React.FC<PropsType> = (props) =>{
    let PagesArray = [];
    let PagesAmount = Math.ceil(props.amountOfRepos / 10)
    for (let i = 1; i <= PagesAmount; i++) {
      PagesArray.push(i)
    }

    const ShowInfoCurrentClick = (findGitName: string, currentPage: number) => {
        props.setCurrentPage(currentPage);
        props.ShowCurrentRep(findGitName, currentPage)
      }
      
    return(
        <div>
        <TitleComponent amountOfRepos = {props.amountOfRepos}
                        title = {'Общее количество репозиториев:'}/>
        <div className = {s.Table_Container}>
          <AllRepos repositoryInfo = {props.repositoryInfo}
                    reposHead = {props.reposHead}/>
        </div>
        <div className={s.Paginnation_Wrapper}>
          {PagesArray.map(x =>
            props.currentPage === x ?
              <div className={s.Pagination_Container_Selected} onClick={() => ShowInfoCurrentClick(props.findGitName, x)}>
                <div className={s.Pagintaion}>{x}</div>
              </div> :
              <div className={s.Pagination_Container} onClick={() => ShowInfoCurrentClick(props.findGitName, x)}>
                <div className={s.Pagintaion}>{x}</div>
              </div>)}
        </div>
        </div>
    )
} 
export default MainBody