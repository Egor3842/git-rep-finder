import React from 'react'

type PropsType = {
    ShowAmountOfRep:(findGitName:string)=>void
    ShowCurrentRep:(findGitName:string, currentPage:number)=>void
    StartAction:(isStarted:boolean)=>void
    findName:string
    currentPage:number
}
const OnSubmitButton:React.FC<PropsType> = (props) => {
    const ShowInfoAbout = (findGitName: string, currentPage: number) => {
        props.StartAction(true);
        props.ShowAmountOfRep(findGitName);
        props.ShowCurrentRep(findGitName, currentPage);
      };
    return (
        <button onClick={() => ShowInfoAbout(props.findName, props.currentPage)}>Найти</button>
    )
}

export default OnSubmitButton