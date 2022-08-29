import './backgroundContentGame.css'

function BackgroundContent(props){
    return(
        <div className="container-content">
            <div className="logo"></div>
            <div>{props.children}</div>
        </div>


    )
}

export default BackgroundContent;