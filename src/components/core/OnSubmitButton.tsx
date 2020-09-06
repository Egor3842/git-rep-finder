import React from 'react'

type PropsType = {
    ShowAmountOfRep:(findGitName:string)=>void
    ShowCurrentRep:(findGitName:string,countOfRepInPage:number, currentPage:number)=>void
    StartAction:(isStarted:boolean)=>void
    findName:string
    countOfRepInPage:number
}
const OnSubmitButton:React.FC<PropsType> = (props) => {
    const ShowInfoAbout = (findGitName: string,countOfRepInPage:number, currentPage: number) => {
        props.StartAction(true);
        props.ShowAmountOfRep(findGitName);
        props.ShowCurrentRep(findGitName,countOfRepInPage, currentPage);
      };
    return (
        <button onClick={() => ShowInfoAbout(props.findName,props.countOfRepInPage, 1)}>Найти</button>
    )
}

export default OnSubmitButton