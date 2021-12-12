import { INIT_STATE } from '../../constant';
import { getListStudent, getType, deleteStudent, updateStudent2, logOut, getListStudentSearch, setValueSearch } from '../actions';

function listStudentReducers(state = INIT_STATE.listStudent, action) {
    switch (action.type) {
        case getType(getListStudent.getListStudentRequest): 
            return {
                ...state,
                isLoading: true,
            }
        case getType(getListStudent.getListStudentSuccess): 
            const { key, data } = action.payload;
            if(key) {
                return {
                    ...state,
                    isLoading: false,
                    listStudent: data,
                }
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(getListStudent.getListStudentFailure): 
            return {
                ...state,
                isLoading: false,
            }

        // DELETE Student
        case getType(deleteStudent.deleteStudentRequest):
            return {
                ...state,
                isLoading: true,
            } 
        case getType(deleteStudent.deleteStudentSuccess):
            if (action.payload.key) {
                const newList =  state.listStudent.filter(student => {
                    return student.id !== action.payload.mID
                });
                
                return {
                    ...state,
                    listStudent: newList,
                    isLoading: false,
                } 
            }else {
                return {
                    ...state,
                    isLoading: false,
                } 
            }
        case getType(deleteStudent.deleteStudentFailure):
            return {
                ...state,
                isLoading: false,
            }

        // UPDATE Student (toàn bộ)
        case getType(updateStudent2.updateStudentRequest2):
            return {
                ...state,
                isLoading: true,
            }
        case getType(updateStudent2.updateStudentSuccess2):
            const { mID, mHoTen, mChucVu, mLinkPhoto } = action.payload.data;
            if (action.payload.key) {
                const newData = state.listStudent.map(student => {
                    if (student.id === mID) {
                        return {
                            id: student.id,
                            hoTen: mHoTen,
                            chucVu: mChucVu,
                            linkPhoto: mLinkPhoto,
                        }
                    }
                    return student;
                });

                return {
                    ...state,
                    listStudent: newData,
                    isLoading: false,
                }
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(updateStudent2.updateStudentFailure2):
            return {
                ...state,
                isLoading: false,
            }

        // LOGOUT
        case getType(logOut):
            return {
                isLoading: false,
                listStudent: [],
            }
        
        // GET ListStudent Seacrch
        case getType(getListStudentSearch.getListStudentSearchRequest): 
            return {
                ...state,
                isLoading: true,
            }
        case getType(getListStudentSearch.getListStudentSearchSuccess): 
            if(action.payload.key) {
                const { data } = action.payload
                return {
                    ...state,
                    isLoading: false,
                    listStudent: data,
                }
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(getListStudentSearch.getListStudentSearchFailure): 
            return {
                ...state,
                isLoading: false,
            }
        case getType(setValueSearch): 
            return {
                ...state,
                search: action.payload,
            }
        default: return state;
    }
}

export default listStudentReducers;