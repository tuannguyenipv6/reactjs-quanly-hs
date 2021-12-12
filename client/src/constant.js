import AddEdittingStudent from "./components/AddEdittingStudent";
import ChatRoom from "./components/ChatRoom";
import HomeApp from "./components/HomeApp";
import InfoStudent from "./components/HomeApp/InfoStudent.js";
import BangDiem from "./components/HomeApp/InfoStudent.js/DetailsStudent/BangDiems";
import Notyfi from "./components/Notyfi";
import Timetable from "./components/Timetable";

export const INIT_STATE = {
    user: { 
        checkLogin: false,
        taiKhoan: '',
        isLoading: false,
        mMSL: undefined,
        mGV_PH: false,
        checkIsFogoPass: false,
        newUser: false,
    },
    login: {
        key: 1,
        title: 'Đăng nhập tài khoản',
    },
    toast: {
        title: '',
        message: '',
        type: '',
    },
    modal: {
        showModal: false,
        title: '',
        component: null,
    },
    infodefault: {
        photo1: '',
        name: '',
        mail: '',
        phone: '',
        nameClass: '',
    },
    listStudent: {
        isLoading: false,
        listStudent: [],
        search: '',
    },
    student: {
        mMSL: 0,
        mID: 0,
        mLinkPhoto: 'matdinhnam',
        mLinkfb: 'chuaco',
        mHoTen: 'Chưa có',
        mMSHS: 0,
        mNamSinh: '01/01/2000',
        mGioiTinh: 1,
        mDanToc: 'Chưa có',
        mNoiSinh: 'Chưa có',
        mChucVu: 'Chưa có',
        mSDT: 'Chưa có',
        mGhiChu: 'Trống',
        addNewStudent: 0,
    },
    bangdiems: {
        isLoading: false,
        listSubject: [],
        checkSubjectCreate: false,
    },
    tkb: {
        isLoading: false,
        listTKB: [],
    },
    thongBao: {
        isLoading: false,
        listTB: [],
    },
};
 
export const HOME_APP = [
    {
        path: '/',
        name: 'Trang Chủ',
        exact: true,
        component: HomeApp,
    },
    {
        path: '/thong-bao',
        name: 'Thông báo',
        exact: true,
        component: Notyfi,
    },
    {
        path: '/thoi-khoa-bieu',
        name: 'Thời Khóa Biểu',
        exact: true,
        component: Timetable,
    },
    {
        path: '/info-student/:name/:slug',
        name: 'Thông Tin Học Sinh',
        exact: true,
        component: InfoStudent,
    },
    {
        path: '/setting-student/:slug',
        name: 'Thay đổi hoặc thêm mới hs',
        exact: true,
        component: AddEdittingStudent,
    },
    {
        path: '/bang-diem/:slug',
        name: 'Bảng Điểm H/S',
        exact: true,
        component: BangDiem,
    },
    {
        path: '/chat/:uid',
        name: 'Phòng Chát Với Giáo Viên',
        exact: true,
        component: ChatRoom,
    },
];

export const removeVietnameseTones = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    str = str.replace(/ + /g,"-");
    str = str.replace(/ /g,"-");
    str = str.trim();
    return str;
}

export const strToNumber = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,""); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,""); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,""); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,""); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,""); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,""); 
    str = str.replace(/đ/g,"");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "");
    str = str.replace(/Đ/g, "");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    str = str.replace(/ + /g,"");
    str = str.replace(/ /g,"");
    str = str.trim();
    return str;
}