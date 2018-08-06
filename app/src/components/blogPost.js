import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import Markdown from 'react-markdown'
import * as contentful from 'contentful'

const client = contentful.createClient({space: 'n5rz0aor3j18', accessToken: '4482ce9e35e356fcbdcfa93b605bd82c66f32df99f12be7105c6be5059a7fb6f'})

export default class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.fetchPost = this
            .fetchPost
            .bind(this)
        this.state = {
            blog: null,
            loaded: false
        }
        if (this.props.location.state === undefined) {
            let slug = this.props.match.params.blogPost
            this.fetchPost(slug)
        } else {
            this.setState({blog: this.props.location.state})
            this.setState({loaded: true})
        }
    }
    fetchPost(slug) {
        console.log('Fetching Post ', slug)
        client
            .getEntries({
            'content_type': 'blogPost',
            'fields.path': '/' + slug
        })
            .then(response => {
                if (response.items.length > 0) {
                    this.setState({blog: response.items[0].fields, loaded: true})
                }
            })
    }
    render() {
        if (this.state.loaded) {
            return (
                <div>
                    <div>
                        <Link to="/blog">Back to Blog</Link>
                    </div>
                    <div >
                        <h1>{this.state.blog.title}</h1>
                        <div>
                            <p>
                                {moment(this.state.blog.date).calendar(null, {
                                    sameDay: '[Today]',
                                    lastDay: '[Yesterday]',
                                    lastWeek: '[Last] dddd',
                                    sameElse: 'MMM Do YYYY'
                                })}
                            </p>
                        </div>
                        <img src={this.state.blog.icon} alt="Image"/>
                    </div>
                    <div >
                        <Markdown source={this.state.blog.content}/>
                    </div>
                </div>
            )
        } else 
            return (
                <h1>Loading blog post ...</h1>
            )

    }
}
