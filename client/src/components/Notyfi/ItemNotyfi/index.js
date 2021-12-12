import { Typography, AccordionSummary, AccordionDetails, Accordion, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconEditor from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { userState$ } from '../../../redux/selectors';
import { showModal, changeModalTitle, changeModalContent } from '../../../redux/actions';
import ModalEdittingTB from './ModalEdittingTB';

function ItemNotyfi({ thongBao }) {
    
    const classes = useStyles();
    const userState = useSelector(userState$);
    const dispatch = useDispatch();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleEditTB = () => {
        dispatch(showModal());
        dispatch(changeModalTitle('Bạn Muốn Thực Hiện'));
        dispatch(changeModalContent(<ModalEdittingTB thongBao={thongBao} />));
    }

    return (
        <Accordion className={classes.wrapper} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: '#3F51B5'}} />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
            >
                <div className={classes.wrapperHeader}>
                    <span>
                        Thông báo từ:
                        <h3>{thongBao.dGV_Truong}</h3>
                    </span>

                    <Typography className={classes.titleTB}>
                        {thongBao.dTenTB}

                        {
                            userState.mGV_PH ? 
                            <Button onClick={handleEditTB} style={{marginBottom: 4, padding: 2}}>
                                <IconEditor style={{color: '#3F51B5'}} />
                            </Button> : null
                        }
                        
                    </Typography>

                    <span className={classes.titleDate}>{thongBao.dNgayDang}</span>
                </div>
            </AccordionSummary>

            <AccordionDetails>
                <div className={classes.wrapperConten}>
                    <span>Nội dung thông báo:</span>
                    <Typography className={classes.conten}>
                        {thongBao.dNoiDungTB}
                    </Typography>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default ItemNotyfi;