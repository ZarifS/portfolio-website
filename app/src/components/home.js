import React, { Component } from 'react';
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
                    <h2 className='titleHeader'>Zarif Shahriar</h2>
                </div>
            </div>
        );
    }
}

export default Home;