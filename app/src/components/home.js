import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.scss'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='home-container'>
                <div className='home-header'>
                    <div className='title'>Zarif Shahriar</div>
                    <div className='title-header'>Developer. Designer. Entrepreneur.</div>
                    <div className='text'>Software Engineering student at the University of Ottawa
                        and a designer at heart. I love to create beautiful and interesting things. Lets
                        get to know each other.</div>
                </div>
                <div className='home-footer'>
                    <Link to='/contact'>
                        <div className='button'>
                            <div className='text'>Get in Touch</div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;