import { INIT_STATE } from '../../constant';
import { getType, getBangDiemsStudent, createBangDiem, logOut } from '../actions';

function bangdiemReducers(state = INIT_STATE.bangdiems, action) {
    switch (action.type) {
        case getType(getBangDiemsStudent.getBangDiemsStudentRequest):
            return {
                isLoading: true,
                listSubject: [],
                checkSubjectCreate: false,
            }
        case getType(getBangDiemsStudent.getBangDiemsStudentSuccess):
            if(action.payload.key) {
                const { result } = action.payload;
                return {
                    isLoading: false,
                    listSubject: result,
                    checkSubjectCreate: result.length > 0 ? true : false,
                }
            }else{
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(getBangDiemsStudent.getBangDiemsStudentFailure):
            return {
                ...state,
                isLoading: false,
            }
        // case Request create BangDiem
        case getType(createBangDiem): 
            return {
                isLoading: true,
                listSubject: [],
                checkSubjectCreate: false,
            }
        // Update bảng điểm (hiện đã có action và dispatch nhưng chưa cần set State)

        // LOGOUT
        case getType(logOut):
            return {
                isLoading: false,
                listSubject: [],
                checkSubjectCreate: false,
            }
        default: return state;
    }
}

export default bangdiemReducers;