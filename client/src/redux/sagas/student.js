import { call, put, delay } from 'redux-saga/effects';
import * as api from '../../api';
import * as actions from '../actions';

// GET ListStudent
export function* getListStudent(action) {
    try {
        const listStudent = yield call(api.getListStudent, action.payload);
        if(listStudent.data.key) {
            yield put(actions.getListStudent.getListStudentSuccess(listStudent.data));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Chưa có dữ liệu về học sinh ở Mã Số Lớp này',
                type: 'info',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.getListStudent.getListStudentFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// GET ListStudent Search
export function* getListStudentSearch(action) {
    try {
        yield put(actions.setValueSearch(action.payload.search));
        yield delay(500);

        const listStudent = yield call(api.getListStudentSearch, action.payload);
        if(listStudent.data.key) {
            yield put(actions.getListStudentSearch.getListStudentSearchSuccess(listStudent.data));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Tin!',
                message: 'Chưa có dữ liệu về học sinh ở Mã Số Lớp này',
                type: 'info',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.getListStudentSearch.getListStudentSearchFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// GET Student 
export function* getStudent(action) {
    try {
        const student = yield call(api.getStudent, action.payload);
        if(student.data.key) {
            yield put(actions.getStudent.getStudentSuccess(student.data.data));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Báo Về Truy Xuất Thông Tin!',
                message: 'Chưa có dữ liệu về học sinh ở Mã Số Lớp này, Hoặc lỗi truy vấn dữ liệu',
                type: 'wrning',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.getStudent.getStudentFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// UPDATE Student, update link fb, ghi chú
export function* updateStudent1(action) {
    try {
        const req = yield call(api.updateStudent1, action.payload);
        if(req.data.key) {
            yield put(actions.updateStudent1.updateStudentSuccess(req.data));

            // Toast mesage
            yield put(actions.newToastMessage({
                title: 'Thành công!',
                message: `Đã đổi mới ${req.data.data.mColumn === 'dGhiChu' ? 'Ghi Chú' : 'Link Fb'}.`,
                type: 'success',
            }));

            // Đóng modal
            yield put(actions.hideModal());
        }else {
            yield put(actions.newToastMessage({
                title: 'Lỗi không xác định!',
                message: 'Không tìm thấy thông tin, Hoặc lỗi hệ thống',
                type: 'wrning',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.updateStudent1.updateStudentFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// ADD Student
export function* addStudent(action) {
    try {
        const req = yield call(api.addStudent1, action.payload);
        if(req.data.key) {
            yield put(actions.addStudent1.addStudentSuccess(req.data));

            // Toast mesage
            yield put(actions.newToastMessage({
                title: 'Thành công!',
                message: `Đã thêm mới H/S: ${req.data.mHoTen}`,
                type: 'success',
            }));
        }else {
            yield put(actions.newToastMessage({
                title: 'Lỗi không xác định!',
                message: 'Không tìm thấy thông tin, Hoặc lỗi hệ thống',
                type: 'wrning',
            }));
        }
    } catch (error) {
        yield put(actions.addStudent1.addStudentFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}
// ADD Student có link image
export function* addStudentLinkImg(action) {
    try {
        const keyUpload = yield call(api.upLoadImg, action.payload.formData);
        if (keyUpload.data.key) {
            const linkImg = api.linkUrl + '/images/' + keyUpload.data.filename;
            const { data } = action.payload;
            const newData = {...data, mLinkPhoto: linkImg}
            // Thêm mới hs có link ảnh
            const req = yield call(api.addStudent1, newData);
            if(req.data.key) {
                yield put(actions.addStudent1.addStudentSuccess(req.data));

                // Toast mesage
                yield put(actions.newToastMessage({
                    title: 'Thành công!',
                    message: `Đã thêm mới H/S: ${req.data.mHoTen}`,
                    type: 'success',
                }));
            }else {
                yield put(actions.newToastMessage({
                    title: 'Lỗi không xác định!',
                    message: 'Không tìm thấy thông tin, Hoặc lỗi hệ thống',
                    type: 'wrning',
                }));
            }
        }else {
            yield put(actions.newToastMessage({
                title: 'Thất bại!',
                message: 'Lỗi tải hình ảnh',
                type: 'wrning',
            }));
        }
    } catch (error) {
        yield put(actions.addStudent1.addStudentFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// DELETE Student update ListStudent
export function* deleteStudent(action) {
    try {
        const req = yield call(api.deleteStudent, action.payload);
        if(req.data.key) {
            yield put(actions.deleteStudent.deleteStudentSuccess(req.data));

            yield put(actions.newToastMessage({
                title: 'Thành công!',
                message: 'Đã xóa thành công học sinh và cập nhật lại danh sách',
                type: 'success',
            }));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Báo!',
                message: 'Cảnh báo xóa học sinh không thành công',
                type: 'wrning',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.deleteStudent.deleteStudentFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi truy cập dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// UPDATE Student update ListStudent
export function* updateStudent2(action) {
    try {
        const req = yield call(api.updateStudent2, action.payload);
        if(req.data.key) {
            yield put(actions.updateStudent2.updateStudentSuccess2(req.data));

            // Update success reset form addEdittingStudent
            yield put(actions.addSuccessStudenReset());
            
            yield put(actions.newToastMessage({
                title: 'Thành công!',
                message: 'Đã đổi mới thông tin học sinh và cập nhật lại d/s',
                type: 'success',
            }));
        }else {
            yield put(actions.newToastMessage({
                title: 'Thông Báo!',
                message: 'Cảnh báo sửa học sinh không thành công',
                type: 'wrning',
            }));
        }
    } catch (error) {
        yield put(actions.updateStudent2.updateStudentFailure2());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi truy cập dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}

// UPDATE Student (toàn bộ) có link image
export function* upImgUpdateStudent2(action) {
    try {
        const keyUpload = yield call(api.upLoadImg, action.payload.formData);
        if (keyUpload.data.key) {
            const linkImg = api.linkUrl + '/images/' + keyUpload.data.filename;
            const { data } = action.payload;
            const newData = {...data, mLinkPhoto: linkImg}

            // Thêm mới hs có link ảnh
            const req = yield call(api.updateStudent2, newData);
            if(req.data.key) {
                yield put(actions.updateStudent2.updateStudentSuccess2(req.data));

                // Update success reset form addEdittingStudent
                yield put(actions.addSuccessStudenReset());
                
                yield put(actions.newToastMessage({
                    title: 'Thành công!',
                    message: 'Đã đổi mới thông tin học sinh và cập nhật lại d/s',
                    type: 'success',
                }));
            }else {
                yield put(actions.newToastMessage({
                    title: 'Thông Báo!',
                    message: 'Cảnh báo sửa học sinh không thành công',
                    type: 'wrning',
                }));
            }
        }
    } catch (error) {
        yield put(actions.updateStudent2.updateStudentFailure2());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: khi truy cập dữ liệu từ server ' + error,
            type: 'error',
        }));   
    }
}