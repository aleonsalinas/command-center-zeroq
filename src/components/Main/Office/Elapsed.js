import React from 'react'
import './styles.css';
import clock from '../../../assets/clockIcon.png'
import Icon from '../../Common/Icon'

const Elapsed = ({elapsed}) =>(
    <div className="elapsed">
        <Icon path={clock}/>
        <span className="elapsed-span">{elapsed}</span>
    </div>
);


export default Elapsed;
