import React from 'react';
import Button from '../Button/Button'
import './MyTable.scss'

const table = (props) => {
    return (
        <div>
            <table>
                <thead> 
                    <tr>
                        <th> Date </th>
                        <th>Description </th>
                        <th> Amount </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((elem) => {
                        return (
                            <tr key={elem.date}>
                                <td> {elem.date}</td>
                                <td> {elem.description}</td>
                                <td> {elem.amount}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>

            </table>
            <Button click={props.click}> Add Entry</Button>

        </div>
    );
}

export default table;