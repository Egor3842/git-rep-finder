import React from 'react'

type PropType = {
    name:string
    html_url:string
    watchers:number
    forks:number
    stargazers_count:number
}

const RepoInfo:React.FC<PropType> = (props) => {
    return(
        <tr>
                <td>{props.name}</td>
                <td><a href={props.html_url}>{props.html_url}</a></td>
                <td><div>Форки: {props.forks}<br/>Просмотры: {props.watchers}</div></td>
                <td><div>{props.stargazers_count}</div></td>
        </tr>
    )
}

export default RepoInfo