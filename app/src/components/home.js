import React, {Component} from 'react';
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
                    <div className='title-header'>Zarif Shahriar</div>
                    <div className='header'>Developer. Designer. Entreprenuer.</div>
                    <div className='info'>Software Engineering student at the University of Ottawa
                        and a designer at heart. I love to create beautfiul and interesting things. Lets
                        get to know each other.</div>
                </div>
            </div>
        );
    }
}

export default Home;