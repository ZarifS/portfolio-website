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
            color1: props.item.color1,
            color2: props.item.color2,
            color3: props.item.color3,
            duration: props.item.duration,
            info: props.item.info
        }
    }
    render() {
        const style = {
            'background': `linear-gradient(to bottom left, #${this.state.color1}, #${this.state.color3}, #${this.state.color3})`
        }
        return (
            <div className='work-page' style={style}>
                <div className='work-page-container'>
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
            </div>
        )
    }
}
