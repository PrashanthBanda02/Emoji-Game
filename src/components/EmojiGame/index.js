import {Component} from 'react'
import EmojiCardItem from '../EmojiCard' // Update the import path as needed
import NavBar from '../NavBar' // Update the import path as needed
import WinOrLoseCard from '../WinOrLoseCard' // Update the import path as needed
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, prevImageId: [], winOrLose: null}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  EmojiClicked = id => {
    const {prevImageId, score, topScore, winOrLose} = this.state

    if (winOrLose) {
      return
    }

    if (prevImageId.includes(id)) {
      if (score > topScore) {
        this.setState({topScore: score})
      }
      this.setState({winOrLose: 'lose'})
    } else {
      this.setState(
        prevState => ({
          prevImageId: [...prevState.prevImageId, id],
          score: prevState.score + 1,
        }),
        () => {
          const {emojisList} = this.props
          if (prevImageId.length === emojisList.length) {
            this.setState({winOrLose: 'win'})
          }
        },
      )
      this.shuffledEmojisList()
    }
  }

  playAgain = () => {
    this.setState({score: 0, prevImageId: [], winOrLose: null})
    this.shuffledEmojisList()
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, winOrLose} = this.state

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} />
        {winOrLose && (
          <WinOrLoseCard
            score={score}
            topScore={topScore}
            winOrLose={winOrLose}
            playAgain={this.playAgain}
          />
        )}
        <ul className="emojis-container">
          {emojisList.map(eachEmoji => (
            <EmojiCardItem
              key={eachEmoji.id}
              eachEmoji={eachEmoji}
              EmojiClicked={this.EmojiClicked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
