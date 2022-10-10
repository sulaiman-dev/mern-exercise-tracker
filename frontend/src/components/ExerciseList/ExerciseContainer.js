import React, { useState, useEffect } from 'react';
import ExercisesListView from './ExerciseView';
import fetchExercises from './ExerciseLogic'


const ExercisesList = () => {
    const [exercisesList, setExercisesList] = ([]);

    useEffect(() => {
        // Update the document title using the browser API
        fetchExercises();
    }, []);

    return (
        <ExercisesListView />
    )

}
export default ExercisesList