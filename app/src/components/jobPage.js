import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import '../styles/jobPage.scss'
import Chip from './chip'

export default class JobPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.item.title,
            role: props.item.role,
            logo: props.item.logo,
            color1: props.item.color1,
            color2: props.item.color2,
            color3: props.item.color3,
            duration: props.item.duration,
            info: props.item.info,
            skills: props.item.skills
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
        const chips = []
        this
            .state
            .skills
            .forEach(skill => {
                chips.push(<Chip value={skill}/>)
            })
        return (
            <div className='job-page' style={style}>
                <div className='exit-button'>
                    <Link to='/story/experience'>
                        <IconButton
                            style={{
                            'marginLeft': '5px',
                            'marginTop': '5px'
                        }}>
                            <i className="far fa-times-circle" style={iconStyle}></i>
                        </IconButton>
                    </Link>
                </div>
                <div className='job-page-container'>
                    <div className='job-page-header'>
                        <img src={this.state.logo} className='work-logo'/>
                        <hr/>
                    </div>
                    <div className='position'>
                        <div className='title-header'>{this.state.role}</div>
                        <div className='text-header'>
                            <i>{this.state.duration}</i>
                        </div>
                    </div>
                    <div className='position-info'>
                        <div className='text'>{this.state.info}</div>
                    </div>
                    <div className='position-chips'>
                        {chips}
                    </div>
                </div>
            </div>
        )
    }
}