import './backgroundContentGame.css';
import '../../assets/animations/fadeIn.css';
import '../../assets/animations/slideInDown.css';

function BackgroundContent(props){
    return(
        <div className="container-content fadeIn">
            <div className="logo slideInDown"></div>
            <div>{props.children}</div>
        </div>
    )
}

export default BackgroundContent;