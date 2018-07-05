import React, { Component } from 'react'
import '../styles/workPage.scss'
export default class WorkPage extends Component {
  constructor(props) {
      super(props)
  }
  render() {
    return (
      <div>
        {this.props.item.title}
      </div>
    )
  }
}
