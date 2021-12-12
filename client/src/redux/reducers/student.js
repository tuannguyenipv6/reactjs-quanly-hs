import { INIT_STATE } from '../../constant';
import { getType, getStudent, updateStudent1, addStudent1, setAddNewStudent, addSuccessStudenReset, logOut } from '../actions';

function studentReducers(state = INIT_STATE.student, action) {
    switch (action.type) {
        case getType(getStudent.getStudentRequest):
            return { 
                ...state,
                isLoading: true,
            }
        case getType(getStudent.getStudentSuccess):
            const { 
                dChucVu, dDanToc, dGhiChu, dGioiTinh, dHoTen, dID, dMSL,
                dLinkPhoto, dLinkfb, dMSHS, dNamSinh, dNoiSinh, dSdtPh 
            } = action.payload;
            return {
                ...state,
                mMSL: dMSL,
                mID: dID,
                mLinkPhoto: dLinkPhoto,
                mLinkfb: dLinkfb,
                mHoTen: dHoTen,
                mMSHS: dMSHS,
                mNamSinh: dNamSinh,
                mGioiTinh: dGioiTinh,
                mDanToc: dDanToc,
                mNoiSinh: dNoiSinh,
                mChucVu: dChucVu,
                mSDT: dSdtPh,
                mGhiChu: dGhiChu,
                isLoading: false,
            } 
        case getType(getStudent.getStudentFailure):
            return {
                ...state,
                isLoading: false,
            } 

        // Update Link fb, ghi Chú
        case getType(updateStudent1.updateStudentRequest):
            return { 
                ...state,
                isLoading: true,
            }
        case getType(updateStudent1.updateStudentSuccess):
            const { key, data } = action.payload;
            if (key) {
                return {
                    ...state,
                    mLinkfb: data.mColumn === 'dLinkfb' ? data.mValue : state.mGhiChu,
                    mGhiChu: data.mColumn === 'dGhiChu' ? data.mValue : state.mGhiChu,
                    
                    isLoading: false,
                } 
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(updateStudent1.updateStudentFailure):
            return {
                ...state,
                isLoading: false,
            } 
        
        // Add Student
        case getType(addStudent1.addStudentRequest):
            return {
                ...state,
                isLoading: true,
            } 
        case getType(addStudent1.addStudentSuccess):
            return {
                ...state,
                addNewStudent: 1,
                isLoading: false,
            } 
        case getType(addStudent1.addStudentFailure):
            return {
                ...state,
                isLoading: false,
            }
        case getType(setAddNewStudent): 
            return {
                ...state,
                addNewStudent: 0,
            }
        // Update thành công Student
        case getType(addSuccessStudenReset): 
            return {
                ...state,
                addNewStudent: -1,
            }

        // LOGOUT
        case getType(logOut):
            return {
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
            }
        default: return state;
    }
}

export default studentReducers;