import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState, useRef } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {
    const nameInputRef = useRef(); // replacing useState with refs instead to learn but useState is still a choice and actually
    const ageInputRef = useRef(); // better in this case since we want to manipulate/change the input fields; can use refs though
                                    // if only interested in reading input and not changing it in any way

    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 ){
            setError(
            {
                title: 'Invalid input', 
                message: 'Please enter a valid name and age (non-empty values).'
            }
            );
            return;
        }
        if(+enteredUserAge < 1){ // the plus is a forced conversion of the age string to a number
            setError(
            {
                title: 'Invalid age', 
                message: 'Please enter a valid age (> 0).'
            }
            );
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = ''; // usually not ok to manipulate DOM this way and could just do useState instead
        ageInputRef.current.value = ''; // but we will do this here since using refs in this example
    };


    const errorHandler = () => {
        setError(null);
    };

    return(
        <Wrapper> {/** We used our own Wrapper class here but this does the same thing as wrapping inside <React.Fragment></React.Fragment> or <></>*/}
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;