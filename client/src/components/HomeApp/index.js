import React, { useEffect } from 'react';
import { Fab, Grid } from '@material-ui/core';
import ItemStudent from './ItemStudent.js';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { userState$, listStudent$ } from '../../redux/selectors';
import { getListStudent } from '../../redux/actions/index.js';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

function HomeApp() {

  const classes = useStyles();
  const userState = useSelector(userState$);
  const listStudent = useSelector(listStudent$);
  const dispatch = useDispatch();

  useEffect(() => {
    if(userState.mMSL) {
      dispatch(getListStudent.getListStudentRequest({ mMSL: userState.mMSL}));
    }
  }, [userState, dispatch]);

  return (<Grid container spacing={1}>
    {
      listStudent.listStudent.map(student => <ItemStudent 
        key={student.id} 
        id={student.id} 
        hoTen={student.hoTen} 
        chucVu={student.chucVu}
        linkPhoto={student.linkPhoto}
      />)
    }

    {
      userState.mGV_PH ? 
      <Link to='/setting-student/new-student'>
        <Fab color="secondary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link> : null
    }
  </Grid>)
}

export default HomeApp;