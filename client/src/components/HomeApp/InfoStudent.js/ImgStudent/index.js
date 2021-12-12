import React from 'react';
import useStyles from './styles';
import { Grid, Hidden } from '@material-ui/core';
import ImgNam from '../../../../atset/img/nam.png';
import ImgNu from '../../../../atset/img/nu.png';

function ImgStudent({ img }) {
  
  const classes = useStyles(); 

  return (<Grid item xs={12} sm={4} className={classes.grid}>
    <div className={classes.wrapperImg}>
      <Hidden smUp implementation="css">
        <h1 className={classes.title} >Chi tiết thông tin học sinh</h1>
      </Hidden> 

      <img 
        alt='Ảnh' 
        src={img !== 'matdinhnam' && img !== 'matdinhnu' ? img : img === 'matdinhnam' ? ImgNam : ImgNu} 
        className={classes.img}
      />
    </div>
  </Grid>)
}

export default ImgStudent;

// http://localhost:5000/images/TuanNguyenPiano-1630207758364.jpeg