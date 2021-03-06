import { Card, Grid, TextField, Hidden, Radio, Button } from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';
import useStyles from './styles';
import Nam from '../../atset/img/nam.png';
import Nu from '../../atset/img/nu.png';
import { withStyles } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import { userState$, student$, listStudent$ } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent1, setAddNewStudent, upLoadImgStudent, newToastMessage, getStudent, updateStudent2, upLoadUpdateImgStudent } from '../../redux/actions';
import { useHistory } from 'react-router';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);

function AddEdittingStudent({ match }) {

  const userState = useSelector(userState$);
  const student = useSelector(student$);
  const listStudent = useSelector(listStudent$);
  const history = useHistory();
  const classes = useStyles();
  const [valueFile, setValueFile] = useState(undefined);
  const id = match.params.slug;
  const ref = useRef();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    mMSL: userState.mMSL,
    mHoTen: '',
    mMSHS: undefined,
    mNoiSinh: '',
    mNamSinh: '2000-12-30',
    mGioiTinh: 1,
    mDanToc: '',
    mSDT: '',
    mChucVu: '',
    mLinkPhoto: 'matdinhnam',
  });

  useEffect(() => {
    if (id !== 'new-student') {
      if (student) {
        const arrayNamSinh = student.mNamSinh.split('/');
        setData({
          ...student,
          mNamSinh: `${arrayNamSinh[2]}-${arrayNamSinh[1]}-${arrayNamSinh[0]}`,
        })
      }
    }
  }, [student, id])

  useEffect(() => {
    if (id !== 'new-student') {
      const numberid = Number(id)
      const check = listStudent.listStudent.some((student) => {
        return student.id === numberid;
      });

      if(check) {
        dispatch(getStudent.getStudentRequest({ id: numberid}));
      }else {
        dispatch(newToastMessage({
          title: 'Truy v???n th??ng tin kh??ng kh???p!',
          message: 'C?? th??? m?? s??? l???p c???a b???n kh??ng c?? hs n??y. Ho???c vui l??ng ????ng nh???p TK.',
          type: 'info',
      }));
      }
    }
  }, [listStudent, id, dispatch])

  useEffect(() => {
    if (student.addNewStudent > 0) { //TH add th??nh c??ng
      setData({
        mMSL: userState.mMSL,
        mHoTen: '',
        mMSHS: undefined,
        mNoiSinh: '',
        mNamSinh: '2000-12-30',
        mGioiTinh: 1,
        mDanToc: '',
        mSDT: '',
        mChucVu: '',
        mLinkPhoto: 'matdinhnam',
      });
      ref.current.value = "";
      setValueFile(undefined);
      dispatch(setAddNewStudent());
    }else if (student.addNewStudent < 0) {
      history.push('/')
      dispatch(setAddNewStudent());
    }
  }, [student, userState, dispatch, ref, valueFile, history]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = name === 'mGioiTinh' || 
      name === 'mMSHS' ? 
      Number(event.target.value.length < 13 ? event.target.value : event.target.value.slice(0, 12)) : 
      event.target.value
    ;
    
    if (name === 'mGioiTinh') {
      ref.current.value = "";
      setValueFile(undefined);
      setData({...data, [name]: value, mLinkPhoto: value === 1 ? 'matdinhnam' : 'matdinhnu'});
    }else {
      setData({...data, [name]: value});
    }
  };

  const onChangeFile = e => {
    setValueFile(e.target.files[0]);
  }

  const handleOk = () => {
    if (userState.mGV_PH) {
      if (data.mHoTen.trim() && data.mMSHS && data.mNoiSinh.trim() && data.mDanToc.trim() && data.mSDT.trim() && data.mChucVu.trim()) {
        const arrmNamSinh = data.mNamSinh.split('-');
        const newNamSinh = `${arrmNamSinh[2]}/${arrmNamSinh[1]}/${arrmNamSinh[0]}`;
        if (valueFile) { //TH: C?? ???nh
          let formData = new FormData(); 
          formData.append('myFile', valueFile);
  
          const newData = {
            formData,
            data: {
              ...data,
              mNamSinh: newNamSinh,
            }
          }
          if (id === 'new-student') {// TH: th??m m???i student
            dispatch(upLoadImgStudent(newData));
          }else {// TH UPDATE student
            dispatch(upLoadUpdateImgStudent(newData));
          }
          
        }else{ // TH: ???nh m???t ?????nh
          if (id === 'new-student') { //new-student: Th??m h/s
            dispatch(addStudent1.addStudentRequest({
              ...data,
              mNamSinh: newNamSinh,
            }))
          }else {// Ng?????c l???i s???a h/s
            dispatch(updateStudent2.updateStudentRequest2({
              ...data,
              mNamSinh: newNamSinh,
            }));
          }
        }
      }
    }else {
      dispatch(newToastMessage({
        title: 'Th??ng Tin!',
        message: 'Ch??? t??i kho???n GVCN m???i c?? quy???n n??y.',
        type: 'info',
      }))
    }
  }

  return (<Card className={classes.card}>
    <Grid container>
      <Grid item xs={12} sm={12} className={classes.gridHidden}>
        <Hidden smUp implementation='css' className={classes.hidden}>
          <h1 className={classes.title}>Chi ti???t th??ng tin h???c sinh</h1>
        </Hidden>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.gridImg}>
        {
          valueFile === undefined ? 
          <img 
          alt='???nh' 
          src={id === 'new-student' ? data.mGioiTinh === 1 ? Nam : Nu : data.mLinkPhoto !== 'matdinhnam' && data.mLinkPhoto !== 'matdinhnu' ? data.mLinkPhoto : data.mLinkPhoto === 'matdinhnam' ? Nam : Nu} 
          className={classes.img}
          /> : null
        }
        

        <div className={classes.wrapperChoosefile}>
          <h3>Ch???n h??nh ???nh: </h3>
          <input
            type='file'
            ref={ref}
            className={classes.choosefile}
            onChange={onChangeFile}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={8} className={classes.gridDetails} >
        <Hidden xsDown implementation='css' className={classes.hidden}>
          <h1 className={classes.title}>Chi ti???t th??ng tin h???c sinh</h1>
        </Hidden>

        <Card className={classes.cardItem}>
          <h3 className={classes.subheader}>Th??ng Tin C?? B???n:</h3>

          <div className={classes.details}>
            <div className={classes.textFieldInput}>
              <span>H??? V?? T??n:</span>
              <input maxLength={25} type='text' onChange={handleChange} name='mHoTen' value={data.mHoTen} />
            </div>

            <div className={classes.textFieldInput}>
              <span>M?? S??? H/S:</span>
              <input type='number' onChange={handleChange} name='mMSHS' value={data.mMSHS ? data.mMSHS : ''} />
            </div>

            <div className={classes.textFieldInput}>
              <span>N??i Sinh:</span>
              <input maxLength={50} onChange={handleChange} name='mNoiSinh' value={data.mNoiSinh} type='text' />
            </div>

            <div className={classes.textFieldInput}>
              <span>N??m Sinh:</span>
              
              <TextField
                id='date'
                onChange={handleChange}
                name='mNamSinh'
                value={data.mNamSinh}
                type='date'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            {/* PC */}
            <Hidden xsDown implementation='css' className={classes.hidden}>
              <div className={classes.details2}>
                <div style={{marginLeft: 12,}}>
                  <span>Gi???i T??nh:</span>

                  <div className={classes.radioGroup}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span>Nam:</span>
                      <GreenRadio
                        label='Nam'
                        checked={data.mGioiTinh === 1}
                        onChange={handleChange}
                        value={1}
                        name='mGioiTinh'
                        inputProps={{ 'aria-label': 1 }}
                      />
                    </div>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span>N???:</span>
                      <Radio
                        name='mGioiTinh'
                        style={{color: '#F50057'}}
                        checked={data.mGioiTinh === 0}
                        onChange={handleChange}
                        value={0}
                        inputProps={{ 'aria-label': 0 }}
                      />
                    </div>
                  </div>
                </div>

                <div className={classes.textFieldInput}>
                  <h3>D??n t???c:</h3>
                  <input maxLength={15} onChange={handleChange} name='mDanToc' value={data.mDanToc} type='text' />
                </div>
              </div>
            </Hidden>

            {/* Mobile */}
          <Hidden smUp implementation='css' className={classes.hidden}>
            <div style={{marginLeft: 12,}}>
                  <span>Gi???i T??nh:</span>

                  <div className={classes.radioGroup}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span>Nam:</span>
                      <GreenRadio
                        label='Nam'
                        checked={data.mGioiTinh === 1}
                        onChange={handleChange}
                        value={1}
                        name='mGioiTinh'
                        inputProps={{ 'aria-label': 1 }}
                      />
                    </div>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span>N???:</span>
                      <Radio
                        name='mGioiTinh'
                        style={{color: '#F50057'}}
                        checked={data.mGioiTinh === 0}
                        onChange={handleChange}
                        value={0}
                        inputProps={{ 'aria-label': 0 }}
                      />
                    </div>
                  </div>
                </div>

                <div className={classes.textFieldInput}>
                  <h3>D??n t???c:</h3>
                  <input maxLength={15} onChange={handleChange} name='mDanToc' value={data.mDanToc} type='text' />
                </div>
            </Hidden>
          </div>
        </Card>

        {/* PC */}
        <Hidden xsDown implementation='css' className={classes.hidden}>
          <Card className={classes.cardItem}>
            <h3 className={classes.subheader}>Th??ng Tin Li??n H???/ Ch???c V???:</h3>

            <div className={classes.details2}>
              <div className={classes.textFieldInput}>
                <h3>SDT P/H:</h3>
                <input maxLength={13} onChange={handleChange} name='mSDT' value={data.mSDT} type='text' />
              </div>

              <div style={{marginLeft: 60,}} className={classes.textFieldInput}>
                <h3>Ch???c V???:</h3>
                <input maxLength={20} onChange={handleChange} name='mChucVu' value={data.mChucVu} type='text' />
              </div>
            </div>
          </Card>
        </Hidden>
        {/* Mobile */}
        <Hidden smUp implementation='css' className={classes.hidden}>
          <Card className={classes.cardItem}>
            <h3 className={classes.subheader}>Th??ng Tin Li??n H???/ Ch???c V???:</h3>

            <div className={classes.details}>
              <div className={classes.textFieldInput}>
                <h3>SDT P/H:</h3>
                <input maxLength={13} onChange={handleChange} name='mSDT' value={data.mSDT} type='text' />
              </div>

              <div className={classes.textFieldInput}>
                <h3>Ch???c V???:</h3>
                <input maxLength={20} onChange={handleChange} name='mChucVu' value={data.mChucVu} type='text' />
              </div>
            </div>
          </Card>
        </Hidden>
      </Grid>

      <Button 
        className={classes.btnOk}
        variant='outlined'
        color='primary'
        fullWidth
        onClick={handleOk}
      >
        OK
      </Button>
    </Grid>
  </Card>)
}

export default AddEdittingStudent;