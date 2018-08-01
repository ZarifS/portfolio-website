import React from 'react'
// import FA from 'react-fontawesome'
import IconButton from '@material-ui/core/IconButton'
import '../styles/menuIcon.scss'

export default class MenuIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const iconStyle = {
            color: 'white',
            fontSize: '.8em'
        };
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
                    <i className='fas fa-bars' style={iconStyle}></i>
                </IconButton>
            </div>
        )
    }
}