import './BtnsStartGame.css'

const Button = ({ children }) => {
  return (
    <div className="btns__Start-game">
      <button className="btn-new-game">{children}</button>
    </div>
  );
}

export default Button;