import React from 'react'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import FA from 'react-fontawesome'
require('../styles/sidePanel.scss')

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
                            <FA name='home' style={iconStyle}/>
                        </Link>
                    </div>
                    <div className='linkedIn nav-item'>
                        <Link to='/about'>
                            <FA name='linkedin' style={iconStyle}/>
                        </Link>
                    </div>
                    <div className='github nav-item'>
                        <Link to='/topics'>
                            <FA name='github' style={iconStyle}/>
                        </Link>
                    </div>
                    <div className='resume nav-item'>
                        <Link to='/topics'>
                            <FA name='address-card' style={iconStyle}/>
                        </Link>
                    </div>
                </div>
                <div className='content-navigation'>
                    <div className='nav-item'>
                        <Link to='/about'>
                            My Story
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/topics'>
                            Works
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/topics'>
                            Blog
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/topics'>
                            Services
                        </Link>
                    </div>
                </div>
                <div className='contact-navigation'>
                    <div className='nav-item'>Contact</div>
                </div>
            </div>
        )
    }
}