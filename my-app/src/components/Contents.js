import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import PostItem from './PostItem';

class Contents extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div>
            <PostItem savedPosts = {savedPosts}/>
        </div>
      </div>
    )
  }
}

export default Contents