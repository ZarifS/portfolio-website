import React from 'react';
import FA from 'react-fontawesome'
import IconButton from '@material-ui/core/IconButton';

export default class Hamburger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const menuStyle = {
            color: 'white',
            fontSize: '.8em',
            textShadow: '1px 1px 1px #454545'
        };
        return (
            <div
                style={{
                'height': '60px',
                'position': 'fixed',
                'zIndex': '1',
                'top': '0',
                'right': '0'
            }}>
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
                    <FA name='bars' style={menuStyle}/>
                </IconButton>
            </div>
        )
    }
}