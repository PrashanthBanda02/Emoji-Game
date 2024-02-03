import NavBar from '../NavBar' // Update the import path as needed
import './index.css'

const WinOrLoseCard = ({score, topScore, winOrLose, playAgain}) => (
  <div className="WinOrLoseCard-container">
    <NavBar score={score} topScore={topScore} />
    <div className={winOrLose === 'win' ? 'win-card' : 'lose-card'}>
      <h1 className="win-card-heading">
        {winOrLose === 'win' ? 'You Won' : 'You Lose'}
      </h1>
      {winOrLose === 'win' && (
        <>
          <p className="score">{score}/12</p>
          <p className="best-score">Best Score</p>
        </>
      )}
      <button type="button" className="play-again-btn" onClick={playAgain}>
        Play Again
      </button>
      <img
        className="win-or-lose-img"
        alt="win or lose"
        src={
          winOrLose === 'win'
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
      />
    </div>
  </div>
)

export default WinOrLoseCard
