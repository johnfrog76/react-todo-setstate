import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = props => {
    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();
        const d = new Date();
        const newGoal = {
            id: d.getTime().toString(),
            text: enteredText,
            complete: false
        };
        setEnteredText('');
        if (enteredText !== '') {
            props.onAddGoal(newGoal);
        }
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };

    return <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={enteredText} onChange={textChangeHandler} />
        <button type="submit">Add TODO</button>
    </form>;
};


export default NewGoal;