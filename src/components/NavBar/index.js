// Inside NavBar component (src/components/NavBar/index.js)

import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div className="navbar-container">
      <div className="logo-name-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="app-name">Emoji Game</h1>
      </div>
      <div className="scores-container">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
