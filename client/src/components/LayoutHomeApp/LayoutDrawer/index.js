import React, { useCallback, useEffect, useMemo, useState } from 'react';
import IconHome from '@material-ui/icons/Home';
import IconMenuBook from '@material-ui/icons/MenuBook';
import IconNotifications from '@material-ui/icons/Notifications';
import IconContacts from '@material-ui/icons/Contacts';
import IconForum from '@material-ui/icons/Forum';
import IconExitToApp from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, setLoginAccount } from '../../../redux/actions';
import useStyles from './styles';
import { Link, Route } from 'react-router-dom';
import { changeModalContent, changeModalTitle, showModal } from '../../../redux/actions';
import ContactGV from '../../ContactGV';
import ModalChatGVCN from './ModalChatGVCN';
import { userState$ } from '../../../redux/selectors';
import useFirestore from '../../../hooks/useFirestore';
import { Popover } from '@material-ui/core';
import ChatRoomGV from './ChatRoomGV';

function LayoutDrawer({ name, nameClass }){

    const MyLink = ({ label, to, Icon }) => {
        const classes = useStyles();
        return (
          <Route path={to} exact={true} children={( match ) => {
              let active = match.match ? classes.itemActive : '';
              return (
                <Link to={to} >
                  <button className={classes.item + ' ' + active}>
                    {Icon}
                    <span className={classes.itemName}>{label}</span>
                  </button>
                </Link>
              )
          }}/>
        )
    }

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const userState = useSelector(userState$);
    const [uid, setUid] = useState('');
    const [listUID, setListUID] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    const condition = useMemo(() => ({
        fieldName: 'mMembers',
        operator: 'array-contains',
        compareValue: userState.taiKhoan,
    }), [userState]);

    const rooms = useFirestore('rooms', condition);
    useEffect(() => {
        if(userState.checkLogin && rooms.length > 0) {
            if (userState.mGV_PH) {
                const listUID = rooms.map(idMember => {
                    return {
                        mName: idMember.mName,
                        mID: idMember.id,
                    }
                });
                setListUID(listUID);
            }else {
                setUid(rooms[0].id);
            }
        }
    }, [rooms, userState]);

    const handleLogout = useCallback(() => {
        dispatch(setLoginAccount());
        dispatch(logOut());
        history.push('/login')
    }, [dispatch, history]);

    const handleInfoGV = () => {
        dispatch(showModal());
        dispatch(changeModalTitle(`Lớp: ${nameClass}`));
        dispatch(changeModalContent(<ContactGV />));
    }

    // Tạo phòng chát
    const handleCreateRooms = () => {
        dispatch(showModal());
        dispatch(changeModalTitle('Bạn muốn thực hiện'));
        dispatch(changeModalContent(<ModalChatGVCN mMSL={userState.mMSL} />));
    }

    // Chat rooms
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<div>
        <div className={classes.header}>
            <div onClick={() => history.push('/')} className={classes.title}>
                <span style={{color: 'rgb(65, 238, 30)'}}>S</span>
                <span style={{color: '#099DDC'}}>T</span>
                <span style={{color: '#F47B20'}}>U</span>
                <span style={{color: 'red'}}>D</span>
                <span style={{color: '#FFF'}}>E</span>
                <span style={{color: '#EE2B74'}}>N</span>
                <span style={{color: 'rgb(65, 238, 30)'}}>T</span>
            </div>
        </div>

        <div className={classes.wrapperListItem}>
            <MyLink Icon={<IconHome />} label='Trang Chủ' to='/' />
            <MyLink Icon={<IconMenuBook />} label='Thời Khóa Biểu' to='/thoi-khoa-bieu' />
            <MyLink Icon={<IconNotifications />} label='Thông báo' to='/thong-bao' />
        </div>
        <div className={classes.wrapperContactGV}>
            <h3>GVCN:</h3>

            <button onClick={handleInfoGV} style={{marginBottom: 8}} className={classes.item}>
                <IconContacts />
                <span className={classes.itemName}>{ name }</span> 
            </button>

            {
                userState.mGV_PH ? 
                <button onClick={(e) => setAnchorEl(e.currentTarget)} style={{marginBottom: 8}} className={classes.item}>
                    <IconForum />
                    <span className={classes.itemName}>Tin Nhắn</span> 
                </button>
                :
                uid ? 
                <MyLink Icon={<IconForum />} label='Chát Với GVCN' to={`/chat/${uid}`} /> 
                : 
                <button onClick={handleCreateRooms} style={{marginBottom: 8}} className={classes.item}>
                    <IconForum />
                    <span className={classes.itemName}>Chát Với GVCN</span> 
                </button>
            }
            
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
            >
                <ChatRoomGV listUID={listUID} />
            </Popover>
            

        </div>

        <div className={classes.wrapperLogout}>
            <button onClick={handleLogout} className={classes.item}>
                <IconExitToApp />
                <span className={classes.itemName}>Đăng xuất</span>
            </button>
        </div>
    </div>)
};

export default LayoutDrawer;