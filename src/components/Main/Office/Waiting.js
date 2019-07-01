import React from 'react'
import './styles.css';
import people from '../../../assets/peopleIcon.png'
import Icon from '../../Common/Icon'

const Waiting = ({waiting}) =>(
    <div className="waiting">
         <Icon path={people }/>
        <span className="waiting-span">{waiting}</span>
    </div>
);


export default Waiting;