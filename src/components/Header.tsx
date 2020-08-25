import React from 'react';
import s from './App.module.css';

type PropsType = {
          setCurrentFinderName:(findGitName:string)=>void
          ShowAmountOfRep:(findGitName:string)=>void
          ShowCurrentRep:(findGitName:string, currentPage:number)=>void
          StartAction:(isStarted:boolean)=>void
          findGitName:string
          currentPage:number
}

const Header: React.FC<PropsType> = (props)=>{
    const setFinderName = (e: any) => {
        props.setCurrentFinderName(e.currentTarget.value);
      };
      const ShowInfoAbout = (findGitName: string, currentPage: number) => {
        props.StartAction(true);
        props.ShowAmountOfRep(findGitName);
        props.ShowCurrentRep(findGitName, currentPage);
      };
    
    return (
        <div className = {s.Header_Container}>
        <input value={props.findGitName} placeholder = 'Найти...' onChange={setFinderName}></input>
        <button onClick={() => ShowInfoAbout(props.findGitName, props.currentPage)}>Найти</button>
        </div>
    )
}

export default Header