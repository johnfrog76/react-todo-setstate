import React, { useState } from 'react';

import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
    {id: 'todo1', text: 'Learn about useState', complete: false},
    {id: 'todo2', text: 'Learn new things', complete: false},
    {id: 'todo3', text: 'Help my friends', complete: false}
  ]);

  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevGoals) => prevGoals.concat(newGoal));
  };

  const deleteGoalHandler = goalId => {
    const goalList = courseGoals.filter(item => item.id !== goalId);
    setCourseGoals(goalList)
  };

  const completeGoalHandler = goalId => {
    const goalList = courseGoals.map((item, index) => {
      if (item.id === goalId) {
        item.complete = !item.complete;
      }
      return item;
    });
    setCourseGoals(goalList);
  };

  return (
    <div className="course-goals">
      <h2>My TODOs</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      {courseGoals.length === 0 && (<p className="empty">You have no TODOs</p>)}
      {courseGoals.length > 0 && (
        <GoalList
          goals={courseGoals}
          onDeleteGoal={deleteGoalHandler}
          onCompleteGoal={completeGoalHandler}
        />
      )}
    </div>
  );  
};

export default App;
