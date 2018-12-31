import React, { Component } from 'react'
import '../styles/noMatch.scss'
export default class NoMatch extends Component {
    render() {
        return (
            <div className='noMatch-page'>
                <div className='noMatch-info'>
                    <div className='title-header'>404 Error</div>
                    <div className='text-header'>So this is kind of a top secret location, sorry. Please use the sidebar to navigate.</div>
                </div>
            </div>
        )
    }
}