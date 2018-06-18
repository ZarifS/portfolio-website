import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/sidePanel.scss"

export default class SidePanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const iconStyle = {
            color: 'white',
            fontSize: '1.5em'
        };
        return (
            <div className='side-panel-container'>
                <div className='header-navigation'>
                    <div className='home nav-item'>
                        <Link to='/'>
                            <i class="fas fa-home" style={iconStyle}></i>
                        </Link>
                    </div>
                    <div className='linkedIn nav-item'>
                        <a href='https://www.linkedin.com/in/zarifshahriar/' target="_blank">
                            <i class='fab fa-linkedin-in' style={iconStyle}></i>
                        </a>
                    </div>
                    <div className='github nav-item'>
                        <a href='https://github.com/ZarifS' target="_blank">
                            <i class='fab fa-github' style={iconStyle}/>
                        </a>
                    </div>
                    <div className='resume nav-item'>
                        <a href={require('../documents/zshahriar_resume.pdf')} target="_blank">
                        <i class="fas fa-address-card" style={iconStyle}></i>
                        </a>
                    </div>
                </div>
                <div className='content-navigation'>
                    <div className='nav-item'>
                        <Link to='/story'>
                            My Story
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/works'>
                            Works
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/works'>
                            Blog
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/works'>
                            Services
                        </Link>
                    </div>
                </div>
                <div className='contact-navigation'>
                    <div className='nav-item'>
                        <Link to='/story'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}