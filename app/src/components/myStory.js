import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import '../styles/story.scss'

export default class MyStory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aboutClicked: true,
            educationClicked: false,
            experienceClicked: false
        }
        this.handleNavClick = this
            .handleNavClick
            .bind(this)
    }

    componentDidMount(){
        let url = this.props.location.pathname
        if(url.includes('education')) {
            this.handleNavClick('education')
        }
        else if(url.includes('experience')) {
            this.handleNavClick('education')
        }
    }

    handleNavClick(topic) {
        if (topic === 'about') {
            this.setState({aboutClicked: true, educationClicked: false, experienceClicked: false})
        } else if (topic === 'education') {
            this.setState({aboutClicked: false, educationClicked: true, experienceClicked: false})
        } else {
            this.setState({aboutClicked: false, educationClicked: false, experienceClicked: true})
        }
    }
    render() {
        const iconStyle = {};
        return (
            <div className='story-container'>
                <div className='story-navigation'>
                    <div className='header'>
                        My Story
                        <hr/>
                    </div>
                    <div className='navbar'>
                        <div className={this.state.aboutClicked ? 'nav-item active' :  'nav-item'} onClick={() => this.handleNavClick('about')}>
                            <Link to={`${this.props.match.url}`} className='active'>
                                <i className="fas fa-book-open" style={iconStyle}></i>
                            </Link>
                        </div>
                        <div className={this.state.educationClicked ? 'nav-item active' :  'nav-item'} onClick={() => this.handleNavClick('education')}>
                            <Link to={`${this.props.match.url}/education`}>
                                <i className="fas fa-graduation-cap" style={iconStyle}></i>
                            </Link>
                        </div>
                        <div className={this.state.experienceClicked ? 'nav-item active' :  'nav-item'} onClick={() => this.handleNavClick('experience')}>
                            <Link to={`${this.props.match.url}/experience`}>
                                <i className="fas fa-briefcase" style={iconStyle}></i>
                            </Link>
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