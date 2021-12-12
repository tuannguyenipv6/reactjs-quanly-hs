import React, { useMemo, useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import Message from './Message';
import useStyles from './styles';
import IconSend from '@material-ui/icons/Send';
import { userState$, infodefaultState$ } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { addDocument } from '../../firebase/services';

function ChatRoom({match}) {

    const classes = useStyles();
    const { params: { uid } } = match;
    const userState = useSelector(userState$);
    const infodefaultState = useSelector(infodefaultState$);
    const [value, setValue] = useState('');

    const condition = useMemo(() => ({
        fieldName: 'roomId',
        operator: '==',
        compareValue: uid,
    }), [uid]);  

    const message = useFirestore('message', condition);

    const onChange = e => {
        setValue(e.target.value);
    }
    
    const handleSend = () => {
        const { mGV_PH } = userState;
        if(value.trim()) {
            addDocument('message', {
                displayName: userState.taiKhoan,
                roomId: uid,
                text: value,
                userGVPH: mGV_PH,
            });
            setValue('');
        }
    }

    return (<>
    <div className={classes.wrapperChatRoom}>
        {
            message.map((mes, index) => <Message 
                key={index}
                photo1={infodefaultState.photo1} 
                mes={mes.text}
                taiKhoan={userState.taiKhoan}
                userLogin={userState.mGV_PH}
                userGVPH={mes.userGVPH}
            />)
        }

        <span className={classes.marginBottom}></span>
        <div className={classes.wrapperInput}>
            <input value={value} onChange={onChange} type="text" className={classes.input} />
            <IconSend onClick={handleSend} fontSize='large' className={classes.icon} />
        </div>
    </div>
    </>)
}

export default ChatRoom;