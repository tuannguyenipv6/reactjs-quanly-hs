import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import * as actions from '../actions';

// GET TB
export function* getTB(action) {
    try {
        const req = yield call(api.getTB, action.payload);
        if(req.data.key) {
            yield put(actions.getTB.getTBSuccess(req.data));

            if(req.data.result.length === 0) {
                yield put(actions.newToastMessage({
                    title: 'Thông Tin!',
                    message: 'Chưa có thông báo nào từ GVCN hay phía Nhà trường.',
                    type: 'info',
                }));
            }
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Gặp trục trặc về truy vấn dữ liệu bảng Thông Báo',
                type: 'info',
            }));
        }
    } catch (error) {
        yield put(actions.getTB.getTBFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// DELETE TB
export function* deleteTB(action) {
    try {
        const req = yield call(api.deleteTB, action.payload);
        
        if(req.data.key) {
            yield put(actions.hideModal());

            yield put(actions.deleteTB.deleteTBSuccess(req.data));

            yield put(actions.newToastMessage({
                title: 'Thành Công',
                message: 'Đã xóa thông báo và cập nhật lại dữ liệu',
                type: 'success',
            }));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Gặp trục trặc về truy vấn dữ liệu bảng Thông Báo',
                type: 'info',
            }));
        }
    } catch (error) {
        yield put(actions.deleteTB.deleteTBFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// ADD TB
export function* addTB(action) {
    try {
        const req = yield call(api.addTB, action.payload);
        if(req.data.key) {
            yield put(actions.hideModal());

            yield put(actions.addTB.addTBSuccess(req.data));

            yield put(actions.newToastMessage({
                title: 'Thành Công',
                message: 'Đã thêm thông báo mới',
                type: 'success',
            }));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Gặp trục trặc về truy vấn dữ liệu bảng Thông Báo',
                type: 'info',
            }));
        }
    } catch (error) {
        yield put(actions.addTB.addTBFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// UPDATE TB
export function* updateTB(action) {
    try {
        const req = yield call(api.updateTB, action.payload);
        if(req.data.key) {
            yield put(actions.hideModal());

            yield put(actions.updateTB.updateTBSuccess(req.data));

            yield put(actions.newToastMessage({
                title: 'Thành Công',
                message: 'Đã thay đổi lại thông báo',
                type: 'success',
            }));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Gặp trục trặc về truy vấn dữ liệu bảng Thông Báo',
                type: 'info',
            }));
        }
    } catch (error) {
        console.error('lỗi UPDATE:', error);
        yield put(actions.updateTB.updateTBFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}