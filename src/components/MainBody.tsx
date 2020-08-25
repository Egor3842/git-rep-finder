import React from 'react';
import s from './App.module.css';

type PropsType = {
    amountOfRepos:number
    setCurrentPage:(currentPage:number)=>void
    ShowCurrentRep:(findGitName:string, currentPage:number)=>void
    findGitName:string
    currentPage:number
    repositoryInfo:[]
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
        <div>Общее количество репозиториев:{props.amountOfRepos}</div>
        <div className = {s.Table_Container}>
        <table>
          <thead>
            <tr>
              <td>Название репозитория</td>
              <td>URL резопизория</td>
              <td>Количество форков и просмотров</td>
              <td>Количество звезд</td>
            </tr>
          </thead>
          <tbody>
            {props.repositoryInfo.map((x: any) =>
              <tr>
                <td>{x.name}</td>
                <td><a href={x.html_url}>{x.html_url}</a></td>
                <td><div>Форки: {x.forks}<br/>Просмотры: {x.watchers}</div></td>
                <td><div>{x.stargazers_count}</div></td>
              </tr>
            )}
          </tbody>
        </table>
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