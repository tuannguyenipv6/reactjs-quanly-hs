import useStyles from './styles';
import React from 'react';
import { Button, Card, Grid } from '@material-ui/core';
import IconEditor from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, changeModalTitle, changeModalContent } from '../../../redux/actions';
import EdittingTkb from '../EdittingTKB';
import { userState$ } from '../../../redux/selectors';

function ItemTKB({ tkb }) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const userState = useSelector(userState$);

    const handleModalEditting = () => {
        dispatch(showModal());
        dispatch(changeModalTitle(`Thời khóa biểu ${tkb.dThu !== 8 ? `Thứ ${tkb.dThu}` : 'Chủ Nhật'}`));
        dispatch(changeModalContent(<EdittingTkb tkb={tkb} />));
    }

    return (
        <Grid item xs={12} sm={4} className={classes.gridItem}>
            <Card className={classes.cardWrapper}> 
                <div className={classes.wrapperTitle}>
                    <h3 className={classes.title} >{tkb.dThu !== 8 ? `Thứ ${tkb.dThu}` : 'Chủ Nhật'}</h3>
                    
                    {
                        userState.mGV_PH ? 
                        <Button onClick={handleModalEditting}>
                            <IconEditor style={{color: '#3F51B5'}} />
                        </Button> : null
                    }
                </div>

                <div className={classes.wrapperConten}>
                <Card className={classes.row}>
                        <Card style={{flex: 1}} className={classes.column}>
                            STT
                        </Card>
                        <Card className={classes.column}>
                            Sáng
                        </Card>
                        <Card className={classes.column}>
                            Chiều
                        </Card>
                    </Card>

                    <Card className={classes.row}>
                        <Card style={{flex: 1}} className={classes.column}>
                            1
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dSang1}
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dChieu1}
                        </Card>
                    </Card>

                    <Card className={classes.row}>
                        <Card style={{flex: 1}} className={classes.column}>
                            2
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dSang2}
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dChieu2}
                        </Card>
                    </Card>

                    <Card className={classes.row}>
                        <Card style={{flex: 1}} className={classes.column}>
                            3
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dSang3}
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dChieu3}
                        </Card>
                    </Card>

                    <Card className={classes.row}>
                        <Card style={{flex: 1}} className={classes.column}>
                            4
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dSang4}
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dChieu4}
                        </Card>
                    </Card>

                    <Card className={classes.row}>
                        <Card style={{flex: 1}} className={classes.column}>
                            5
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dSang5}
                        </Card>
                        <Card className={classes.column}>
                            {tkb.dChieu5}
                        </Card>
                    </Card>
                </div>
            </Card>
        </Grid>
    )
}

export default ItemTKB;