import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from "./css/Content.module.css";
import PostItem from './PostItem';
import Loader from './Loader';

class Contents extends Component {
    constructor(props){
        super(props)
        this.state = {
          isLoaded: false
        }
    }

  componentDidMount() {
    setTimeout(()=>{
        this.setState({
            isLoaded: true,
        })
    }, 2000)
  }

  render() {
    return (
      <div>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
          {
            this.state.isLoaded ?
            <PostItem savedPosts={savedPosts} />
            : <Loader />
          }
        </div>
      </div>
    )
  }
}

export default Contents