import React, {Component} from 'react'
import '../styles/chips.scss'

export default class Chip extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='chip'>
                <div className='value'>{this.props.value}</div>
            </div>
        )
    }
}
