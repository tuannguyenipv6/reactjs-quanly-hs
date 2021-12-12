import { combineReducers } from 'redux';
import user from './user';
import toast from './toast';
import login from './login';
import modal from './modal';
import infodefault from './infodefault';
import listStudent from './listStudent';
import student from './student';
import bangdiems from './bangdiems';
import tkb from './tkb';
import thongBao from './thongbao';

export default combineReducers({
    user,
    login,
    toast,
    modal,
    infodefault,
    listStudent,
    student,
    bangdiems,
    tkb,
    thongBao,
});