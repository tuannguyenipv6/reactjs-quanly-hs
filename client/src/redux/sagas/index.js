import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from '../../api';
import * as actions from '../actions';
import { createBangDiem, getBangDiemStudent, updateBangDiemStudent } from './bangdiems';
import { addStudent, addStudentLinkImg, deleteStudent, getListStudent, getStudent, updateStudent2, updateStudent1, upImgUpdateStudent2, getListStudentSearch } from './student';
import { addTB, deleteTB, getTB, updateTB } from './thongbao';
import { getTKB, updateAndCreateTKB } from './tkb';


// Đăng nhập Login
function* loginUser(action) {
    try {
        const user = yield call(api.getLoginUser, action.payload);
        yield put(actions.loginUser.loginUserSuccess(user.data));
        if(user.data.key){
            yield put(actions.newToastMessage({
                title: 'Xin chào: ' + user.data.taiKhoan + '!',
                message: 'Đăng nhập thành công',
                type: 'success',
            }));
            // yield put(actions);
        }else {
            yield put(actions.newToastMessage({
                title: 'Đăng nhập thất bại!',
                message: 'Sai thông tin tài khoản.',
                type: 'wrning',
            }));
        }
    } catch (error) {
        yield put(actions.loginUser.loginUserFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: ' + error,
            type: 'error',
        }));   
    }
}

// Quên MK Login
function* forgoUser(action) {
    try {
        const user = yield call(api.forgoUser, action.payload);
        yield put(actions.forgoUser.forgoUserSuccess(user.data));
        if(user.data.key) {
            yield put(actions.newToastMessage({
                title: 'Thành công!',
                message: 'Đã xác lập thành công mật khẩu mới',
                type: 'success',
            }));
            yield put(actions.loginAccount());
        }else {
            yield put(actions.newToastMessage({
                title: 'Không thành công!',
                message: 'Sai thông tin tài khoản.',
                type: 'wrning',
            }));
        }
    } catch (error) {
        yield put(actions.forgoUser.forgoUserFailure());   
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: ' + error,
            type: 'error',
        }));         
    }
}

// Tạo TK Login
function* newUser(action) {
    try {
        const user = yield call(api.newUser, action.payload);
        yield put(actions.newUser.newUserSuccess(user.data));
        if(user.data.key) {
            if(user.data.taiKhoan) {
                yield put(actions.newToastMessage({
                    title: 'Xin chào: ' + user.data.taiKhoan,
                    message: 'Tạo tài khoản thành công!',
                    type: 'success',
                }));
                yield put(actions.loginAccount());
            }else {
                yield put(actions.newToastMessage({
                    title: 'Có lỗi xãy ra!',
                    message: 'Lỗi: ' + user.data.err ? user.data.err : 'Hệ thống',
                    type: 'wrning',
                }));
            }
        }else {
            if(user.data.resultValue){
                yield put(actions.newToastMessage({
                    title: 'Không thành công!',
                    message: user.data.resultValue,
                    type: 'wrning',
                }));
            }else {
                yield put(actions.newToastMessage({
                    title: 'Không thành công!',
                    message: 'Tài khoản đã tồn tại',
                    type: 'wrning',
                }));
            }
        }
    } catch (error) {
        yield put(actions.newUser.newUserFailure());   
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: ' + error,
            type: 'error',
        }));         
    }
}

// ===================  Infodefault ================= //
// get infodefault
function* getInfo(action) {
    try {
        const info = yield call(api.getInfodefault, action.payload);
        // Call thành công thì put Success
        yield put(actions.getInfodefault.getInfodefaultSuccess(info.data));
        if(!info.data.key){
            // Nếu key trả về false
            yield put(actions.newToastMessage({
                title: 'Load data từ server thất bại!',
                message: 'Có thể dữ liệu cho tài khoản này chưa được tạo',
                type: 'wrning',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.getInfodefault.getInfodefaultFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: ' + error,
            type: 'error',
        }));   
    }
}

// set infodefault
function* setInfo(action) {
    try {
        const info = yield call(api.setInfodefault, action.payload);
        // Call thành công thì put Success
        yield put(actions.setInfodefault.setInfodefaultSuccess(info.data));
        if(info.data.key){
            // Nếu key trả về true
            yield put(actions.newToastMessage({
                title: 'Thành công!',
                message: 'Dữ liệu mới đã được cập nhật lại thành công.',
                type: 'success',
            }));
            // Đóng modal
            yield put(actions.hideModal());
        }else {
            yield put(actions.newToastMessage({
                title: 'Thất bại!',
                message: 'Có thể dữ liệu cho Mã số lớp này chưa được tạo',
                type: 'wrning',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.setInfodefault.setInfodefaultFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: ' + error,
            type: 'error',
        }));   
    }
}

// upload ảnh
// function* uploadImage(action) {
//     try {
//         const keyUpload = yield call(api.upLoadImg, action.payload.formData);
//         if(keyUpload.data.key) {
//             const linkImg = api.linkUrl + '/images/' + keyUpload.data.filename;

//             const { mMSL, mColumn } = action.payload.data;
//             const data = {
//                 mMSL,
//                 mColumn,
//                 mValue: linkImg,
//             };

//             const info = yield call(api.setInfodefault, data);

//             yield put(actions.setInfodefault.setInfodefaultSuccess(info.data));
//             if(info.data.key){
//                 // Nếu key trả về true
//                 yield put(actions.newToastMessage({
//                     title: 'Thành công!',
//                     message: 'Dữ liệu mới đã được cập nhật lại thành công.',
//                     type: 'success',
//                 }));
//                 // Đóng modal
//                 yield put(actions.hideModal());
//             }else {
//                 yield put(actions.newToastMessage({
//                     title: 'Thất bại!',
//                     message: 'Có thể dữ liệu cho Mã số lớp này chưa được tạo',
//                     type: 'wrning',
//                 }));
//             }
//         }else {
//             yield put(actions.newToastMessage({
//                 title: 'Thông báo!',
//                 message: 'Tác vụ không mong muốn: ' + keyUpload ? JSON.stringify(keyUpload) : '...',
//                 type: 'wrning',
//             }));   
//         }
//     } catch (error) {
//         // Call thất bại thì put error
//         yield put(actions.upLoadImg.setInfodefaultFailure());      
//         yield put(actions.newToastMessage({
//             title: 'Có lỗi xãy ra!',
//             message: 'Lỗi: ' + error,
//             type: 'error',
//         }));   
//     }
// }
function* uploadImage(action) {
    try {
        const keyUpload = yield call(api.upLoadImg, action.payload.formData);
        if(keyUpload.data.key) {
            const linkImg = api.linkUrl + '/images/' + keyUpload.data.filename;

            const { mMSL, mColumn } = action.payload.data;
            const data = {
                mMSL,
                mColumn,
                mValue: linkImg,
            };

            const info = yield call(api.setInfodefault, data);
            yield put(actions.setInfodefault.setInfodefaultSuccess(info.data));
            if(info.data.key){
                // Nếu key trả về true
                yield put(actions.newToastMessage({
                    title: 'Thành công!',
                    message: 'Dữ liệu mới đã được cập nhật lại thành công.',
                    type: 'success',
                }));
                // Đóng modal
                yield put(actions.hideModal());
            }else {
                yield put(actions.newToastMessage({
                    title: 'Thất bại!',
                    message: 'Có thể dữ liệu cho Mã số lớp này chưa được tạo',
                    type: 'wrning',
                }));
            }
        } else {
            yield put(actions.newToastMessage({
                title: 'Thất bại!',
                message: 'Lỗi tải hình ảnh',
                type: 'wrning',
            }));
        }
    } catch (error) {
        // Call thất bại thì put error
        yield put(actions.setInfodefault.setInfodefaultFailure());      
        yield put(actions.newToastMessage({
            title: 'Có lỗi xãy ra!',
            message: 'Lỗi: vui lòng chọn ảnh ' + error,
            type: 'error',
        }));   
    }
}

// Get List Student
// function* getListStudent(action) {
//     try {
//         const listStudent = yield call(api.getListStudent, action.payload);
//         if(listStudent.data.key) {
//             yield put(actions.getListStudent.getListStudentSuccess(listStudent.data));
//         }else {
//             yield put(actions.newToastMessage({
//                 title: 'Thông Tin!',
//                 message: 'Chưa có dữ liệu về học sinh ở Mã Số Lớp này',
//                 type: 'info',
//             }));
//         }
//     } catch (error) {
//         // Call thất bại thì put error
//         yield put(actions.getListStudent.getListStudentFailure());      
//         yield put(actions.newToastMessage({
//             title: 'Có lỗi xãy ra!',
//             message: 'Lỗi: khi lấy dữ liệu từ server ' + error,
//             type: 'error',
//         }));   
//     }
// }


function* mySaga() {
    // user
    yield takeLatest(actions.loginUser.loginUserRequest, loginUser);//Đăng nhập
    yield takeLatest(actions.forgoUser.forgoUserRequest, forgoUser);//Quên MK
    yield takeLatest(actions.newUser.newUserRequest, newUser);//Tạo TK

    // infodefault
    yield takeLatest(actions.getInfodefault.getInfodefaultRequest, getInfo);//Get infodefault
    yield takeLatest(actions.setInfodefault.setInfodefaultRequest, setInfo);//Set infodefault

    // upload ảnh và set avatar info
    // yield takeLatest(actions.upLoadImg.uploadImgRequest, uploadImage);//Set infodefault
    yield takeLatest(actions.upLoadImg, uploadImage);//Set infodefault
 
    // student 
    yield takeLatest(actions.getListStudent.getListStudentRequest, getListStudent);// Get List Student
    yield takeLatest(actions.getListStudentSearch.getListStudentSearchRequest, getListStudentSearch);// Get List Student Search
    yield takeLatest(actions.getStudent.getStudentRequest, getStudent);// Get Student
    yield takeLatest(actions.updateStudent1.updateStudentRequest, updateStudent1);// Upadte link fb, ghi chú
    yield takeLatest(actions.addStudent1.addStudentRequest, addStudent);// Add Student
    yield takeLatest(actions.upLoadImgStudent, addStudentLinkImg);// Add Student có link image
    yield takeLatest(actions.deleteStudent.deleteStudentRequest, deleteStudent);// Delete Student cập nhật listStudent
    yield takeLatest(actions.updateStudent2.updateStudentRequest2, updateStudent2);// Update Student (tất cả)
    yield takeLatest(actions.upLoadUpdateImgStudent, upImgUpdateStudent2);// Update Student có link image

    // Bảng điểm
    yield takeLatest(actions.getBangDiemsStudent.getBangDiemsStudentRequest, getBangDiemStudent);// GET Bảng Điểm H/S
    yield takeLatest(actions.createBangDiem, createBangDiem);// CREATE => GET Bảng Điểm H/S
    yield takeLatest(actions.updateBangDiemsStudent, updateBangDiemStudent);// UPDATE Bảng Điểm H/S

    // Thời Khóa Biểu
    yield takeLatest(actions.getTKB.getTKBRequest, getTKB);// GET TKB
    yield takeLatest(actions.updateAndCreateTKB, updateAndCreateTKB);// UPDATE AND CREATE TKB

    // Thông báo
    yield takeLatest(actions.getTB.getTBRequest, getTB);// GET TKB
    yield takeLatest(actions.deleteTB.deleteTBRequest, deleteTB);// DELETE TKB
    yield takeLatest(actions.addTB.addTBRequest, addTB);// DELETE TKB
    yield takeLatest(actions.updateTB.updateTBRequest, updateTB);// UPDATE TKB
}

export default mySaga;
