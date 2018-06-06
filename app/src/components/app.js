import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import SidePanel from './sidePanel'
import MenuIcon from './menuIcon'
import Responsive from 'react-responsive'
import Drawer from '@material-ui/core/SwipeableDrawer'
import "../styles/app.scss"
import MyStory from './myStory'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} maxWidth={991} />

const Home = () => (
    <div>
        <h2 className='titleHeader'>Zarif Shahriar</h2>
    </div>
)
const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
        this.openDrawer = this
            .openDrawer
            .bind(this)
    }
    openDrawer() {
        this.setState({ menuOpen: true })
    }
    render() {
        return (
            <BrowserRouter>
                <div className='app'>
                    <div className='content-area'>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/story" component={MyStory} />
                            <Route exact path="/works" component={About} />
                        </Switch>
                    </div>
                    <Desktop>
                        < SidePanel />
                    </Desktop>
                    <Tablet>
                        <MenuIcon
                            openDrawer={this
                                .openDrawer
                                .bind(this)} />
                        <Drawer
                            open={this.state.menuOpen}
                            onClose={() => this.setState({ menuOpen: false })}
                            onOpen={() => this.setState({ menuOpen: true })}
                            anchor="right">
                            <SidePanel closerMenu={() => this.setState({ menuOpen: false })} />
                        </Drawer>
                    </Tablet>
                </div>
            </BrowserRouter>
        )
    }
}
export default App