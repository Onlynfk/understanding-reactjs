import React, { Fragment } from 'react'
import AvailableMeals from './AvailableMeals';
import MealSummary from './MealSummary';



function Meals() {
    return (
        <Fragment>
            <MealSummary/>
            <AvailableMeals/>
        </Fragment>
    )
}

export default Meals;
