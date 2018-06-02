import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import SidePanel from './sidePanel'
import Responsive from 'react-responsive'

const Desktop = props => <Responsive {...props} minWidth={992}/>
const Tablet = props => <Responsive {...props} maxWidth={991}/>

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)
const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const MyStory = ({match}) => (
    <div>
        <h2>My Story</h2>
        <ul>
            <li>
                <Link to={`${match.url}/about`}>
                    About Me.
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/education`}>
                    My Education.
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/experience`}>
                    My Experience.
                </Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic}/>
        <Route
            exact
            path={match.path}
            render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className='contentArea'>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={MyStory}/>
                    </div>
                    <div className='navigationArea'>
                        <Desktop>
                            < SidePanel/>
                        </Desktop>
                        <Tablet>Hamburger!</Tablet>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default App