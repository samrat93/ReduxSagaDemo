import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import DeleteDialog from '../DeleteDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 400,
        margin: theme.spacing(2, 0),
        border: '1px solid #26729e',
        borderRadius: '15px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#044182'
    },
    content: {
        fontSize: 16,
        color: '#961ce8'
    },
    editButton: {
        color: '#fff',
        background: '#1c9de8',
        fontWeight: 700,
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: '#7dc5f0'
        }
    },
    deleteButton: {
        color: '#fff',
        borderRadius: '5px',
        fontWeight: 700,
        background: '#f25c69',
        '&:hover': {
            background: '#f59da4'
        }
    }
}));

const Post = (props) => {
    const { post, handleOpen, handleOpenDeleteDialog } = props;
    // console.log('handleOpenDeleteDialog', handleOpen)


    // handleDelete(post.id)
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="primary" gutterBottom>
                        {post.id}
                    </Typography>
                    <Typography className={classes.content} color="textSecondary" gutterBottom>
                        {post.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.editButton} onClick={() => handleOpen(post)} size="small">Edit</Button>
                    <Button className={classes.deleteButton} onClick={() => handleOpenDeleteDialog(post.id)} size="small">Delete</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Post;
