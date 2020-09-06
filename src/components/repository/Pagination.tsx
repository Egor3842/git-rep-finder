import React from 'react'
import s from '../../assets/styles/App.module.css';

type PropsType = {
    amountOfRepos:number
    setCurrentPage:(currentPage:number)=>void
    ShowCurrentRep:(findGitName:string,countOfRepInPage:number, currentPage:number)=>void
    findGitName:string
    currentPage:number
    countOfRepInPage:number
}

const Pagination:React.FC<PropsType> = (props) => {
    let PagesArray = [];
    let PagesAmount = Math.ceil(props.amountOfRepos / 10)
    for (let i = 1; i <= PagesAmount; i++) {
      PagesArray.push(i)
    }

    const ShowInfoCurrentClick = (findGitName: string,countOfRepInPage:number, currentPage: number) => {
        props.setCurrentPage(currentPage);
        props.ShowCurrentRep(findGitName,countOfRepInPage, currentPage)
      }
    return (
       <>
          {PagesArray.map(x =>
              <div className={ props.currentPage === x ? s.Pagination_Container_Selected : s.Pagination_Container} 
              onClick={() => ShowInfoCurrentClick(props.findGitName,props.countOfRepInPage, x)}>
                <div className={s.Pagintaion}>{x}</div>
              </div> 
              )}
       </>
    )
}

export default Pagination