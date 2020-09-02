import React from 'react';
import s from './App.module.css';
import SearchInput from './SearchInput';
import OnSubmitButton from './OnSubmitButton';

type PropsType = {
          setCurrentFinderName:(findGitName:string)=>void
          ShowAmountOfRep:(findGitName:string)=>void
          ShowCurrentRep:(findGitName:string, currentPage:number)=>void
          StartAction:(isStarted:boolean)=>void
          findGitName:string
          currentPage:number
}

const Header: React.FC<PropsType> = (props)=>{
    
      
    
    return (
        <div className = {s.Header_Container}>

        <SearchInput findName = {props.findGitName}
                      setCurrentFinderName = {props.setCurrentFinderName}
                      placeholder = 'Найти...' />

        <OnSubmitButton 
        findName = {props.findGitName} 
        currentPage = {props.currentPage}
        StartAction = {props.StartAction}
        ShowAmountOfRep = {props.ShowAmountOfRep}
        ShowCurrentRep = {props.ShowCurrentRep}/>
        </div>
    )
}

export default Header