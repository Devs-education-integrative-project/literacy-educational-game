import './confirmDialog.css';
import { Link } from 'react-router-dom';

export default function ConfirmDialog({ message, onDialog, redirect }) {
    return (
        <div className='confirm-dialog-container'>
            <div className="confirm-dialog">
                <h2 className="dialog__confirmation">Confirmação</h2>
                <span className="dialog__message">
                    {message}
                </span>
                <div className="dialog__btn">
                    <Link className="link" to={redirect}>
                        <button
                        className="btn__confirm"
                        onClick={()=>onDialog(true)}
                        >Sim</button>
                    </Link>
                    <button
                    className="btn__reject"
                    onClick={()=>onDialog(false)}
                    >Não</button>
                </div>
            </div>
        </div>
    )
}