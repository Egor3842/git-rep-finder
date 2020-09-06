import React from 'react';
import s from '../../assets/styles/App.module.css';
import SearchInput from '../core/SearchInput';
import OnSubmitButton from '../core/OnSubmitButton';

type PropsType = {
          setCurrentFinderName:(findGitName:string)=>void
          ShowAmountOfRep:(findGitName:string)=>void
          ShowCurrentRep:(findGitName:string,countOfRepInPage:number, currentPage:number)=>void
          StartAction:(isStarted:boolean)=>void
          findGitName:string
          currentPage:number
          countOfRepInPage:number
}

const Header: React.FC<PropsType> = (props)=>{
    
      
    
    return (
        <div className = {s.Header_Container}>

        <SearchInput findName = {props.findGitName}
                      setCurrentFinderName = {props.setCurrentFinderName}
                      placeholder = 'Найти...' />

        <OnSubmitButton 
        findName = {props.findGitName} 
        StartAction = {props.StartAction}
        ShowAmountOfRep = {props.ShowAmountOfRep}
        countOfRepInPage = {props.countOfRepInPage}
        ShowCurrentRep = {props.ShowCurrentRep}/>
        </div>
    )
}

export default Header