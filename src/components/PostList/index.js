import React, { Component } from 'react';

import Post from '../Post';

import './styles.css';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: './posts/author-julio-alcantara.png'
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
 
    ]
  };


  render() {

    const { posts } = this.state;

    return (
      <main className="postlist-container">

        {
          posts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }
      </main>
    )
  }


}

export default PostList;