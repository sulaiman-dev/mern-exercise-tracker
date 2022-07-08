import axios from 'axios'

const fetchExercises = () => {
    axios.get('http://localhost:5000/exercises')
        .then(result => {
            console.log('exercises', result);
        })
        .catch(error => {
            console.log('exercises', error)
        })

}
export default fetchExercises;