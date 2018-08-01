import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import '../styles/story.scss'
import {ciena, canada, kinaxis, ibm} from './constants'
import JobPage from './jobPage'
import Instafeed from 'react-instafeed'
import Responsive from 'react-responsive'
const Desktop = props => <Responsive {...props} minWidth={1291}/>
const Tablet = props => <Responsive {...props} maxWidth={1290} minWidth={801}/>
const Mobile = props => <Responsive {...props} maxWidth={800}/>

// Check if the route being passed is specifically a JobPage if not render then
// default MyStory component
export default class StoryPageRouteHandler extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path={`/story/experience/agri-food-canada`}
                    render={() => <JobPage item={canada}/>}/>
                <Route
                    exact
                    path={`/story/experience/ciena`}
                    render={() => <JobPage item={ciena}/>}/>
                <Route
                    exact
                    path={`/story/experience/kinaxis`}
                    render={() => <JobPage item={kinaxis}/>}/>
                <Route
                    exact
                    path={`/story/experience/ibm`}
                    render={() => <JobPage item={ibm}/>}/>
                <Route path={`/story`} component={MyStory}/>
            </Switch>
        )
    }
}
export class MyStory extends Component {
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

    componentDidMount() {
        let url = this.props.location.pathname
        if (url.includes('education')) {
            this.handleNavClick('education')
        } else if (url.includes('experience')) {
            this.handleNavClick('experience')
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
        return (
            <div className='story-container'>
                <div className='story-navigation'>
                    <div className='title-header'>
                        My Story
                        <hr/>
                    </div>
                    <div className='navbar'>
                        <div
                            className={this.state.aboutClicked
                            ? 'nav-item active'
                            : 'nav-item'}>
                            <Link
                                to={`${this.props.match.url}`}
                                className='active'
                                onClick={() => this.handleNavClick('about')}>
                                <i className="fas fa-book-open"></i>
                            </Link>
                        </div>
                        <div
                            className={this.state.educationClicked
                            ? 'nav-item active'
                            : 'nav-item'}>
                            <Link
                                to={`${this.props.match.url}/education`}
                                onClick={() => this.handleNavClick('education')}>
                                <i className="fas fa-graduation-cap"></i>
                            </Link>
                        </div>
                        <div
                            className={this.state.experienceClicked
                            ? 'nav-item active'
                            : 'nav-item'}>
                            <Link
                                to={`${this.props.match.url}/experience`}
                                onClick={() => this.handleNavClick('experience')}>
                                <i className="fas fa-briefcase"></i>
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
                        <Route
                            exact
                            path={`${this.props.match.path}/experience/ciena`}
                            render={() => <JobPage item={ciena}/>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

class About extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        return (
            <div>
                <div className='about'>
                    <div className='story-header'>A Developer At Heart.</div>
                    <div className='text'>My goal is to help individuals and companies with their
                        software needs, be it the user experience on their website, the design of their
                        applications or consulting on their online persona. In the modern age, too many
                        businesses suffer from a poor online persona, be it their websites or lack
                        thereof.
                    </div>
                    <br/>
                    <div className='text'>
                        As a consultant and web architect, my goal is to help businesses and individuals
                        create a professional online image for themselves, something that will pay
                        dividends for years to come. Having worked in the public sector and in the
                        private sector, as a Full Stack Developer (Agri-Food Canada and Ciena), Front
                        End Engineer (Kinaxis), and a Back End Engineer (IBM), I've gained a technical
                        and theoretical skill set which allows me to consult others by understanding
                        their current positions and goals. Through these skills I can offer advanced,
                        holistic, and relevant solutions. Developing an image for yourself and your work
                        is never easy, but with help it can be.
                    </div>
                    <br/>
                    <div className='text'>Now you now know a bit about me, but I am still eager to
                        get to know you. Feel free to contact me as I love to meet interesting people
                        and if you are someone who might be able to benefit from my services I encourage
                        you to reach out.
                    </div>
                    <br/>
                </div>
                <Tablet>
                    <div className='instafeed' id='instafeed-tablet'>
                        <Instafeed
                            limit='6'
                            ref='instafeed'
                            resolution='thumbnail'
                            sortBy='most-recent'
                            target='instafeed-tablet'
                            template='<a class="instafeed" target="_blank" href="{{link}}"><img class="instafeed-pic" src="{{image}}" /></a>'
                            userId='27672003'
                            clientId='5ba6a992b3d6425b89cbd2985f052381'
                            accessToken='27672003.5ba6a99.d64a7b98c12f493d8b8ae98e337f05bf'/>
                    </div>
                </Tablet>
                <Desktop>
                    <div className='instafeed' id='instafeed'>
                        <Instafeed
                            limit='10'
                            ref='instafeed'
                            resolution='thumbnail'
                            sortBy='most-recent'
                            target='instafeed'
                            template='<a class="instafeed" target="_blank" href="{{link}}"><img class="instafeed-pic" src="{{image}}" /></a>'
                            userId='27672003'
                            clientId='5ba6a992b3d6425b89cbd2985f052381'
                            accessToken='27672003.5ba6a99.d64a7b98c12f493d8b8ae98e337f05bf'/>
                    </div>
                </Desktop>
                <Mobile>
                    <div className='instafeed' id='instafeed-mobile'>
                        <Instafeed
                            limit='4'
                            ref='instafeed'
                            resolution='thumbnail'
                            sortBy='most-recent'
                            target='instafeed-mobile'
                            template='<a class="instafeed" target="_blank" href="{{link}}"><img class="instafeed-pic" src="{{image}}" /></a>'
                            userId='27672003'
                            clientId='5ba6a992b3d6425b89cbd2985f052381'
                            accessToken='27672003.5ba6a99.d64a7b98c12f493d8b8ae98e337f05bf'/>
                    </div>
                </Mobile>
            </div>

        )
    }
}
class Education extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='education'>
                <div className='story-header'>Life Long Learner.</div>
                <div className='education-content'>
                    <div className='education-item'>
                        <div className='text-header'>Formal Education</div>
                        <div className='institution'>
                            <div className='logo-uottawa'></div>
                            <div className='info'>
                                <div className='text title'>UNIVERSITY OF OTTAWA</div>
                                <div className='text'>
                                    <i>BSc. Software Engineering</i>
                                </div>
                                <div className='text'>Graduating April 2020</div>
                                <div className='text'>CGPA: 9/10</div>
                            </div>
                        </div>
                        <div className='notable'>
                            <div className='text title'>Notable Courses</div>
                            <div className='text'>Data Structures and Algorithms
                            </div>
                            <div className='text'>Quality Assurance
                            </div>
                            <div className='text'>User Interface Design
                            </div>
                            <div className='text'>Operating Systems
                            </div>
                            <div className='text'>Discrete Math and Structures
                            </div>
                            <div className='text'>Software Construction
                            </div>
                            <div className='text'>Professional Engineering Practice
                            </div>
                        </div>
                    </div>
                    <div className='education-item'>
                        <div className='text-header'>Informal Education</div>
                        <div className='institution'>
                            <div className='logo-udemy'></div>
                            <div className='info'>
                                <div className='text title'>UDEMY ONLINE</div>
                                <div className='text'>
                                    <i>Online Educational Platform</i>
                                </div>
                                <div className='text'>Enrolled 2016 - Present</div>
                                <div className='text'>Certified Instructors</div>
                            </div>
                        </div>
                        <div className='notable'>
                            <div className='text title'>Courses Taken</div>
                            <div className='text'>
                                <i>Web Development by Rob Percival</i><br/>
                                Complete course on HTML/CSS/JS, PHP, MySQL, Bootstrap and API's
                            </div>
                            <div className='text'>
                                <i>Android Development by Rob Percival</i><br/>
                                Complete course on Android design and Java development.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Experience extends Component {
    render() {
        return (
            <div className='experience'>
                <div className='story-header'>Where passion meets software.</div>
                <div className='experience-content'>
                    <div className='experience-item'>
                        <Link to={`${this.props.match.url}` + '/agri-food-canada'}>
                            <WorkCard item={canada}/>
                        </Link>
                    </div>
                    <div className='experience-item'>
                        <Link to={`${this.props.match.url}` + '/ciena'}>
                            <WorkCard item={ciena}/>
                        </Link>
                    </div>
                    <div className='experience-item'>
                        <Link to={`${this.props.match.url}` + '/kinaxis'}>
                            <WorkCard item={kinaxis}/>
                        </Link>

                    </div>
                    <div className='experience-item'>
                        <Link to={`${this.props.match.url}` + '/ibm'}>
                            <WorkCard item={ibm}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
class WorkCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.item.title,
            role: props.item.role,
            logo: props.item.logo,
            color: props.item.color2
        }
    }
    render() {
        const style = {
            'backgroundColor': `#${this.state.color}`
        }
        return (
            <div className='work-card' style={style}>
                <img src={this.state.logo} className='work-logo'/>
                <i className='fas fa-arrow-right '></i>
            </div>
        )
    }
}