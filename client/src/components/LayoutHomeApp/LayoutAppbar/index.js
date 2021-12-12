import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconArrowBack from '@material-ui/icons/ArrowBack';
import IconArrowForward from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Hidden } from '@material-ui/core';
import useStyles from './styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalContent, changeModalTitle, getListStudentSearch, showModal } from '../../../redux/actions';
import EditClassName from '../../EditInfoGV';
import { useHistory } from 'react-router';
import { listStudent$ } from '../../../redux/selectors';

function LayoutAppbar({ handleDrawerToggle, userState, infodefaultState }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const listStudent = useSelector(listStudent$);

    const renderNameAvatar = () => {
        let result = '';
        if (userState.mGV_PH) {
            if (infodefaultState.photo1 !== 'matdinh') {
                result = infodefaultState.photo1 ? '' : userState.taiKhoan?.charAt(0).toUpperCase();
            }else result = userState.taiKhoan?.charAt(0).toUpperCase();
        } else {
            result = userState.taiKhoan?.charAt(0).toUpperCase();
        }
        return result;
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const showModalEditting = (title, key, dColumn) => {
        dispatch(showModal());
        dispatch(changeModalTitle(title));
        dispatch(changeModalContent(<EditClassName checkKey={key} title={title} dColumn={dColumn} />));
    }

    const renderEditInfo = () => {
        let result = null;
        if(userState.mGV_PH) {
            result = (<>
                <span className={classes.titleEditInfo}>Chỉn Sửa Thông Tin GVCN:</span>
                <Typography 
                    onClick={() => showModalEditting('Đặt tên lớp', 1, 'dTenLop')}
                    className={classes.typography}
                >
                    Thay đổi tên lớp
                </Typography>

                <Typography 
                    onClick={() => showModalEditting('Thay đổi ảnh đại diện', 2, 'dPhoto1')}
                    className={classes.typography}
                >
                    Thay đổi ảnh đại diện
                </Typography>

                <Typography 
                    onClick={() => showModalEditting('Thay đổi tên GVCN', 3, 'dName')}
                    className={classes.typography}
                >
                    Thay đổi tên GVCN
                </Typography>

                <Typography 
                    onClick={() => showModalEditting('Thay đổi Gmail', 4, 'dMail')}
                    className={classes.typography}
                >
                    Thay đổi Gmail
                </Typography>

                <Typography 
                    onClick={() => showModalEditting('Thay đổi SDT', 5, 'dSDT')}
                    className={classes.typography}
                >
                    Thay đổi SDT
                </Typography>
            </>)
        }else {
            result = <Typography className={classes.typographyPH}>{'Xin chào: ' + userState.taiKhoan}</Typography>
        }
        return result;
    }

    const onChange = e => {
        const value = e.target.value;
        if(userState.mMSL) {
            const { mMSL } = userState;
            const { pathname } = history.location;
            if(pathname === '/') {
                dispatch(getListStudentSearch.getListStudentSearchRequest({
                    mMSL,
                    search: value,
                }));
            }else {
                history.push('/');
                dispatch(getListStudentSearch.getListStudentSearchRequest({
                    mMSL,
                    search: value,
                }));
            }
            
        }
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>

                <div className={classes.wrapper}>
                    <div className={classes.handleLoadPage}>
                        <IconButton onClick={() => history.goBack()} type="submit" className={classes.iconButton} aria-label="search">
                            <IconArrowBack />
                        </IconButton>

                        <IconButton onClick={() => history.goForward()} type="submit" className={classes.iconButton} aria-label="search">
                            <IconArrowForward />
                        </IconButton>
                    </div>

                    <div className={classes.search}>
                        <input 
                            className={classes.input} 
                            onChange={onChange} 
                            name='search' 
                            value={listStudent.search} 
                            type="text" 
                            placeholder="Nhập tên học sinh tìm kiếm" 
                        />

                        <Hidden xsDown implementation='css'>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                        </Hidden>
                    </div>

                    <div className={classes.avatar}>
                        <IconButton type="submit"aria-label="search" onClick={handleClick}>
                            <Avatar 
                                src={userState.mGV_PH ? infodefaultState.photo1 === 'matdinh' ? null : infodefaultState.photo1 : null}
                            >
                                { renderNameAvatar() }
                            </Avatar>
                        </IconButton> 
                        
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                        >
                            {renderEditInfo()}
                        </Popover>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default LayoutAppbar;