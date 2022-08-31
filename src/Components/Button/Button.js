import './button.css'

const Button = ({ children, click,disableButton, styleButton}) => {
  return (
      <button disabled={disableButton} style={styleButton} className="btn" onClick={click}>{children}</button>
  );
}

export default Button;