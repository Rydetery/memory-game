import classes from './Card.module.css';

export default function Card (props) {



  return (
    props.name !== 'empty' 
    ? <div
    className={`${classes.card} ${props.flipCard ? `${classes.flip}` : '' }`} 
    onClick={() => props.callback(props.index) }>
        <img className={classes.front} src={props.path} alt={props.name} /> 
        <img className={classes.back} src={props.backSide} alt="Marvel" /> :
    </div> 
    : <div className={classes.card} >
        <div className={classes.front}/> 
        <div className={classes.back}/> 
    </div> 
  );
}
