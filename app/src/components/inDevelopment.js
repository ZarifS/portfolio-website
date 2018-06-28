import React, { Component } from 'react'
import '../styles/inDevelopment.scss'
export default class InDevelopment extends Component {
    render() {
        return (
            <div className='inDevelopment-page'>
                <div className='development-info'>
                    <div className='title-header'>Page In Development</div>
                    <div className='text-header'>This part of the site is still under development. Check back soon!</div>
                </div>
            </div>
        )
    }
}
