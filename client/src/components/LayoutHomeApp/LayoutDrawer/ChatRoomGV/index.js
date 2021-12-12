import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

function ChatRoomGV({ listUID }) {

    const classes = useStyles();
    const history = useHistory();
    
    return (<div style={{display: 'flex', flexDirection: 'column'}}>
        <span className={classes.titleEditInfo}>Các phòng chát hiện có</span>
        {
            listUID?.map(room => <Typography
                key={room.mID} 
                className={classes.typography}
                onClick={() => history.push(`/chat/${room.mID}`)}
            >
                {room.mName}
            </Typography>)
        }
    </div>)
}

export default ChatRoomGV;