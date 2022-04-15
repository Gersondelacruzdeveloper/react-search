import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: savedPosts
        }
    }

    handleChange =(event)=>{
        const inputText = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post=>{
            return post.name.toLowerCase().includes(inputText)
        })

        this.setState({
            posts:filteredPosts,
        })
    }
    

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }

    render() {

        console.log()
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                    <label htmlFor="id_post">Search </label>
                    <input onChange={(event =>this.handleChange(event))} type="text" placeholder="search" id="id_post"/>
                    <h4>Post found: {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content