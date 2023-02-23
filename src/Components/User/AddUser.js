import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
            return;
        }
        if(+enteredAge < 1){ // the plus is a forced conversion of the age string to a number
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return(
        <div>
            <ErrorModal title="An error occured!" message="Something went wrong!"></ErrorModal>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;