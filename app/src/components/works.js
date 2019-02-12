import React, {Component} from 'react'
import WorkPage from './workPage'
import DesignPage from './designPage'
import {Route, Link, Switch} from 'react-router-dom'
import '../styles/works.scss'
import {
    Azauri,
    Munchies,
    Habitual,
    Graded,
    BlockChainPaper,
    CloudComputingPaper
} from './constants'

export default class WorksRouteHandler extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path={`/works/habitual`}
                    render=
                    { () => <WorkPage item={Habitual}/> }/>
                <Route exact path={`/works/graded`} render={() => <WorkPage item={Graded}/>}/>
                <Route
                    exact
                    path={`/works/munchies`}
                    render={() => <WorkPage item={Munchies}/>}/>
                <Route exact path={`/works/azauri`} render={() => <DesignPage item={Azauri}/>}/>
                <Route path={`/works`} component={Works}/>
            </Switch>
        )
    }
}

class Works extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='works-page'>
                <div className='works-header'>
                    <div className='title-header'>
                        Works
                        <hr/>
                    </div>
                </div>
                <div className='works-content'>
                    <div className='projects'>
                        <div className='text-header'>
                            Client Work
                            <hr/>
                        </div>
                        <div className='project-container'>
                            <Link to={`${this.props.match.url}` + '/azauri'}>
                                <ProjectCard item={Azauri}/>
                            </Link>
                        </div>
                    </div>
                    <div className='projects'>
                        <div className='text-header'>
                            Software Projects
                            <hr/>
                        </div>
                        <div className='project-container'>
                            <Link to={`${this.props.match.url}` + '/munchies'}>
                                <ProjectCard item={Munchies}/>
                            </Link>
                            <Link to={`${this.props.match.url}` + '/habitual'}>
                                <ProjectCard item={Habitual}/>
                            </Link>
                            <Link to={`${this.props.match.url}` + '/graded'}>
                                <ProjectCard item={Graded}/>
                            </Link>
                        </div>
                    </div>
                    <div className='projects'>
                        <div className='text-header'>
                            Research Papers
                            <hr/>
                        </div>
                        <div className='project-container'>
                            <a href={require('../documents/Implications_Blockchain.pdf')} target="_blank">
                                <ResearchCard item={BlockChainPaper}/>
                            </a>
                            <a href={require('../documents/Cloud_Computing.pdf')} target="_blank">
                                <ResearchCard item={CloudComputingPaper}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class ProjectCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.item.title,
            tech: props.item.tech,
            logo: props.item.logo,
            color: props.item.color1
        }
    }
    render() {
        const style = {
            'backgroundColor': `#${this.state.color}`
        }
        return (
            <div className='project-card' style={style}>
                <div className='project-title'>{this.state.title}</div>
                <div className='project-tech'>{this.state.tech}</div>
                <i className='fas fa-arrow-right '></i>
            </div>
        )
    }
}

class ResearchCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.item.title,
            date: props.item.date,
            color: props.item.color
        }
    }
    render() {
        const style = {
            'backgroundColor': `#${this.state.color}`
        }
        return (
            <div className='research-card' style={style}>
                <div className='research-title'>{this.state.title}</div>
                <div className='research-date'>{this.state.date}</div>
                <i className='fas fa-arrow-right'></i>
            </div>
        )
    }
}
