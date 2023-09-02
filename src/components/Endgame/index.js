import './index.css'

const End = props => {
  const {score, click} = props

  const back = () => {
    click()
  }

  return (
    <div>
      <div className="trpycls sm">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
          alt="trophy"
          className="trophy"
        />
        <h1>Your Score</h1>
        <p>{score}</p>
        <button type="button" className="btn" onClick={back}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          Play again
        </button>
      </div>
    </div>
  )
}

export default End
