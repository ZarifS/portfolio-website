import React, {Component} from 'react'
import WorkPage from './workPage'
import {Route, Link, Switch} from 'react-router-dom'
import '../styles/works.scss'
import {Munchies, Habitual, Graded, Website, BlockChainPaper} from './constants'

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
                    {
                        () => <WorkPage item={Habitual}/>
                    }/>
                <Route exact path={`/works/graded`} render={() => <WorkPage item={Graded}/>}/>
                <Route
                    exact
                    path={`/works/munchies`}
                    render={() => <WorkPage item={Munchies}/>}/>
                <Route exact path={`/works/website`} render={() => <WorkPage item={Website}/>}/>
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
                        <div className='project-header'>
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
                            <Link to={`${this.props.match.url}` + '/website'}>
                                <ProjectCard item={Website}/>
                            </Link>
                        </div>
                    </div>
                    <div className='projects'>
                        <div className='project-header'>
                            Research Papers
                            <hr/>
                        </div>
                        <div className='project-container'>
                            <ResearchCard item={BlockChainPaper}/>
                            <ResearchCard item={BlockChainPaper}/>
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
        console.log(props)
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
