import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/sidePanel.scss"
import Responsive from 'react-responsive'
import Particles from 'react-particles-js';
import particlesConfig from '../particlesjs-config.json';

const Desktop = props => <Responsive {...props} minWidth={992}/>

export default class SidePanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.onNavBarElementClick = this
            .onNavBarElementClick
            .bind(this)
    }
    onNavBarElementClick() {
        if (this.props.closerMenu !== undefined) {     this         .props
        .closerMenu() }
    }

    render() {
        const iconStyle = {
            color: 'white',
            fontSize: '1.5em'
        };
        return (
            <div className='side-panel-container'>
                <Desktop>
                    <Particles
                        className='particlesCanvasStyle'
                        params={particlesConfig}
                        width={'20vw'}
                        height={'80vw'}/>
                </Desktop>
                <div className='header-navigation'>
                    <div className='home nav-item' onClick={() => this.onNavBarElementClick()}>
                        <Link to='/'>
                            <i className="fas fa-home" style={iconStyle}></i>
                        </Link>
                    </div>
                    <div className='linkedIn nav-item'>
                        <a href='https://www.linkedin.com/in/zarifshahriar/' target="_blank">
                            <i className='fab fa-linkedin-in' style={iconStyle}></i>
                        </a>
                    </div>
                    <div className='github nav-item'>
                        <a href='https://github.com/ZarifS' target="_blank">
                            <i className='fab fa-github' style={iconStyle}/>
                        </a>
                    </div>
                    <div className='resume nav-item'>
                        <a href={require('../documents/zshahriar_resume.pdf')} target="_blank">
                            <i className="fas fa-address-card" style={iconStyle}></i>
                        </a>
                    </div>
                </div>
                <div className='content-navigation'>
                    <div className='nav-item' onClick={() => this.onNavBarElementClick()}>
                        <Link to='/story'>
                            My Story
                        </Link>
                    </div>
                    <div className='nav-item' onClick={() => this.onNavBarElementClick()}>
                        <Link to='/works'>
                            Works
                        </Link>
                    </div>
                    <div className='nav-item' onClick={() => this.onNavBarElementClick()}>
                        <Link to='/services'>
                            Services
                        </Link>
                    </div>
                    <div className='nav-item' onClick={() => this.onNavBarElementClick()}>
                        <Link to='/blog'>
                            Blog
                        </Link>
                    </div>
                </div>
                <div className='contact-navigation'>
                    <div className='nav-item'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}