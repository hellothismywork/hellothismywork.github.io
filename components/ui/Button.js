import classes from './Button.module.css';

const Button = ({ params}) => {
  return (
      <>
          <div className={classes.actions}>
              <button>{params.text}</button>              
          </div>
              
      </>
  )
}

export default Button
