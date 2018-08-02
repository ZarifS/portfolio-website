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
              UX and Brand Design
              <hr/>
            </div>
            <div className='skill-container text'>As a user experience (UX) designer I can
              help create interesting, functional and beautiful user interfaces and
              experiences for users visiting a website or application. The core functions of a
              designer is making sure that the content on the website as well as the layout
              and look is aligned with the companies vision. The difference in UX design is
              very apparent in many sites today as we can see that even if the content is very
              beneficial if the layout and user experience is poor the prestige of the site
              instantly deteriorates. While on the other side we have all visited very
              friendly and beautiful sites which instantly left us with a positive feeling
              about the company. My services will help your company and vision approach the
              latter.
            </div>
          </div>
          <div className='skill'>
            <div className='text-header'>
              Software Development
              <hr/>
            </div>
            <div className='skill-container text'>As a software engineer I can help bring
              your ideas and vision into reality. My experience in both the public and private
              sectors have allowed me to learn efficient and cost effective methods to develop
              great, secure and beautiful web sites and applications. My experience covers the
              full stack. This mean I can work on both the backend API and logic as well as
              develop a fast and efficient front end. Security is also something that I take
              very seriously and no matter how small or large your vision is I will make sure
              the software is secure and fast for any usage.</div>
          </div>
          <div className='skill'>
            <div className='text-header'>
              General Consulting
              <hr/>
            </div>
            <div className='skill-container text'>If you are not sure exactly what services
              you need and are looking for a helping hand in developing the technology side of
              your vision I can also offer general consulting services. These services can be
              a mix between UX design, software development and overall online branding. This
              is something many companies, small or large, starting or established can benefit
              from as it allows the company to realign their online persona with their vision.
              Investing in technology has always shown a high return and in
              today's modern and high-tech world the importance is greater than ever.
            </div>
          </div>
        </div>
        <div className='services-footer'>
          <Link to='/contact'>
            <div className='button'>
              <div className='text'>Get in Touch</div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
