import React from 'react';

import './GoalList.css';
import '../GoalItem/GoalItem';
import GoalItem from '../GoalItem/GoalItem';



const GoalList = props => {

    const completeAction = evt => {
        evt.preventDefault();
        evt.target.blur();
        const goalId = evt.target.getAttribute('data-id')
        props.onCompleteGoal(goalId);
    };
    
    const removeAction = evt => {
        evt.preventDefault();
        evt.target.blur();
        const goalId = evt.target.getAttribute('data-id')
        props.onDeleteGoal(goalId)
    };

    // console.log(props.goals);

    return (
        <ul className="goal-list">
            {props.goals.map(goal => {
                return <GoalItem 
                    key={goal.id}
                    id={goal.id}
                    text={goal.text}
                    complete={goal.complete}
                    completeAction={completeAction}
                    removeAction={removeAction}
                />
            })}
        </ul>
    );
};

export default GoalList;