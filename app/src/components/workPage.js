import React, {Component} from 'react'
import '../styles/workPage.scss'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';

const iconStyle = {
    color: 'white',
    fontSize: '1.2em'
};

export default class WorkPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.item.title,
            tech: props.item.role,
            color1: props.item.color1,
            color2: props.item.color2,
            color3: props.item.color3,
            picture1: props.item.picture1,
            picture2: props.item.picture2,
            pictureClass: props.item.pictureClass,
        }
    }
    render() {
        const style = {
            'background': `linear-gradient(to bottom left, #${this.state.color1}, #${this.state.color2}, #${this.state.color3})`
        }
        let props = {
            platforms: this.props.item.platforms,
            links: this.props.item.links
            }
        return (
            <div className='workpage-page' style={style}>
                <div className='exit-button'>
                    <Link to='/works'>
                        <IconButton
                            style={{
                            'marginLeft': '5px',
                            'marginTop': '5px'
                        }}>
                            <i className="far fa-times-circle" style={iconStyle}></i>
                        </IconButton>
                    </Link>
                </div>
                <div className='workpage-content'>
                    <div className='center-wrapper'>
                        <div className='workpage-header'>
                            <div className='work-logo title-header'>{this.state.title}</div>
                            <hr/>
                        </div>
                    </div>
                    <div className='workpage-intro'>
                        <div className='workpage-intro-info text'>
                            Ea excepteur pariatur laborum officia deserunt. Do nostrud reprehenderit nostrud
                            et mollit culpa nulla ut ut aute in ut eu. Cillum ex eu eu non incididunt
                            excepteur. Duis veniam aute tempor aliquip consequat est. In cillum occaecat do
                            cillum ipsum. Duis est est nisi proident.
                            <br/>
                            <br/>
                            Ea excepteur pariatur laborum officia deserunt. Do nostrud reprehenderit nostrud
                            et mollit culpa nulla ut ut aute in ut eu. Cillum ex eu eu non incididunt
                            excepteur. Duis veniam aute tempor aliquip consequat est. In cillum occaecat do
                            cillum ipsum. Duis est est nisi proident.
                        </div>
                        <img className={this.state.pictureClass} src={this.state.picture1}/>
                    </div>
                    <div className='workpage-body'>
                        <img className={this.state.pictureClass} src={this.state.picture2}/>
                        <div className='workpage-body-info text'>
                            Ea excepteur pariatur laborum officia deserunt. Do nostrud reprehenderit nostrud
                            et mollit culpa nulla ut ut aute in ut eu. Cillum ex eu eu non incididunt
                            excepteur. Duis veniam aute tempor aliquip consequat est. In cillum occaecat do
                            cillum ipsum. Duis est est nisi proident.
                            <br/>
                            <br/>
                            Ea excepteur pariatur laborum officia deserunt. Do nostrud reprehenderit nostrud
                            et mollit culpa nulla ut ut aute in ut eu. Cillum ex eu eu non incididunt
                            excepteur. Duis veniam aute tempor aliquip consequat est. In cillum occaecat do
                            cillum ipsum. Duis est est nisi proident.
                        </div>
                    </div>
                    <div className='workpage-footer'>
                        <div className='text'>See more of the project.</div>
                        <div className='footer-icons'>
                            <Footer {...props}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function AndroidLogo(props) {
    return (
        <IconButton
            style={{
            'marginLeft': '5px',
            'marginTop': '5px'
        }}>
            <a href={props.link} target="_blank">
                <i className='fab fa-google-play' style={iconStyle}></i>
            </a>
        </IconButton>
    )
}
function IOSLogo(props) {
    return (
        <IconButton
            style={{
            'marginLeft': '5px',
            'marginTop': '5px'
        }}>
            <a href={props.link} target="_blank">
                <i className='fab fa-app-store' style={iconStyle}></i>
            </a>
        </IconButton>
    )
}
function GitHubLogo(props) {
    return (
        <IconButton
            style={{
            'marginLeft': '5px',
            'marginTop': '5px'
        }}>
            <a href={props.link} target="_blank">
                <i className='fab fa-github' style={iconStyle}></i>
            </a>
        </IconButton>
    )
}
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let platforms = this.props.platforms
        var logos = platforms.map((platform) => {
            if (platform === 'github') {
                return <GitHubLogo link={this.props.links.github}/>
            } else if (platform === 'android') {
                return <AndroidLogo link={this.props.links.android}/>
            } else if (platform === 'ios') {
                return <IOSLogo link={this.props.links.ios}/>
            }
        })
        return (
            <div>
                {logos}
            </div>
        )
    }
}