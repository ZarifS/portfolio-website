import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export default class Hamburger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
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
                }}>
                    <MenuIcon
                        style={{
                        'fontSize': '25px'
                    }}/>
                </IconButton>
            </div>
        )
    }
}