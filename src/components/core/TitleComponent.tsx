import React from 'react'

type PropsType = {
    amountOfRepos:number
    title:string
}

const TitleComponent:React.FC<PropsType> = (props) => {
    return (
            <div>{props.title}{props.amountOfRepos}</div>
    )

}
export default TitleComponent