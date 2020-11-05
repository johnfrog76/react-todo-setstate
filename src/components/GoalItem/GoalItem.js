import React from 'react';

import './GoalItem.css';

const GoalItem = props => {

    return (
        <li key={props.id} className={!props.complete ? 'li-todo' : 'li-complete'}>
            <span className={props.complete === true ? 'completed' : 'notcomplete'}>{props.text}</span>
            <div className="btn-wrap">
                <button
                    data-id={props.id}
                    className="btn-action btn-remove"
                    onClick={props.removeAction}
                >remove
                </button>
                <button
                    data-id={props.id}
                    className="btn-action btn-complete"
                    onClick={props.completeAction}
                >{!props.complete ? 'complete' : 'reset'}
                </button>
            </div>
        </li>
    );
};

export default GoalItem;