import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import '../styles/story.scss'

export default class MyStory extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const iconStyle = {
            color: 'white',
            fontSize: '1.5em'
        };
        return (
            <div className='story-container'>
                <div className='story-navigation'>
                    <div className='header'>
                        My Story
                        <hr/>
                    </div>
                    <div className='navbar'>
                        <div className='nav-item'>
                            <i class="fas fa-book-open" style={iconStyle}>
                                <Link to={`${this.props.match.url}`}></Link>
                            </i>
                        </div>
                        <div className='nav-item'>
                            <i class="fas fa-graduation-cap" style={iconStyle}>
                                <Link to={`${this.props.match.url}/education`}></Link>
                            </i>
                        </div>
                        <div className='nav-item'>
                            <i class="fas fa-briefcase" style={iconStyle}>
                                <Link to={`${this.props.match.url}/experience`}></Link>
                            </i>
                        </div>
                    </div>
                </div>
                <div className='story-content'>
                    <Switch>
                        <Route exact path={this.props.match.path} component={About}/>
                        <Route exact path={`${this.props.match.path}/education`} component={Education}/>
                        <Route
                            exact
                            path={`${this.props.match.path}/experience`}
                            component={Experience}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

class Education extends React.Component {
    constructor(props) {
        console.log("In the education panel!", props)
        super(props)
    }
    render() {
        return (
            <h1>Education</h1>
        )
    }
}

const Experience = ({match}) => (
    <div>
        <h3>Experience</h3>
    </div>
)

const About = ({match}) => (
    <div>
        <h3 className='text'>Hi my name is Zarif Shahriar!</h3>
    </div>
)