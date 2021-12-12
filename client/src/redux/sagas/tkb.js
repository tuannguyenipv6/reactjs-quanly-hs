import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import * as actions from '../actions';

// GET TKB
export function* getTKB(action) {
    try {
        const req = yield call(api.getTKB, action.payload);
        if(req.data.key) {
            yield put(actions.getTKB.getTKBSuccess(req.data));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Gặp trục trặc về truy vấn dữ liệu bảng Thời Khóa Biểu',
                type: 'info',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.getTKB.getTKBFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// UPDATE AND CREATE TKB
export function* updateAndCreateTKB(action) {
    try {
        const req = yield call(api.updateCreateTKB, action.payload);
        if(req.data.key) {
            const { dMSL } = req.data;
            yield put(actions.hideModal());

            const reqGetTKB = yield call(api.getTKB, { mMSL: dMSL });
            if(reqGetTKB.data.key) {
                yield put(actions.getTKB.getTKBSuccess(reqGetTKB.data));
            }else {
                yield put(actions.newToastMessage({
                    title: 'Thông Tin!',
                    message: 'Gặp trục trặc về truy vấn dữ liệu bảng Thời Khóa Biểu',
                    type: 'info',
                }));
            }
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Gặp trục trặc về truy vấn dữ liệu bảng Thời Khóa Biểu',
                type: 'info',
            }));
        }
    } catch (error) {
        yield put(actions.updateAndCreateTKB.updateAndCreateTKBFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}