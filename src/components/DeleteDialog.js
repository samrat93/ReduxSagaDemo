import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { Typography } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

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
        '&:hover': {
            background: '#c5d6fa'
        }
    },
    buttonContainer: {
        borderTop: '1px solid #eb4034'
    },
    modelHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'right'
    }
}));


export const DeleteDialog = (props) => {
    const classes = useStyles();
    const { openDialog, closeDialog, handleDelete, userId } = props;

    const handleDeleteDone = () => {
        handleDelete(userId)
        closeDialog()
    }

    return (
        <div>
            <Dialog classes={{ paper: classes.root }} open={openDialog} onClose={closeDialog}>
                <div className={classes.modelHead}>
                    <CloseIcon color='error' onClick={closeDialog} sx={{ paddingRight: '5px' }} fontSize='large' />

                </div>

                <DialogContent>
                    <Typography>Are you sure want to delete this?</Typography>
                </DialogContent>
                <DialogActions className={classes.buttonContainer}>
                    <Button className={classes.saveButton} onClick={closeDialog} size="small" >
                        Cancel
                    </Button>
                    <Button className={classes.cancelButton} onClick={handleDeleteDone} size="small" >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteDialog;
