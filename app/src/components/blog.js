import React, {Component} from 'react'
import * as contentful from 'contentful'
import moment from 'moment'
import {Link} from 'react-router-dom'

const client = contentful.createClient({space: 'n5rz0aor3j18', accessToken: '4482ce9e35e356fcbdcfa93b605bd82c66f32df99f12be7105c6be5059a7fb6f'})

export default class Blog extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            loaded: false
        }
        this.fetchPosts = this
            .fetchPosts
            .bind(this)
        this.setPosts = this
            .setPosts
            .bind(this)
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts() {
        console.log('Fetching Posts')
        client
            .getEntries()
            .then(response => {
                this.setPosts(response)
            })
    }

    setPosts(response) {
        this.setState({posts: response.items})
        this.setState({loaded: true})
    }

    render() {
        if (this.state.loaded) {
            return (
                <div>
                    <h1>Welcome to my Blog!</h1>
                    <br/> {this
                        .state
                        .posts
                        .map(({
                            fields
                        }, i) => <BlogItem key={i} {...fields}/>)}
                </div>
            )
        } else 
            return (
                <h1>Welcome to my Blog!</h1>
            )

    }
}

class BlogItem extends Component {
    render() {
        return (
            <div >
                <div >
                    <h1>{this.props.title}</h1>
                    <img src={this.props.icon} alt="Image"/>
                </div>
                <div >
                    <Link
                        to={{
                        pathname: `/blog${this.props.path}`,
                        state: this.props
                    }}>Read More</Link>
                    <div >
                        <p>
                            {moment(this.props.date).calendar(null, {
                                sameDay: '[Today]',
                                lastDay: '[Yesterday]',
                                lastWeek: '[Last] dddd',
                                sameElse: 'MMM Do YYYY'
                            })}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}