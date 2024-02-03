// Inside EmojiCardItem component (src/components/EmojiCardItem/index.js)

import './index.css'

const EmojiCardItem = props => {
  const {eachEmoji, EmojiClicked} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const handleEmojiClick = () => {
    EmojiClicked(id)
  }

  return (
    <li key={id} className="each-emoji-container">
      <button type="button" onClick={handleEmojiClick}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCardItem
