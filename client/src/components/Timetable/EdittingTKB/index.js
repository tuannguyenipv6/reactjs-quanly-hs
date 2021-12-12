import React, { useState } from 'react';
import useStyles from '../ItemTKB/styles';
import { Button, Card } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateAndCreateTKB } from '../../../redux/actions';

function EdittingTkb({ tkb }) {

    const classes = useStyles();
    const [tkbEditting, setTkbEditting] = useState({...tkb});
    const dispatch = useDispatch();

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setTkbEditting({
            ...tkbEditting,
            [name]: value,
        })
    }

    const onClick = () => {
        dispatch(updateAndCreateTKB(tkbEditting))
    }

    return (
        <Card className={classes.cardWrapperEditting}> 
            <div className={classes.wrapperTitle}>
                <h3 className={classes.title} >{tkb.dThu !== 8 ? `Thứ ${tkb.dThu}` : 'Chủ Nhật'}</h3>

                <Button 
                    variant='contained' 
                    color='primary' 
                    component='span'
                    onClick={onClick} 
                    size='small' 
                >Thay đổi</Button>
            </div>

            <div className={classes.wrapperConten}>
            <Card className={classes.row}>
                    <Card style={{flex: 1, padding: '4px 0'}} className={classes.columnEditting}>
                        STT
                    </Card>
                    <Card style={{padding: '4px 0'}} className={classes.columnEditting}>
                        Sáng
                    </Card>
                    <Card style={{padding: '4px 0'}} className={classes.columnEditting}>
                        Chiều
                    </Card>
                </Card>

                <Card className={classes.row}>
                    <Card style={{flex: 1}} className={classes.columnEditting}>
                        1
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dSang1} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dSang1'
                        />
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dChieu1} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dChieu1'
                        />
                    </Card>
                </Card>

                <Card className={classes.row}>
                    <Card style={{flex: 1}} className={classes.columnEditting}>
                        2
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dSang2} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dSang2'
                        />
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dChieu2} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dChieu2'
                        />
                    </Card>
                </Card>

                <Card className={classes.row}>
                    <Card style={{flex: 1}} className={classes.columnEditting}>
                        3
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dSang3} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dSang3'
                        />
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dChieu3} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dChieu3'
                        />
                    </Card>
                </Card>

                <Card className={classes.row}>
                    <Card style={{flex: 1}} className={classes.columnEditting}>
                        4
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dSang4} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dSang4'
                        />
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dChieu4} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dChieu4'
                        />
                    </Card>
                </Card>

                <Card className={classes.row}>
                    <Card style={{flex: 1}} className={classes.columnEditting}>
                        5
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dSang5} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dSang5'
                        />
                    </Card>
                    <Card className={classes.columnEditting}>
                        <input 
                            value={tkbEditting.dChieu5} 
                            type='text' 
                            className={classes.textEditting} 
                            onChange={onChange}
                            name='dChieu5'
                        />
                    </Card>
                </Card>
            </div>
        </Card>
    )
}

export default EdittingTkb;