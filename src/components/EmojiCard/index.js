import './index.css'

const EmojiCard = props => {
  const {emojisList} = props
  return (
    <ul className="emojis-container">
      {emojisList.map(eachEmoji => (
        <li key={eachEmoji.id} className="each-Emoji-container">
          <img
            className="emoji-img"
            src={eachEmoji.emojiUrl}
            alt={eachEmoji.emojiName}
          />
        </li>
      ))}
    </ul>
  )
}

export default EmojiCard
