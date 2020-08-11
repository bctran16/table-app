import React from 'react'; 
import './Button.scss'

const button = (props) => {
    return (
        <button className='add' onClick = {props.click}> Add Entry </button>
    )
}

export default button