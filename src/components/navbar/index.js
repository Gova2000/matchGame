import './index.css'

const Nav = props => {
  const {tim, count} = props
  return (
    <li className="cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="navimg"
      />
      <div className="timsec">
        <p>Score: {count} </p>
        <div className="timsec">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
            className="timeimg"
          />
          <p>{tim} sec</p>
        </div>
      </div>
    </li>
  )
}

export default Nav
