import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function PostHeader({author, date}) {
  return (
    <header className="post__header">
      <img className="post__header__img" src={author.avatar} alt='Imagem de perfil' />
      <div>
        <h2 className="post__header__name">{author.name}</h2>
        <span className="post__header__date">{date}</span>
      </div>
    </header>
  )
}

function PostComments({comments}) {
  return (
    <ul className="post__comments">
      {
        comments.map(({id, author, content}) => (
          <li className="post__comments__item"key={id}>
            <img className="post__comments__img" src={author.avatar} alt="Image perfil"/>
            <p className="post__comments__content"><strong className="post__comments__name">{author.name} </strong>{content}</p>
          </li>
        ))
      }
    </ul>
  )
}

function Post({ author, date, content, comments}) {
  return (
    <article className="post">
      <PostHeader author={author} date={date} />
      <p className="post__content">{content}</p>    
      <PostComments comments={comments} />
    </article>
  )
}

Post.propTypes = {
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
}

export default Post;