import React from 'react';
import './Meal.css';
import {IoBagAddOutline} from 'react-icons/io5'

const Meal = ({meal,addToOrder}) => {
    const {strMeal,strMealThumb,strCategory,idMeal} = meal;
    return (
        <div className='meal-card'>
            <img src={strMealThumb} alt="" />
            <p className='meal-name'>{strMeal}</p>
            <p><small>Category: {strCategory? strCategory: 'No Category Found'}</small></p>
            <button onClick={()=>addToOrder(idMeal)}><IoBagAddOutline></IoBagAddOutline></button>
        </div>
    );
};

export default Meal;