import React, { useEffect } from 'react';
import useStyles from './styles';
import { Card, Grid } from '@material-ui/core';
import { listStudent$, student$ } from '../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getStudent, newToastMessage } from '../../../redux/actions';
import DetailsStudent from './DetailsStudent';
import ImgStudent from './ImgStudent';
import NoteStudent from './NoteStudent';

function InfoStudent({match}) {
  
  const listStudent = useSelector(listStudent$);
  const student = useSelector(student$);
  const classes = useStyles();
  const id = match.params.slug;
  const dispatch = useDispatch();

  useEffect(() => {
    const numberid = Number(id)
    const check = listStudent.listStudent.some((student) => {
      return student.id === numberid;
    });

    if(check) {
      dispatch(getStudent.getStudentRequest({ id: numberid}));
    }else {
      dispatch(newToastMessage({
        title: 'Truy vấn thông tin không khớp!',
        message: 'Có thể mã số lớp của bạn không có hs này. Hoặc vui lòng đăng nhập TK.',
        type: 'info',
    }));
    }
  }, [listStudent, id, dispatch])

  return (<Card className={classes.card}>
    <Grid container>
      {/* Image */}
      <ImgStudent img={student.mLinkPhoto} mGioiTinh={student.mGioiTinh} />

      {/* Info */}
      <DetailsStudent student={student} />

      {/* Note */}
      <NoteStudent note={student.mGhiChu} id={student.mID} /> 
    </Grid>
  </Card>)
}

export default InfoStudent;