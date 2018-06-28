import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { loadBook } from '../actions/bookActions.js';
import '../App.css';
// import CommentForm from './commentForm.js';
// import CommentsList from '../components/CommentsList.js';
// import { fetchComments } from '../actions/commentActions.js';

class PostPage  extends Component {

  // componentDidMount() {
  //   this.props.fetchComments(this.props.post.id)
  // }

  render(props) {
    const post = this.props.post;

    return (
      <div className="mainPostDiv">
        // <img className="postImage" src={`${post.image_url}`} alt={post.name} />
        <div className="postDiv">
          <p className="title">{post.name}</p>
          <p className="game">{post.game}</p>
          <p className="author">By: {post.author}</p>
          <p className="rating">Rating: {post.rating} stars</p>
          <p className="discussion">Summary: {post.discussion}</p>
        </div>

        <div className="comments">
          <CommentForm  postId = { this.props.match.params.id }/>
          <CommentsList comment = { post.comments }/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find((post) => post.id === parseInt(ownProps.match.params.id))
  if (post) {
    return { post: post }
  } else {
    return { post: [] }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchComments: fetchComments
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);