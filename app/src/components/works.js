import React, {Component} from 'react'
import '../styles/works.scss'
class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                            <ProjectCard item={Munchies}/>
                            <ProjectCard item={Habitual}/>
                            <ProjectCard item={Graded}/>
                            <ProjectCard item={Website}/>
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

const Munchies = {
    title: 'Munchies',
    tech: 'React | Python',
    color1: '0bf9aa',
    color2: '19b78b',
    color3: '3cd291'
}

const Habitual = {
    title: 'Habitual',
    tech: 'Android | Realm',
    color1: '535b53',
    color2: '4f554f',
    color3: '393939'
}

const Graded = {
    title: 'Graded',
    tech: 'Android | Realm',
    color1: '4dcdee',
    color2: '2596d9',
    color3: '168fdd'
}

const Website = {
    title: 'Portfolio Site',
    tech: 'React',
    color1: 'ba49c8',
    color2: 'ac54e6',
    color3: '8112e3'
}

const BlockChainPaper = {
    title: 'The Implications of Blockchain Technologies',
    date: '2018',
    color: 'd4c447'
}


class ProjectCard extends Component {
    constructor(props) {
        super(props)
        console.log(props)
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

export default Works
