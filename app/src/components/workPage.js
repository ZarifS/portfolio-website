import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import '../styles/workPage.scss'

export default class WorkPage extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            title: props.item.title,
            role: props.item.role,
            logo: props.item.logo,
            color1: props.item.color1,
            color2: props.item.color2,
            color3: props.item.color3,
            duration: props.item.duration,
            info: props.item.info
        }
    }
    render() {
        const style = {
            'background': `linear-gradient(to bottom left, #${this.state.color1}, #${this.state.color2}, #${this.state.color3})`
        }
        const iconStyle = {
            color: 'white',
            fontSize: '1.2em'
        };
        return (
            <div className='work-page' style={style}>
                <div className='exit-button'>
                    <Link to='/story/experience'>
                        <IconButton
                            style={{
                                'marginLeft': '20px',
                                'marginTop': '20px',
                                'marginBottom': '10px'
                            }}>
                            <i className="far fa-times-circle" style={iconStyle}></i>
                        </IconButton>
                    </Link>
                </div>
                <div className='work-page-container'>
                    <div className='work-page-header'>
                        <img src={this.state.logo} className='work-logo' />
                        <hr />
                    </div>
                    <div className='position'>
                        <div className='header'>{this.state.role}</div>
                        <div className='text-header'><i>{this.state.duration}</i></div>
                    </div>
                    <div className='position-info'>
                        <div className='text'>{this.state.info}</div>
                    </div>
                    <div className='position-chips'></div>
                </div>
            </div>
        )
    }
}