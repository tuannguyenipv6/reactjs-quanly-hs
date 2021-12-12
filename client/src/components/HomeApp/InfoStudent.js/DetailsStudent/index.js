import React, { useEffect } from 'react';
import useStyles from './styles';
import { Card, Grid, ButtonGroup, Button, Tooltip, Link, Hidden, Typography, Popover } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, changeModalTitle,changeModalContent, getBangDiemsStudent, createBangDiem, newToastMessage } from '../../../../redux/actions';
import EditClassName from '../../../EditInfoGV';
import { bangDiem$, userState$ } from '../../../../redux/selectors';
import { useHistory } from 'react-router';
import { removeVietnameseTones } from '../../../../constant';

function DetailsStudent({ student }) {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const bangDiem = useSelector(bangDiem$);
  const userState = useSelector(userState$);
  const history = useHistory();

  const handleClickLinkfb = () => {
    const newLink =  student.mLinkfb.slice(0, 8);
    console.log((student.mLinkfb === 'chuaco') || (!newLink.includes('http://') && !newLink.includes('https://') && student.mID > 0))
    if ((student.mLinkfb === 'chuaco') || (!newLink.includes('http://') && !newLink.includes('https://') && student.mID > 0)) {
      if(userState.mGV_PH) {
        dispatch(showModal());
        dispatch(changeModalTitle(`Thay đổi link facebook hs: ${student.mHoTen}`));
        dispatch(changeModalContent(<EditClassName checkKey={6} title='Link fb' dColumn={student.mID} />));
      }else {
        dispatch(newToastMessage({
          title: 'Thông Tin!',
          message: 'Link fb H/S Chưa đc GVCN thiết lập',
          type: 'info',
        }))
      }
    }
  }

  const handleSetLinkFB = () => {
    if(userState.mGV_PH) {
      dispatch(showModal());
      dispatch(changeModalTitle(`Thay đổi link facebook hs: ${student.mHoTen}`));
      dispatch(changeModalContent(<EditClassName checkKey={6} title='Link fb' dColumn={student.mID} />));
    }
  }
   
  const checkLinkfb = (link) => {
    const newLink =  link.slice(0, 8);
    if (newLink.includes('https://') || newLink.includes('http://')) {
      return link;
    }else return null;
  }

  useEffect(() => {
    dispatch(getBangDiemsStudent.getBangDiemsStudentRequest({ mIdStudent: student.mID }));
  }, [dispatch, student])

  const handleClickBangDiem = () => {
    if(bangDiem.checkSubjectCreate) {
      const nameHS = removeVietnameseTones(student.mHoTen);
      history.push(`/bang-diem/${nameHS}`)
    }else {
      if(userState.mGV_PH) {
        dispatch(createBangDiem({ mIdStudent: student.mID }))
      }else {
        dispatch(newToastMessage({
          title: 'Thông Tin!',
          message: 'GVCN Chưa tạo bảng điểm cho H/S này',
          type: 'info',
        }))
      }
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (<Grid item xs={12} sm={8}>
    <div className={classes.wrapper}>
      <Hidden xsDown implementation="css" className={classes.hidden}>
        <h1 className={classes.title}>Chi tiết thông tin học sinh</h1>
      </Hidden>

      <div className={classes.buttonGroup}>
        <ButtonGroup size='large' color='primary' aria-label='large outlined primary button group'>
          <Tooltip title='Bảng Điểm' placement='top'>
            <Button onClick={handleClickBangDiem}>
              <FontAwesomeIcon size='2x' icon={faBook} />
            </Button>
          </Tooltip>
 
          <Tooltip title='Link Facebook' placement='top'>
            {
              userState.mGV_PH ?
              <Button onClick={handleClick}>
                <FontAwesomeIcon size='2x' icon={faFacebookSquare} />
              </Button> : 

              <Button className={classes.btnLink} onClick={handleClickLinkfb}>
                <Link className={classes.link} href={ student.mLinkfb === 'chuaco' ? null : checkLinkfb(student.mLinkfb)}>
                  <FontAwesomeIcon size='2x' icon={faFacebookSquare} />
                </Link>
              </Button>
            }
            
          </Tooltip>
        </ButtonGroup>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          style={{marginTop: 8}}
        >
          <Typography 
            onClick={handleClickLinkfb}
            className={classes.typography}
          >
            <Link href={ student.mLinkfb === 'chuaco' ? null : checkLinkfb(student.mLinkfb)}>
              Truy cập link fb H/S
            </Link>
          </Typography>

          <Typography 
            onClick={handleSetLinkFB}
            className={classes.typography}
          >
            Thay đổi link fb H/S
          </Typography>
        </Popover>
      </div>

      <Card className={classes.cardItem}>
        <h3 className={classes.subheader}>Thông Tin Cơ Bản:</h3>
        
        <div className={classes.listItemInfo}>
          <div className={classes.itemInfo}>
            <h3>Họ Và Tên:</h3>
            <span>{ student.mHoTen }</span>
          </div>
        </div>

        <div className={classes.listItemInfo}>
          <div className={classes.itemInfo}>
            <h3>MSHS:</h3>
            <span>{ student.mMSHS }</span>
          </div>
        </div>

        <div className={classes.listItemInfo}>
          <div className={classes.itemInfo}>
            <h3>Năm Sinh:</h3>
            <span>{ student.mNamSinh }</span>
          </div>
        </div>

        <div className={classes.listItemInfo}>
          <div className={classes.itemInfo}>
            <h3>Nơi Sinh:</h3>
            <span>{ student.mNoiSinh }</span>
          </div>
        </div>

        <div className={classes.listItemInfo}>
          <div className={classes.itemInfo}>
            <h3>Giới Tính:</h3>
            <span>{ student.mGioiTinh === 1 ? 'Nam' : 'Nữ' }</span>
            <span style={{width: 24}}/>
            <h3 style={{minWidth: 24, paddingRight: 4}}>/ Dân Tộc:</h3>
            <span>{ student.mDanToc }</span>
          </div>
        </div>
      </Card>

      <Card className={classes.cardItem}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <h3 className={classes.subheader}>Thông Tin Liên Hệ:</h3>
          
            <div className={classes.listItemInfo}>
              <div className={classes.itemInfo}>
                <h3>SDT P/H:</h3>
                <span>{ student.mSDT }</span>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <h3 className={classes.subheader}>Chức Vụ Trong Lớp:</h3>
          
            <div className={classes.listItemInfo}>
              <div className={classes.itemInfo}>
                <h3>Chức Vụ:</h3>
                <span>{ student.mChucVu }</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  </Grid>)
}

export default DetailsStudent;