import './BtnsStartGame.css'

const Button = ({ children, click }) => {
  return (
    <div className="btns__Start-game">
      <button className="btn-new-game" onClick={click}>{children}</button>
    </div>
  );
}

export default Button;