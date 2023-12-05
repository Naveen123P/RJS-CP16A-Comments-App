// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteComment, changeTheLikeStatus} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails

  const clickOnLikeButton = () => {
    changeTheLikeStatus(id)
  }
  const isLikedOrNot = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const deleteComment = () => {
    onDeleteComment(id)
  }

  const colorOfLike = isLiked ? 'blue-color' : 'gray-color'

  return (
    <li className="list-item">
      <div className="username-container">
        <div className={`"initial-container" ${initialClassName}`}>
          {name[0]}
        </div>
        <p className="username">{name}</p>
        <p className="date-time">{date}</p>
      </div>
      <p className="user-comment">{comment}</p>
      <div className="like-delete-container">
        <div>
          <button
            className="like-button-container"
            type="button"
            onClick={clickOnLikeButton}
          >
            <img src={isLikedOrNot} alt="like" className="like-img" />
            <p className={`like-text ${colorOfLike}`}>Like</p>
          </button>
        </div>

        <button
          data-testid="delete"
          className="delete-button"
          type="button"
          onClick={deleteComment}
        >
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
