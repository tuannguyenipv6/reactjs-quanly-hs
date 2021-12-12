import { INIT_STATE } from '../../constant';
import { addTB, deleteTB, getTB, getType, logOut, updateTB } from '../actions';

function thongbaoReducers(state = INIT_STATE.thongBao, action) {
    switch (action.type) {
        // GET TB
        case getType(getTB.getTBRequest):
            return {
                isLoading: true,
                listTB: [],
            }
        case getType(getTB.getTBSuccess):
            if(action.payload.key) {
                return {
                    isLoading: false,
                    listTB: action.payload.result,
                }
            }else {
                return {
                    isLoading: false,
                    listTB: [],
                }
            }
        case getType(getTB.getTBFailure):
            return {
                isLoading: false,
                listTB: [],
            }
        // DELETE Thông Báo
        case getType(deleteTB.deleteTBRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(deleteTB.deleteTBSuccess):
            if(action.payload.key) {
                const { dID } = action.payload;
                const newState = state.listTB.filter(ste => ste.dID !== dID);
                return {
                    listTB: newState,
                    isLoading: false,
                }
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(deleteTB.deleteTBFailure):
            return {
                ...state,
                isLoading: false,
            }
        // ADD Thông Báo
        case getType(addTB.addTBRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(addTB.addTBSuccess):
            if(action.payload.key) {
                const newState = [...state.listTB, action.payload.mThongBao];
                return {
                    listTB: newState,
                    isLoading: false,
                }
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(addTB.addTBFailure):
            return {
                ...state,
                isLoading: false,
            }
        // UPDATE Thông Báo
        case getType(updateTB.updateTBRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(updateTB.updateTBSuccess):
            if(action.payload.key) {
                const { dGV_Truong, dTenTB, dNoiDungTB, dID } = action.payload.newTB;
                const newState = state.listTB.map(ste => {
                    if(ste.dID === dID) {
                        return {
                            ...ste,
                            dNoiDungTB,
                            dTenTB,
                            dGV_Truong
                        }
                    }else {
                        return ste;
                    }
                });
                return {
                    listTB: newState,
                    isLoading: false,
                }
            }else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case getType(updateTB.updateTBFailure):
            return {
                ...state,
                isLoading: false,
            }

        // LOGOUT
        case getType(logOut):
            return {
                isLoading: false,
                listTB: [],
            }
        default: return state;
    }
}

export default thongbaoReducers;