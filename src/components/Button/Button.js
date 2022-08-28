import './button.css'

const Button = ({ children, click, }) => {
  return (
      <button className="btn" onClick={click}>{children}</button>
  );
}

export default Button;