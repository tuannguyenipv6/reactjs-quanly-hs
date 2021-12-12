import axios from 'axios';

const URL = 'http://192.168.43.84:5000';

export const linkUrl = 'http://192.168.43.84:5000';

// Đăng nhập
export const getLoginUser = (payload) => axios.post(`${URL}/user`, payload);

// Quên MK
export const forgoUser = (payload) => axios.post(`${URL}/user/forgo`, payload);

// Tạo TK
export const newUser = (payload) => axios.post(`${URL}/user/new-user`, payload);

// ========== Infodefault ========== //
// Get infodefault
export const getInfodefault = (payload) => axios.post(`${URL}/infodefault`, payload);

// Thay đổi info
export const setInfodefault = (payload) => axios.post(`${URL}/infodefault/set-text-info`, payload);

// ========== upLoad image ========== //
const config = {
    'content-type': 'multipart/form-data',
}
export const upLoadImg = (payload) => axios.post(`${URL}/upload-image`, payload, config);

// ========== ListStudent ========== //
// Get ListStudent
export const getListStudent = (payload) => axios.post(`${URL}/student/list-student`, payload);

// Get ListStudent Search
export const getListStudentSearch = (payload) => axios.post(`${URL}/student/list-student-search`, payload);

// Get Student 
export const getStudent = (payload) => axios.post(`${URL}/student`, payload);

// UPDATE Student (update link fb, ghi chu)
export const updateStudent1 = (payload) => axios.post(`${URL}/student/update-student-one`, payload);

// ADD Student
export const addStudent1 = (payload) => axios.post(`${URL}/student/add-student`, payload);

// DELETE Student
export const deleteStudent = (payload) => axios.post(`${URL}/student/delete-student`, payload);

// UPDATE Student (toàn bộ)
export const updateStudent2 = (payload) => axios.post(`${URL}/student/update-student`, payload);

// GET Bảng Điểm h/s
export const getBangDiem = (payload) => axios.post(`${URL}/bangdiems/check-bang-diem`, payload);

// CREATE Bảng Điểm h/s
export const createBangDiem = (payload) => axios.post(`${URL}/bangdiems/create-bang-diem`, payload);

// UPDATE Bảng Điểm h/s
export const updateBangDiem = (payload) => axios.post(`${URL}/bangdiems/update-bang-diem`, payload);

// GET TKB
export const getTKB = (payload) => axios.post(`${URL}/thoi-khoa-bieu`, payload);

// UPDATE - CREATE TKB
export const updateCreateTKB = (payload) => axios.post(`${URL}/thoi-khoa-bieu/check-update-create`, payload);

// GET Thông Báo
export const getTB = (payload) => axios.post(`${URL}/thong-bao`, payload);

// DELETE Thông Báo
export const deleteTB = (payload) => axios.post(`${URL}/thong-bao/delete`, payload);

// DELETE Thông Báo
export const addTB = (payload) => axios.post(`${URL}/thong-bao/add`, payload);

// UPDATE Thông Báo
export const updateTB = (payload) => axios.post(`${URL}/thong-bao/update`, payload);