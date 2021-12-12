import { INIT_STATE } from '../../constant';
import { getType, getInfodefault, setInfodefault, upLoadImg, logOut } from '../actions';

function infodefaultReducers(state = INIT_STATE.infodefault, action) {
    switch (action.type) {
        // GET
        case getType(getInfodefault.getInfodefaultRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getInfodefault.getInfodefaultSuccess):
            const { dMail, dName, dPhoto1, dSDT, dTenLop } = action.payload.data;
            if (action.payload.key) {
                return {
                    photo1: dPhoto1,
                    name: dName,
                    mail: dMail,
                    phone: dSDT,
                    nameClass: dTenLop ? dTenLop : 'Chưa đặt',
                    isLoading: false,
                }
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(getInfodefault.getInfodefaultFailure):
            return {
                ...state,
                isLoading: false,
            }
        // SET
        case getType(setInfodefault.setInfodefaultRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(setInfodefault.setInfodefaultSuccess):
            const { mColumn, mValue, key } = action.payload;
            if(key) {
                // Cập nhật lại dữ liệu mới ở Client nếu update thành công
                return {
                    photo1: mColumn === 'dPhoto1' ? mValue : state.photo1,
                    name: mColumn === 'dName' ? mValue : state.name,
                    mail: mColumn === 'dMail' ? mValue : state.mail,
                    phone: mColumn === 'dSDT' ? mValue : state.phone,
                    nameClass: mColumn === 'dTenLop' ? mValue : state.nameClass,
                    isLoading: false,
                }
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(setInfodefault.setInfodefaultFailure):
            return {
                ...state,
                isLoading: false,
            }

        // case upload ảnh và set lại link avatar
        case getType(upLoadImg):
            return {
                ...state,
                isLoading: false,
            }
        // case getType(upLoadImg.uploadImgRequest):
        //         return {
        //             ...state,
        //             isLoading: false,
        //         }
        // case getType(upLoadImg.uploadImgRequest):
        //     return {
        //         ...state,
        //         isLoading: false,
        //     }
        // case getType(upLoadImg.uploadImgRequest):
        //     return {
        //         ...state,
        //         isLoading: false,
        //     }
        // LOGOUT
        case getType(logOut):
            return {
                photo1: '',
                name: '',
                mail: '',
                phone: '',
                nameClass: '',
            }
        default: return state;
    }
}

export default infodefaultReducers;