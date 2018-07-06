import React, {Component} from 'react'
import '../styles/workPage.scss'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';

export default class WorkPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.item.title,
            tech: props.item.role,
            color1: props.item.color1,
            color2: props.item.color2,
            color3: props.item.color3,
            picture1: props.item.picture1,
            picture2: props.item.picture2
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
            <div className='workpage-page' style={style}>
                <div className='exit-button'>
                    <Link to='/works'>
                        <IconButton
                            style={{
                            'marginLeft': '5px',
                            'marginTop': '5px'
                        }}>
                            <i className="far fa-times-circle" style={iconStyle}></i>
                        </IconButton>
                    </Link>
                </div>
                <div className='workpage-content'>
                    <div className='center'>
                        <div className='workpage-header'>
                            <div className='work-logo'>{this.state.title}</div>
                            <hr/>
                        </div>
                        <div className='workpage-intro'>
                            <div className='workpage-intro-info'>
                                Ea excepteur pariatur laborum officia deserunt. Do nostrud reprehenderit nostrud
                                et mollit culpa nulla ut ut aute in ut eu. Cillum ex eu eu non incididunt
                                excepteur. Duis veniam aute tempor aliquip consequat est. In cillum occaecat do
                                cillum ipsum. Duis est est nisi proident.
                                <br/>
                                <br/>
                                Ea excepteur pariatur laborum officia deserunt. Do nostrud reprehenderit nostrud
                                et mollit culpa nulla ut ut aute in ut eu. Cillum ex eu eu non incididunt
                                excepteur. Duis veniam aute tempor aliquip consequat est. In cillum occaecat do
                                cillum ipsum. Duis est est nisi proident.
                            </div>
                            <img src={this.state.picture1}/>
                        </div>
                    </div>
                    <div className='workpage-body'>
                        <img src={this.state.picture2}/>
                        <div className='workpage-body-info'>
                            Ea excepteur pariatur laborum officia deserunt. Do nostrud reprehenderit nostrud
                            et mollit culpa nulla ut ut aute in ut eu. Cillum ex eu eu non incididunt
                            excepteur. Duis veniam aute tempor aliquip consequat est. In cillum occaecat do
                            cillum ipsum. Duis est est nisi proident.
                            <br/>
                            <br/>
                            Ea excepteur pariatur laborum officia deserunt. Do nostrud reprehenderit nostrud
                            et mollit culpa nulla ut ut aute in ut eu. Cillum ex eu eu non incididunt
                            excepteur. Duis veniam aute tempor aliquip consequat est. In cillum occaecat do
                            cillum ipsum. Duis est est nisi proident.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
