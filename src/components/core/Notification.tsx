import React from 'react'
import s from '../../assets/styles/App.module.css'

type PropsType = {
    notify:string
}
const Notification: React.FC<PropsType>  = (props:any)=> {
    return(
    <div className = {s.notify}>{props.notify}</div>
    )
}

export default Notification