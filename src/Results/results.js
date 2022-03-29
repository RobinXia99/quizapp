const Results = (props) => {

    

    return (
        <div>
            <h1 className="large-text">Congratulations {props.player}!</h1>
            <h1 className="large-text2">You scored {props.score} points!</h1>
            <aside className="restart" onClick={props.restartQuiz}>Play Again</aside>
        </div>
    )
}

export default Results;