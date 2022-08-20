import './index.css'

const ButtonsStartGame = ({ children,click }) => {
  return (
    <div className="btn-groups">
      <button className="btn-new-game" onClick={click}>{children}</button>

    </div>
  );
}

export default ButtonsStartGame;