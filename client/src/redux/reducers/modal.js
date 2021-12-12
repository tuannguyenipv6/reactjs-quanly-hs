import { INIT_STATE } from '../../constant';
import { changeModalContent, changeModalTitle, getType, hideModal, showModal } from '../actions';

function modalReducers(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case getType(showModal): 
            return {
                ...state,
                showModal: true,
            }
        case getType(hideModal): 
            return {
                ...state,
                showModal: false,
                title: '',
                component: null,
            }   
        case getType(changeModalTitle):
            return {
                ...state,
                title: action.payload,
            } 
        case getType(changeModalContent): 
            return {
                ...state,
                component: action.payload,
            }
        default: return state;
    }
}

export default modalReducers;