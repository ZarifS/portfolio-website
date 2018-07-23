import React, {Component} from 'react'
import '../styles/services.scss'
import {Link} from 'react-router-dom'

export default class Services extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='services-page'>
        <div className='services-header'>
          <div className='title-header'>
            Services
            <hr/>
          </div>
        </div>
        <div className='services-content'>
          <div className='skill'>
            <div className='text-header'>
              UX Design
              <hr/>
            </div>
            <div className='skill-container text'>Deserunt voluptate adipisicing velit
              ullamco dolore eiusmod dolor reprehenderit nostrud culpa labore do. Elit commodo
              elit incididunt nostrud. Velit tempor amet ullamco labore minim laboris ad.
              Labore sunt duis eu consectetur id in mollit et est eu do nulla. Aliquip
              voluptate nostrud eiusmod minim adipisicing. Pariatur tempor elit ut nulla et
              aute labore duis. Quis et exercitation non proident pariatur ex esse elit. Irure
              nostrud est ex et. Minim qui officia ad culpa reprehenderit pariatur cillum qui
              dolor nisi ea. Proident qui dolore enim in aute adipisicing. Voluptate mollit
              qui non veniam do pariatur reprehenderit tempor consectetur. Occaecat in magna
              adipisicing eiusmod duis laboris.</div>
          </div>
          <div className='skill'>
            <div className='text-header'>
              Software Development
              <hr/>
            </div>
            <div className='skill-container text'>Deserunt voluptate adipisicing velit
              ullamco dolore eiusmod dolor reprehenderit nostrud culpa labore do. Elit commodo
              elit incididunt nostrud. Velit tempor amet ullamco labore minim laboris ad.
              Labore sunt duis eu consectetur id in mollit et est eu do nulla. Aliquip
              voluptate nostrud eiusmod minim adipisicing. Pariatur tempor elit ut nulla et
              aute labore duis. Quis et exercitation non proident pariatur ex esse elit. Irure
              nostrud est ex et. Minim qui officia ad culpa reprehenderit pariatur cillum qui
              dolor nisi ea. Proident qui dolore enim in aute adipisicing. Voluptate mollit
              qui non veniam do pariatur reprehenderit tempor consectetur. Occaecat in magna
              adipisicing eiusmod duis laboris.</div>
          </div>
          <div className='skill'>
            <div className='text-header'>
              General Consulting
              <hr/>
            </div>
            <div className='skill-container text'>Deserunt voluptate adipisicing velit
              ullamco dolore eiusmod dolor reprehenderit nostrud culpa labore do. Elit commodo
              elit incididunt nostrud. Velit tempor amet ullamco labore minim laboris ad.
              Labore sunt duis eu consectetur id in mollit et est eu do nulla. Aliquip
              voluptate nostrud eiusmod minim adipisicing. Pariatur tempor elit ut nulla et
              aute labore duis. Quis et exercitation non proident pariatur ex esse elit. Irure
              nostrud est ex et. Minim qui officia ad culpa reprehenderit pariatur cillum qui
              dolor nisi ea. Proident qui dolore enim in aute adipisicing. Voluptate mollit
              qui non veniam do pariatur reprehenderit tempor consectetur. Occaecat in magna
              adipisicing eiusmod duis laboris.
            </div>
          </div>
        </div>
        <div className='services-footer'>
          <Link to = '/contact'>
            <div className='button'>
              <div className='text'>Get in Touch</div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
