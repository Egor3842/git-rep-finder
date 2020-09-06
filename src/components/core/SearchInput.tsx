import React from 'react'

type PropsType = {
    setCurrentFinderName:(findGitName:string)=>void
    findName:string
    placeholder:string
}

const SearchInput: React.FC<PropsType> = (props) => {

    const setFinderName = (e: any) => {
        props.setCurrentFinderName(e.currentTarget.value);
      };
    return(
        <input value={props.findName} placeholder = {props.placeholder} onChange={setFinderName}></input>
    )
}
export default SearchInput