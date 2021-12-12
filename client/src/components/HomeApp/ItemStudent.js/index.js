import React, { useState } from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, Grid, IconButton, Popover, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import { removeVietnameseTones } from '../../../constant';
import Nam from '../../../atset/img/nam.png';
import Nu from '../../../atset/img/nu.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from '../../../redux/actions';
import { userState$ } from '../../../redux/selectors';


function ItemStudent({ hoTen, chucVu, linkPhoto, id }) {

    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const userState = useSelector(userState$);

    const handleClickInfo = () => {
      const newName = removeVietnameseTones(hoTen)
      history.push(`/info-student/${newName}/${id}`);
    }

    const handleSetPhoto = (linkPhoto) => {
      if (linkPhoto === 'matdinhnu') {
        return Nu;
      }else if (linkPhoto === 'matdinhnam') {
        return Nam;
      }else return linkPhoto;
    }

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    const handleDeleteStudent = () => {
      dispatch(deleteStudent.deleteStudentRequest({ mID: id }))      
    }

    const handleUpdateStudent = () => {
      history.push(`setting-student/${id}`);
    }

    return (<Grid item xs={12} sm={6} className={classes.grid}>
    <Card className={classes.card}>
      <CardContent className={classes.cardcontent}>
        <CardHeader
            className={classes.cardheader}
            avatar={
            <Avatar src={handleSetPhoto(linkPhoto)} aria-label="recipe" className={classes.avatar} />
            }
            action={<>
            <IconButton onClick={handleClick} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
              }}
              transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
              }}
            >
              <span className={classes.titleEdit}>{`H/S: ${hoTen}`}</span>

              {
                userState.mGV_PH ? 
                <>
                <Typography 
                  className={classes.typography}
                  onClick={handleUpdateStudent}
                >
                  Sửa H/S Này
                </Typography>
                <Typography 
                  onClick={handleDeleteStudent}
                  className={classes.typography}
                  style={{color: '#f50057'}}
                >
                  Xóa H/S Này
                </Typography>
                </> : 
                <Typography 
                  className={classes.typography}
                  onClick={handleClickInfo}
                >
                  Xem Chi tiết h/s
                </Typography>
              }
              
            </Popover>
            </>}
            title={ hoTen }
            subheader={`Chức vụ: ${chucVu}`}
        />
        <Button 
          className={classes.button} 
          size="small" 
          color="primary"
          onClick={handleClickInfo}
        >
          Xem
        </Button>
      </CardContent>
    </Card>
  </Grid>)
}

export default ItemStudent;