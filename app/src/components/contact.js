import React, {Component} from 'react'
import '../styles/contact.scss'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'name': '',
            'email': '',
            'message': '',
            'validEmail': false
        }
    }

    render() {
        return (
            <div className='contact-page'>
                <div className='contact-header'>
                    <div className='title-header'>
                        Contact
                        <hr/>
                    </div>
                </div>
                <div className='contact-content'>
                    <div className='contact-info'>
                        Speaking with other developers, designers, entrepreneurs and people in general
                        is always refreshing. Contact me through this form if you have any
                        recomendations, critiques or if you just want to say hello. If you are
                        interested in my work, it is all posted on Github and if you wish to connect
                        with me, feel free to send me an invitation through LinkedIn.</div>
                    <div className='contact-form'>
                        <form action="https://formspree.io/zarif.shahriar@hotmail.com" method="POST">
                            <label for="name">Name</label>
                            <input type="text" name="name" placeholder="John Doe"/>
                            <label for="email">Email</label>
                            <input type="email" name="email" placeholder="john.doe@email.com"/>
                            <label for="message">Message</label>
                            <input type="text" name="message" placeholder="Hey! Lets talk!"/>
                            <input type="hidden" name="_subject" value="Website Contact"/>
                            <input type="submit" name="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
