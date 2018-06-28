import React, {Component} from 'react'
import '../styles/workPage.scss'

export default class WorkPage extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            title: props.item.title,
            role: props.item.role,
            logo: props.item.logo,
            color: props.item.color,
            duration: props.item.duration,
            info: props.item.info
        }
    }
    render() {
        return (
            <div className='work-page'>
                <div className='header'>
                    <img src={this.state.logo} className='work-logo'/>
                    <hr/>
                </div>
                <div className='position'>
                    <div className='text-header'>{this.state.role}</div>
                    <div className='text-header'>{this.state.duration}</div>
                </div>
                <div className='position-info'>{this.state.info}</div>
                <div className='position-chips'></div>
            </div>
        )
    }
}
