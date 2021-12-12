import { call, put } from 'redux-saga/effects';
import * as api from '../../api';
import * as actions from '../actions';

// GET Bảng điểm h/s
export function* getBangDiemStudent(action) {
    try {
        const req = yield call(api.getBangDiem, action.payload);
        if(req.data.key) {
            yield put(actions.getBangDiemsStudent.getBangDiemsStudentSuccess(req.data));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Gặp trục trặc về truy vấn dữ liệu bảng điểm cho hs',
                type: 'info',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.getBangDiemsStudent.getBangDiemsStudentFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// CREATE => GET Bảng điểm h/s
export function* createBangDiem(action) {
    try {
        const reqCreateBangDiem = yield call(api.createBangDiem, action.payload);
        if (reqCreateBangDiem.data.key) {
            yield put(actions.newToastMessage({
                title: 'Thành công!',
                message: 'Đã tạo mới bảng điểm thành công với 13 môn học',
                type: 'success',
            }));
            const req = yield call(api.getBangDiem, action.payload);
            if(req.data.key) {
                yield put(actions.getBangDiemsStudent.getBangDiemsStudentSuccess(req.data));
            }else {
                yield put(actions.newToastMessage({
                    title: 'Thông Tin!',
                    message: 'Gặp trục trặc về truy vấn dữ liệu bảng điểm cho hs',
                    type: 'info',
                }));
            }
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Tạo bảng điểm không thành công',
                type: 'info',
            }));
        }
        
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.getBangDiemsStudent.getBangDiemsStudentFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// UPDATE Bảng điểm h/s
export function* updateBangDiemStudent(action) {
    try {
        const req = yield call(api.updateBangDiem, action.payload);
        if(req.data.key) {
            yield put(actions.newToastMessage({
                title: 'Thành công!',
                message: 'Đã cập nhật lại bảng điểm.',
                type: 'success',
            }));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Không Thành Công - Gặp trục trặc về truy vấn dữ liệu bảng điểm cho hs',
                type: 'info',
            }));
        }
    } catch (error) {
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}