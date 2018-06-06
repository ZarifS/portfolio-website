import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

export default class MyStory extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className='story-navigation'>
                    <h2>My Story</h2>
                    <ul>
                        <li>
                            <Link to={`${this.props.match.url}`}>
                                About Me.
                        </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/education`}>
                                My Education.
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/experience`}>
                                My Experience.
                </Link>
                        </li>
                    </ul>
                </div>
                <div className='story-content'>
                    <Switch>
                        <Route exact path={this.props.match.path} component={About} />
                        <Route exact path={`${this.props.match.path}/education`} component={Education} />
                        <Route exact path={`${this.props.match.path}/experience`} component={Experience} />
                    </Switch>
                </div>
            </div>
        )
    }
}

class Education extends React.Component{
    constructor(props) {
        console.log("In the education panel!", props)
        super(props)
    }
    render(){
        return (
            <h1>Education</h1>
        )
    }
}

const Experience = ({ match }) => (
    <div>
        <h3>Experience</h3>
    </div>
)

const About = ({ match }) => (
    <div>
        <h3>Hi my name is Zarif Shahriar!</h3>
    </div>
)