import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Responsive from 'react-responsive'
import '../styles/story.scss'
import ciena from './../images/logos/ciena.svg'
const Mobile = props => <Responsive {...props} maxWidth={425}/>

export default class MyStory extends Component {
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
                    <div className='header'>
                        My Story
                        <hr/>
                    </div>
                    <div className='navbar'>
                        <div
                            className={this.state.aboutClicked
                            ? 'nav-item active'
                            : 'nav-item'}
                            onClick={() => this.handleNavClick('about')}>
                            <Link to={`${this.props.match.url}`} className='active'>
                                <i className="fas fa-book-open"></i>
                            </Link>
                        </div>
                        <div
                            className={this.state.educationClicked
                            ? 'nav-item active'
                            : 'nav-item'}
                            onClick={() => this.handleNavClick('education')}>
                            <Link to={`${this.props.match.url}/education`}>
                                <i className="fas fa-graduation-cap"></i>
                            </Link>
                        </div>
                        <div
                            className={this.state.experienceClicked
                            ? 'nav-item active'
                            : 'nav-item'}
                            onClick={() => this.handleNavClick('experience')}>
                            <Link to={`${this.props.match.url}/experience`}>
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
                    </Switch>
                </div>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='text-header'>A developer at heart</div>
                <div className='text'>Before moving ahead let me state my purpose. My goal is to
                    help individuals and companies with their software needs, be it the user
                    experience on their website, the design of their applications or consulting on
                    their online persona. With the experience I've gathered through my work
                    experience I am still very much in the beginning of my professional development
                    but I believe I can help many companies with their online appearance. In the
                    modern age too many businesses suffer from a poor online persona, be it their
                    websites or lack of. Even individuals in many different industries have
                    completely missed the mark on a professional online persona as many don't even
                    bother setting up a portfolio website for themselves, something many employers
                    look for.
                </div>
                <br/>
                <div className='text'>As a consultant and web architect my goal is to help
                    anyone who feels like its time for a refresh on their dated websites or for new
                    businesses and individuals to create a professional online image for themselves,
                    something that will pay dividends for years to come. Now you know my purpose
                    please read on to learn more about who I am and what drives me as a developer.</div>
                <br/>
                <div className='text-header'>An Immigrant with a dream</div>
                <div className='text'>Born in Bangladesh at the end of the 21'st century my
                    parents made a very important decision to sacrifice their comfort and to
                    immigrate to Canada for a better life for my brother and I. From a young age I
                    learnt what it meant to work for what I want and the value of hard work as I saw
                    it everyday from my parents. Fast forwarding to high school it was time for me
                    to decide what I wanted to peruse and where my passions lied and like most
                    teenagers I had no clue. That was until I started my first computer science
                    course taught by one of the best teachers I've ever had the pleasure to learn
                    from. I began to write my first program with Java and learn what it meant to
                    design software and something in me lit up.
                </div>
                <br/>
                <div className='text-header'>Software became my art</div>
                <div className='text'>After finding my passion and applying to Software
                    Engineering at the University of Ottawa I continued my studies in the art of
                    software development. Most of the stuff I needed to know however was not taught
                    in school. Instead university focused heavily on the theory without much
                    practical courses and this meant I had to learn a different way. To this end I
                    began taking many courses online to develop my skills as a software developer
                    including web development, app development and user experience. Together I was
                    able to gather skills and with the addition of my COOP terms I've become very
                    comfortable in software development and design.
                </div>
                <br/>
                <div className='text-header'>To be better than my yesterday</div>
                <div className='text'>To constantly improve, develop and learn is what separates
                    humans from anything else on this planet. But what separates humans from other
                    humans then? Some would argue wealth, some maybe appearance. But what truly
                    separates people is their character, passion and drive. It is these
                    characteristics which I strive to improve and develop both within myself and
                    those I work with. Improvement is always possible and it is the essence of
                    development, to iterate and get better with each loop is what pushes businesses
                    and individuals forward. Developing a image for yourself and your work is never
                    easy, but with help it can be.
                </div>
                <br/>
                <div className='text'>Now you know a bit about me, but I am still eager to get
                    to know you. Feel free to contact me as I love to meet interesting folk and if
                    you are someone who might be able to benefit from my services I encourage you to
                    reach out.
                </div>

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
                <div className='title-header'>Life Long Learner.</div>
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
        const ciena = {
            title: 'Ciena',
            role: 'Software Developer',
            logo: '../images/logos/ciena.png',
            color: '8549c8'
        }
        return (
            <div className='experience'>
                <div className='title-header'>Where passion meets software.</div>
                <div className='experience-content'>
                    <div className='experience-item'>
                        <WorkCard item={ciena}/>
                    </div>
                    <div className='experience-item'>
                        <WorkCard item={ciena}/>
                    </div>
                    <div className='experience-item'>
                        <WorkCard item={ciena}/>
                    </div>
                    <div className='experience-item'>
                        <WorkCard item={ciena}/>
                    </div>
                </div>
            </div>
        )
    }
}

class WorkCard extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            title: props.item.title,
            role: props.item.role,
            logo: props.item.logo,
            color: props.item.color
        }
    }
    render() {
        const style = {
            'backgroundColor': `#${this.state.color}`
        }
        return (
            <div className='work-card' style={style}>
                <div className='work-title'>
                    <img src={ciena} className='work-logo'/>
                </div>
                <Mobile>
                    <div className='work-role'>
                        {this.state.role}</div>
                </Mobile>
            </div>
        )
    }
}