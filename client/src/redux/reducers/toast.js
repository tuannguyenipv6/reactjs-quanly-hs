import { INIT_STATE } from '../../constant';
import { getType, newToastMessage, setToastMessage } from '../actions';

function toastReducers(state = INIT_STATE.toast, action) {
    switch (action.type) {
        case getType(setToastMessage): 
            return {
                title: '',
                message: '',
                type: '',
            }
        case getType(newToastMessage): 
            const { title, message, type } = action.payload;
            return {
                title,
                message,
                type,
            }
        default: return state;
    }
}

export default toastReducers;