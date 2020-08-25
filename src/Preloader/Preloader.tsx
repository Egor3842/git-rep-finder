import React from 'react';
import preloader from '../img/preloader.gif';
import s from '../components/App.module.css'

const Preloader = ()=>{
    return (
    <div className ={s.Preloader_Container}>
        <img alt = {''} className = {s.preloader} src={preloader}/>
        </div>
    )
}
export default Preloader