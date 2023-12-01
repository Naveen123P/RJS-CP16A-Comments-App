import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []
// Write your code here
class Comments extends Component {
  state = {commentList: initialCommentsList, name: '', comment: ''}

  onAddComment = () => {
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    console.log(newComment)
    if (name !== '' && comment !== '') {
      this.setState(prevState => ({
        commentList: [...prevState.commentList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  onDeleteComment = id => {
    const {commentList} = this.state
    const filteredCommentList = commentList.filter(each => each.id !== id)
    this.setState({commentList: filteredCommentList})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentList} = this.state
    console.log(commentList)
    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <div className="comments-container">
            <h1 className="heading">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.onAddComment}>
              <input type="text" placeholder="Your Name" />
              <textarea
                type="text"
                placeholder="Your Comment"
                rows="8"
                cols="25"
              />
              <div>
                <button type="submit">Add Comment</button>
              </div>
            </form>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-img"
            />
          </div>
        </div>
        <div className="comments-list">
          <div className="comments-count">{commentList.length}</div>
          <p>Comments</p>
        </div>
        <ul>
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              commentDetails={each}
              onDeleteComment={this.onDeleteComment}
              colors={initialContainerBackgroundClassNames}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
