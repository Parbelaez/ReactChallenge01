import React from 'react';
import css from "./css/Content.module.css";

function PostItem(props) {
  return (
    <div className={css.SearchResults}>
        {props.savedPosts.map(post => {
                return (
                    <div key={post} className={css.SearchItem}>
                        <p>{post.title}</p>
                        <p>{post.name}</p>
                        <img src={post.image} alt="random" />
                        <p>{post.description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PostItem