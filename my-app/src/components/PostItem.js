import React from 'react';
import css from "./css/Content.module.css";

function PostItem(props) {
  return (
    <div className={css.SearchResults}>
        {props.savedPosts.map(post => {
                const {title, name, image, description} = post
                return (
                    <div key={title} className={css.SearchItem}>
                        <p>{title}</p>
                        <p>{name}</p>
                        <img src={image} alt="random" />
                        <p>{description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PostItem