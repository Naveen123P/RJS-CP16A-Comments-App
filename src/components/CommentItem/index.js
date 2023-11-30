// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteComment, colors} = props
  const {id, name, comment} = commentDetails
  let isLiked = false

  const clickOnLikeButton = () => {
    isLiked = !isLiked
    const isLikedOrNot = isLiked ? 'blue-color' : 'gray-color'
    return isLikedOrNot
  }
  const isLikedOrNot = clickOnLikeButton()

  const deleteComment = () => {
    onDeleteComment(id)
  }

  return (
    <li className="list-item">
      <div className="username-container">
        <div className={`user-profile ${colors[0]}`}>{name[0]}</div>
        <p className="username">{name[0]}</p>
        <p className="date-time">less than a minute ago</p>
      </div>
      <p className="user-comment">{comment}</p>
      <div className="like-delete-container">
        <button
          className={`like-button-container ${isLikedOrNot}`}
          type="button"
          onClick={clickOnLikeButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="..."
            className="like-img"
          />
          <p className="like-text">Like</p>
        </button>
        <button className="delete-button" type="button" onClick={deleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="like-img"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
