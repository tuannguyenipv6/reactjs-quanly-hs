import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

// Đăng nhập
export const loginUser = createActions({
    loginUserRequest: (payload) => payload,   
    loginUserSuccess: (payload) => payload, 
    loginUserFailure: (err) => err,         
});

// Quên MK
export const forgoUser = createActions({
    forgoUserRequest: (payload) => payload,   
    forgoUserSuccess: (payload) => payload, 
    forgoUserFailure: (err) => err,         
});

// Tạo TK
export const newUser = createActions({
    newUserRequest: (payload) => payload,   
    newUserSuccess: (payload) => payload, 
    newUserFailure: (err) => err,         
});

// Toast Mesage
export const newToastMessage = createAction('NEW_TOAST_MESSAGE', (payload) => payload);
export const setToastMessage = createAction('SET_TOAST_MESSAGE');

// Login
export const loginAccount = createAction('LOGIN_ACCOUNT');
export const signUpAccount = createAction('SIGN_UP_ACCOUNT');
export const signUpAccountTitle = createAction('SIGN_UP_ACCOUNT_TITLE', (payload) => payload);
export const forgetAccount = createAction('FORGET_ACCOUNT');
export const setLoginAccount = createAction('SET_LOGIN_ACCOUNT');

// Modal
export const showModal = createAction('SHOW_MODAL');
export const hideModal = createAction('HIDE_MODAL');
export const changeModalTitle = createAction('CHANGE_MODAL_TITLE', (payload) => payload);
export const changeModalContent = createAction('CHANGE_MODAL_CONTENT', (payload) => payload);

// Get Infodefault
export const getInfodefault = createActions({
    getInfodefaultRequest: (payload) => payload,   
    getInfodefaultSuccess: (payload) => payload, 
    getInfodefaultFailure: (err) => err,         
});

// Set Infodefault
export const setInfodefault = createActions({
    setInfodefaultRequest: (payload) => payload,   
    setInfodefaultSuccess: (payload) => payload, 
    setInfodefaultFailure: (err) => err,         
});

// Upload Image
// export const upLoadImg = createActions({
//     uploadImgRequest: (payload) => payload,   
//     setInfodefaultRequest: (payload) => payload,   
//     setInfodefaultSuccess: (payload) => payload, 
//     setInfodefaultFailure: (err) => err,         
// });
export const upLoadImg = createAction('UPLOAD_IMG_REQUEST', (payload) => payload); //Upload ảnh cho infodefault
export const upLoadImgStudent = createAction('UPLOAD_IMG_REQUEST_STUDENT', (payload) => payload); //Upload ảnh cho student

// GET ListStudent
export const getListStudent = createActions({
    getListStudentRequest: (payload) => payload,   
    getListStudentSuccess: (payload) => payload, 
    getListStudentFailure: (err) => err,         
});

// GET ListStudent Search
export const getListStudentSearch = createActions({
    getListStudentSearchRequest: (payload) => payload,   
    getListStudentSearchSuccess: (payload) => payload, 
    getListStudentSearchFailure: (err) => err,         
});

export const setValueSearch = createAction('SET_VALUE_SEARCH', (payload) => payload);

// GET Student
export const getStudent = createActions({
    getStudentRequest: (payload) => payload,   
    getStudentSuccess: (payload) => payload, 
    getStudentFailure: (err) => err,         
});

// UPDATE Student1, update link fb, ghi chú
export const updateStudent1 = createActions({
    updateStudentRequest: (payload) => payload,   
    updateStudentSuccess: (payload) => payload, 
    updateStudentFailure: (err) => err,         
});

// ADD Student1
export const addStudent1 = createActions({
    addStudentRequest: (payload) => payload,   
    addStudentSuccess: (payload) => payload, 
    addStudentFailure: (err) => err,         
});
// Set from add Student
export const setAddNewStudent = createAction('SET_ADD_NEW_STUDENT');
export const addSuccessStudenReset = createAction('ADD_SUCCESS_STUDENT_RESET');

// ADD Student1
export const deleteStudent = createActions({
    deleteStudentRequest: (payload) => payload,   
    deleteStudentSuccess: (payload) => payload, 
    deleteStudentFailure: (err) => err,         
});

// UPDATE Student (toàn bộ)
export const updateStudent2 = createActions({
    updateStudentRequest2: (payload) => payload,   
    updateStudentSuccess2: (payload) => payload, 
    updateStudentFailure2: (err) => err,         
});
// Upload ảnh
export const upLoadUpdateImgStudent = createAction('UPLOAD_UPDATE_IMG_REQUEST_STUDENT', (payload) => payload);

// GET Bảng điểm hs
export const getBangDiemsStudent = createActions({
    getBangDiemsStudentRequest: (payload) => payload,   
    getBangDiemsStudentSuccess: (payload) => payload, 
    getBangDiemsStudentFailure: (err) => err,         
});
// Tạo mới bảng điểm
export const createBangDiem = createAction('CREATE_BANG_DIEM', (payload) => payload);
// UPDATE BangDiem
// export const updateBangDiemsStudent = createActions({
//     updateBangDiemsStudentRequest: (payload) => payload,   
//     updateBangDiemsStudentSuccess: (payload) => payload, 
//     updateBangDiemsStudentFailure: (err) => err,         
// });
export const updateBangDiemsStudent = createAction('UPDATE_BANG_DIEM_STUDENT', (payload) => payload);

// GET TKB
export const getTKB = createActions({
    getTKBRequest: (payload) => payload,   
    getTKBSuccess: (payload) => payload, 
    getTKBFailure: (err) => err,         
});

// UPDATE AND CREATE TKB
export const updateAndCreateTKB = createAction('UPDATE_AND_CREATE_TKB', (payload) => payload);

// GET TB
export const getTB = createActions({
    getTBRequest: (payload) => payload,   
    getTBSuccess: (payload) => payload, 
    getTBFailure: (err) => err,         
});
// DELETE Thông Báo
export const deleteTB = createActions({
    deleteTBRequest: (payload) => payload,   
    deleteTBSuccess: (payload) => payload, 
    deleteTBFailure: (err) => err,         
});
// ADD Thông Báo
export const addTB = createActions({
    addTBRequest: (payload) => payload,   
    addTBSuccess: (payload) => payload, 
    addTBFailure: (err) => err,         
});
// UPDATE Thông Báo
export const updateTB = createActions({
    updateTBRequest: (payload) => payload,   
    updateTBSuccess: (payload) => payload, 
    updateTBFailure: (err) => err,         
});


// Đăng Xuất
export const logOut = createAction('LOG_OUT');