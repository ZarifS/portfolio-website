import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Responsive from 'react-responsive'
import WorkPage from './workPage'
import '../styles/story.scss'
import cienaLogo from './../images/logos/ciena.svg'
import ibmLogo from './../images/logos/ibm.svg'
import kinaxisLogo from './../images/logos/kinaxis.svg'
import canadaLogo from './../images/logos/canada.svg'

const ciena = {
    title: 'Ciena',
    role: 'Full Stack Developer',
    logo: cienaLogo,
    color1: '8148c4',
    color2: '702fd8',
    color3: '2216d6',
    duration: 'Jan 2017 - May 2017',
    info: 'As in intern at Ciena, a global telecommunications company, I was introduced to ' +
            'agile development and a array of new technologies. As my first job at a private ' +
            'software development company I was able to learn many new skills and get introdu' +
            'ced to industry standards very quickly. As a full stack developer I worked on th' +
            'e Alarms software, a micro-service for one of Ciena’s hardware solutions. My dev' +
            'elopment involved using Ember to continue adding and developing the front end we' +
            'b app, while using Java to develop the backend API functionality. I was also int' +
            'roduced to testing and using source control to review and document my developmen' +
            't. Working at Ciena opened my eyes to what software development is like in the p' +
            'rivate sector and also equipped me with the skills needed to further my career p' +
            'ath as a software engineer.',
    skills: ['EmberJS', 'BitBucket', 'Mocha', 'Java', 'Cassandra', 'REST', 'Postman']
}
const canada = {
    title: 'canada',
    role: 'Full Stack Developer',
    logo: canadaLogo,
    color1: 'a8a8a8',
    color2: 'a8a8a8',
    color3: '7d7d7d',
    duration: 'May 2016 - Aug 2016',
    info: 'Agriculture and Agri-Food Canada (AAFC) was my first experience in professional ' +
            'software development and through it I was introduced to many different aspects o' +
            'f the field. The project I worked on dealt with data about different farms and f' +
            'armers across Canada. The application that stored this data was allowed for inte' +
            'rnal usage only and was outdated and needed to be redesigned and rebuilt for fas' +
            'ter querying and a better user experience. Throughout my term I worked on redesi' +
            'gning the application from the ground up using web technologies such as Javascri' +
            'pt, JQuery and Twitter Bootstrap alongside Groovy on Grails to deal with the bac' +
            'kend REST api and database. I learnt many interesting skills such as gathering r' +
            'equirements from the end users who would use the application, to designing both ' +
            'the front and back end of a web application from scratch.',
    skills: ['Twitter Bootstrap', 'HTML/CSS/Javascript', 'jQuery', 'Groovy on Grails', 'REST']
}
const ibm = {
    title: 'ibm',
    role: 'Back End Engineer',
    logo: ibmLogo,
    color1: '0f98ca',
    color2: '2554ae',
    color3: '2d50ce',
    duration: 'May 2018 - Aug 2018',
    info: 'As a future blue intern at IBM the work I did was very similar to full time empl' +
            'oyees. As a developer on the Security division I worked on QRadar which is the f' +
            'lagship product IBM sells for managing security and online traffic. In terms of ' +
            'work, I focused on back end development in an agile environment which dealt with' +
            ' Node JS and SQLite. Efficiency and performance were key during my development a' +
            's the application I was working on was a add-on for the main QRadar app and need' +
            'ed to be memory friendly. During my internship I was able to work on creating se' +
            'cure REST endpoints, efficient database querying with SQL, as well as developing' +
            ' asynchronous scripting using Node. Working at IBM allowed my backend developmen' +
            't skills to develop and mature to industry standards.',
    skills: ['ReactJS', 'NodeJS', 'SQLite', 'REST', 'Mocha']
}
const kinaxis = {
    title: 'kinaxis',
    role: 'Front End Engineer',
    logo: kinaxisLogo,
    color1: 'ff0034',
    color2: 'a61818',
    color3: 'a61818',
    duration: 'Sept 2017 - Dec 2017',
    info: 'As an intern at Kinaxis, a small supply chain company in Ottawa, I was given the' +
            ' opportunity to work alongside some brilliant developers. Being in intern I was ' +
            'still given the same work and tasks as other developers on my team and my work m' +
            'ostly consisted of developing the front end mobile application Rapid Response. R' +
            'apid response is a application that helps companies accurately and efficiently m' +
            'anage their supply chain. The font end tech stack consisted of Angular, Redux, S' +
            'ASS, Typescript alongside testing suites such as Jasmine. The development was ag' +
            'ile and allowed me to learn many new skills in terms of developing scalable web ' +
            'technologies.',
    skills: ['AngularJS', 'BitBucket', 'Jasmine', 'Redux', 'NodeJS', 'REST']
}

// Check if the route being passed is specifically a workpage if not render the
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
                    render={() => <WorkPage item={canada}/>}/>
                <Route
                    exact
                    path={`/story/experience/ciena`}
                    render={() => <WorkPage item={ciena}/>}/>
                <Route
                    exact
                    path={`/story/experience/kinaxis`}
                    render={() => <WorkPage item={kinaxis}/>}/>
                <Route
                    exact
                    path={`/story/experience/ibm`}
                    render={() => <WorkPage item={ibm}/>}/>
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
                        <Route
                            exact
                            path={`${this.props.match.path}/experience/ciena`}
                            render={() => <WorkPage item={ciena}/>}/>
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
                    dividends for years to come. Having worked in the public sector, as a Software
                    Analyst and Developer, and in the private sector, as a Software Developer
                    (Ciena), Web and Applications Engineer (Kinaxis), and a Software Engineer (IBM),
                    I've gained a technical and theoretical skill set which allows me to consult
                    others by understanding their current positions, while simultaneously offering
                    advanced, holistic, and relevant solutions. Developing an image for yourself and
                    your work is never easy, but with help it can be.
                </div>
                <br/>
                <div className='text'>Now you now know a bit about me, but I am still eager to
                    get to know you. Feel free to contact me as I love to meet interesting folk and
                    if you are someone who might be able to benefit from my services I encourage you
                    to reach out.
                </div>
                <br/>
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
        console.log(props)
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
                <div className='work-title'>
                    <img src={this.state.logo} className='work-logo'/>
                </div>
            </div>
        )
    }
}