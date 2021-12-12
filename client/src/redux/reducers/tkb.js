import { INIT_STATE } from '../../constant';
import { getTKB, getType, logOut, updateAndCreateTKB } from '../actions';

function tkbReducers(state = INIT_STATE.tkb, action) {
    switch (action.type) {
        // GET TKB
        case getType(getTKB.getTKBRequest):
            return {
                isLoading: true,
                listTKB: [],
            }
        case getType(getTKB.getTKBSuccess):
            if(action.payload.key) {
                return {
                    isLoading: false,
                    listTKB: action.payload.arrayTKB,
                }
            }else {
                return {
                    isLoading: false,
                    listTKB: [],
                }
            }
        case getType(getTKB.getTKBFailure):
            return {
                isLoading: false,
                listTKB: [],
            }
        // Update And Create TKB
        case getType(updateAndCreateTKB):
            return {
                isLoading: false,
                listTKB: [],
            }

        // LOGOUT
        case getType(logOut):
            return {
                isLoading: false,
                listTKB: [],
            }
        default: return state;
    }
}

export default tkbReducers;