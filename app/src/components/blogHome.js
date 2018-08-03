import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Butter from 'buttercms'
import BlogPost from './blogPost';

const butter = Butter('66898066721febe95aca1e487cc5e95e52d0cd4c');

export default class BlogsRouteHandler extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route path={`/blog/post/:slug`} component={BlogPost}/>
                <Route exact path={`/blog`} component={BlogHome}/>
            </Switch>
        )
    }
}
class BlogHome extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            loaded: false
        };
    }

    fetchPosts(page) {
        butter
            .post
            .list({page: page, page_size: 10})
            .then((resp) => {
                this.setState({loaded: true, resp: resp.data})
            });
    }

    componentWillMount() {
        let page = 1;
        this.fetchPosts(page)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({loaded: false});
        let page = 1;
        this.fetchPosts(page)
    }

    render() {
        if (this.state.loaded) {
            const links = this
                .state
                .resp
                .data
                .map(post => {
                    return (
                        <div key={post.slug}>
                            <Link to={`blog/post/${post.slug}`}>{post.title}</Link>
                        </div>
                    )
                })
            return (
                <div>
                    {links}
                    <br/>
                </div>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}