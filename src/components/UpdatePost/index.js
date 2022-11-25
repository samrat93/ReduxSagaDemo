import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 500,
        borderRadius: '20px'
    },
    cancelButton: {
        color: '#fff',
        borderRadius: '5px',
        fontWeight: 700,
        background: '#f25c69',
        '&:hover': {
            background: '#f59da4'
        }
    },
    saveButton: {
        background: '#0750ed',
        color: '#fff',
        fontWeight: 700,
        borderRadius: '5px',
        '&:disabled': {
            background: '#c5d6fa',
            color: '#fff'
        },
        '&:hover': {
            background: '#c5d6fa'
        }
    }
}));


export const UpdatePostDialog = (props) => {
    const classes = useStyles();
    const { openDialog, handleClose, handleSave, handlePostChange } = props;
    return (
        <div>
            <Dialog classes={{ paper: classes.root }} open={openDialog.open} onClose={handleClose}>
                <DialogTitle>Update post</DialogTitle>
                <DialogContent>
                    <TextField
                        value={openDialog.post.text}
                        onChange={(e) => handlePostChange(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Post"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button className={classes.cancelButton} onClick={handleClose} size="small" >
                        Cancel
                    </Button>
                    <Button className={classes.saveButton} disabled={openDialog.post.text === ''} onClick={handleSave} size="small" >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UpdatePostDialog;
