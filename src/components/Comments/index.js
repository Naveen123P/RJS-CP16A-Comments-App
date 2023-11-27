import {Component} from "react"
import {v4 as uuidv4} from "uuid"
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
    state = {commentList: initialCommentsList, name: "", comment:""}
    
    onAddComment = () => {
        event.preventDefault()
        const {name, comment} = this.state
        const newComment = {
            id:uuidv4(),
            name,
            comment
        }
        this.setState(prevState => ({commentList : [...prevState.commentList,newComment],
        name:"",
        comment: ""
    }))

    }

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    }
    onChangeComment = (event) => {
        this.setState({comment: event.target.value})
    }
    render(){
        const {commentList} = this.state
        return(
            <div className="bg-container">
                <div className="comments-container">
                    <h1 className="heading">
                        Comments
                    </h1>
                    <p className="para">Say something about 4.0 Technologies</p>
                    <form className="form-container" onSubmit={this.onAddComment}>
                       <input type="text" placeholder="Your Name"/>
                      <textarea type="text" placeholder="Your Comment" rows="8" cols="55"></textarea>
                      <button type="submit" >Add Comment</button>
                    </form>
                </div>
                <div className="img-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments" className="comments-img"/>
                </div>
            </div>
            <hr/>
            <div className="comments-list">
                <div className="comments-count">
                    {commentList.length()}
                </div>
                <p>Comments</p>
            </div>
            <ul>
                {}
            </ul>
        )
    }
}

export default Comments