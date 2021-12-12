import React from 'react';
import useStyles from './styles';
import { Card, Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateStudent1 } from '../../../../redux/actions';
import { userState$ } from '../../../../redux/selectors';

function NoteStudent({ note, id }) { 
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const userState = useSelector(userState$);

  const ValidationTextField = withStyles({
    root: {
      '& input': {
        color: '#fff !important'
      },
      '& label': {
        color: '#3F51B5 !important'
      },
      '& input:valid + fieldset': {
        borderColor: '#3F51B5',
        borderWidth: 2,
        
      },
      '& input:valid:hover + fieldset': {
        borderColor: '#3F51B5',
        borderWidth: 2,
      },
    },
  })(TextField);

  const onBlur = e => {
    const value = e.target.value
    if (value.trim() && id > 0 && value.trim() !== note) {
      const data = {
        mID: id,
        mColumn: 'dGhiChu',
        mValue: value, 
      };
      dispatch(updateStudent1.updateStudentRequest(data));
    }
  }

  return (<Grid item xs={12} sm={12}>
    <Card className={classes.cardGhiChu}>
      <h3 className={classes.titleGhiChu}>Ghi Chú:</h3>

      <div className={classes.wrapperTextField}>
        {
          userState.mGV_PH ? 
          <ValidationTextField
            onBlur={onBlur}
            label={`Ghi chú h/s: `}
            required
            variant='outlined'
            defaultValue={note}
            id='validation-outlined-input'
            fullWidth
          /> : 
          <ValidationTextField
            disabled
            label={`Ghi chú h/s: `}
            required
            variant='outlined'
            defaultValue={note}
            id='validation-outlined-input'
            fullWidth
          />
        }
        
      </div>
    </Card>
  </Grid>)
}

export default NoteStudent;

// Tooltips