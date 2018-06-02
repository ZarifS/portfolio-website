import React from 'react'
import {Link} from 'react-router-dom'
require('../styles/sidePanel.scss')

export default class SidePanel extends React.Component {
    render() {
        return (
            <div className='side-panel-container'>
                <div className='header-navigation'>
                    <div className='home'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='linkedIn'>
                        <Link to='/about'>About</Link>
                    </div>
                    <div className='gitHub'>
                        <Link to='/topics'>Topics</Link>
                    </div>
                    <div className='resume'></div>
                </div>
            </div>
        )
    }
}