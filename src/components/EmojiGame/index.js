import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0}

  render() {
    const {emojisList} = this.props
    const {score, topScore} = this.state
    return (
      <div className="app-container">
        <div>
          <NavBar score={score} topScore={topScore} />
          <EmojiCard emojisList={emojisList} />
        </div>
      </div>
    )
  }
}

export default EmojiGame

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
