import React from "react";
import {Link} from 'react-router-dom';
import s from './styles/Landing.module.css';
import img from '../resources/img_landing.png'

export default function Landing(){
    return(
        <div className={s.container}>
            <img src={img} alt='img not found' className={s.image}/>
            <Link to='/recipes'className={s.enter}><p className={s.p}>Let's Cook!</p></Link>
        </div>
    )
}