import React, { Component } from 'react'
import '../styles/designPage.scss'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'

const iconStyle = {
  color: 'white',
  fontSize: '1.2em'
}

export default class DesignPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.item.title,
      tech: props.item.role,
      color1: props.item.color1,
      color2: props.item.color2,
      color3: props.item.color3,
      picture1: props.item.picture1,
      picture2: props.item.picture2,
      picture3: props.item.picture3,
      pictureClass: props.item.pictureClass,
      client: props.item.client,
      problem: props.item.problem,
      info1: props.item.info1,
      info2: props.item.info2,
      review: props.item.review,
      reviewee: props.item.reviewee
    }
  }
  render() {
    const style = {
      background: `linear-gradient(to bottom left, #${this.state.color1}, #${
        this.state.color2
      }, #${this.state.color3})`
    }
    return (
      <div className="designpage" style={style}>
        <div className="exit-button">
          <Link to="/works">
            <IconButton
              style={{
                marginLeft: '5px',
                marginTop: '5px'
              }}
            >
              <i className="far fa-times-circle" style={iconStyle} />
            </IconButton>
          </Link>
        </div>
        <div className="designpage-content">
          <div className="center-wrapper">
            <div className="designpage-header">
              <div className="work-logo title-header">{this.state.title}</div>
              <hr />
            </div>
          </div>
          <div className="designpage-intro">
            <div className="designpage-intro-info text">
              <h2>CLIENT</h2>
              {this.state.client}
            </div>
            <div className="designpage-intro-info text">
              <h2>PROBLEM</h2>
              {this.state.problem}
            </div>
          </div>
          <div className="designpage-body">
            <img
              className={this.state.pictureClass}
              src={this.state.picture1}
            />
            <div className="designpage-body-info text">{this.state.info1}</div>
          </div>
          <div className="designpage-body">
            <div className="designpage-body-info text">{this.state.info2}</div>
            <img
              className={this.state.pictureClass}
              src={this.state.picture2}
            />
          </div>
          <div className="designpage-body">
            <img
              className={this.state.pictureClass}
              src={this.state.picture3}
            />
            <div className="designpage-body-info text">
              <h3>Client Testimony:</h3>
              {this.state.review}
              <br />
              <p className="reviewee">{this.state.reviewee}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
