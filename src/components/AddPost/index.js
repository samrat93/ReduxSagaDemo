import { TextField, Button } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import * as actionType from "../../redux/actions";

const useStyles = makeStyles({
    root: {
        width: 400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: '10px',
        border: '1px solid #ff5c69',
        borderRadius: '15px',
        padding: '10px'
    },
    addButton: {
        background: '#0750ed',
        color: '#fff',
        fontWeight: 700,
        borderRadius: '5px',
        marginTop: '10px',
        '&:disabled': {
            background: '#c5d6fa',
            color: '#fff'
        },
        '&:hover': {
            background: '#c5d6fa'
        }
    }
});


const AddPost = (props) => {
    const classes = useStyles();
    const { state, handleAddPost, handleStateChange } = props;

    return (
        <div className={classes.root}>
            <TextField
                fullWidth
                placeholder='Write here'
                value={state.text || ''}
                onChange={(e) => handleStateChange({
                    ...state,
                    text: e.target.value
                })} />
            <br />
            <Button className={classes.addButton}
                disabled={state.text === ''}
                onClick={handleAddPost}
            >
                Add
            </Button>
        </div>
    )
}

export default AddPost;