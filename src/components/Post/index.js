import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {

  render() {
    const { author, content } = this.props;
    return (
      <article>
        <header>

          {/* <img src='./posts/author-julio-alcantara.png' alt='Imagem de perfil' /> */}
          <img src={author.avatar} alt='Imagem de perfil' />
          {/* <img src={require(`${author.avatar}`)} alt='Imagem de perfil' /> */}
          <div>
            <h2>{author.name}</h2>
            <span>{author.date}</span>
          </div>
          <p>{content}</p>
        </header>
      </article>
    )
  }

}


Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    }),
    date: PropTypes.string,
    content: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        author: PropTypes.shape({
          name: PropTypes.string,
          avatar: PropTypes.string
        }),
        content: PropTypes.string
      })
    )

  }),
}

export default Post;