import React from 'react';
import {makeStyles} from '@material-ui/core';
import "./Game.css";


function Square({ value, onClick }) {
  
  const useStyles = makeStyles (() =>({
    root: {
     
      color: '#1b5e20',
      background: '#f1f8e9 10%',
      border: '4px solid #33691e',
      float: 'left',
      
      fontsize: '96px',
      fontweight: 'bold',
      lineheight: '136px',
      height: '136px',
      marginright: '-1px',
      margintop:'-1px',
      padding: 0,
      
      width: '136px',

    },
    



  }));

  const classes = useStyles();
  
    return (
      <button   className={classes.root} onClick={onClick}>
        {value}
      </button>
    );
  }


  export default Square;
  
  
  



