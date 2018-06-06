import React from 'react';
import FA from 'react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import '../styles/menuIcon.scss'

export default class MenuIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className='menu'>
                <IconButton
                    style={{
                    'marginLeft': '5px',
                    'marginTop': '5px'
                }}
                    onClick={() => {
                    this
                        .props
                        .openDrawer()
                }}>
                    <FA name='bars' className='menuIcon'/>
                </IconButton>
            </div>
        )
    }
}