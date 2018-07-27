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

    componentDidMount() {
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var message = document.getElementById('message');
        name.addEventListener('keypress', function (event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        })
        message.addEventListener('keypress', function (event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                var s = message.value
                console.log(s)
                document
                    .getElementById('message')
                    .value = s + '\n'
            }
        })
        email.addEventListener('keypress', function (event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        })
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
                    <div className='contact-info text'>
                        Speaking with other developers, designers, entrepreneurs and people in general
                        is always refreshing. Contact me through this form if you have any
                        recomendations, critiques or if you just want to say hello.
                        <br/>
                        <br/>If you are interested in my work, it is all posted on Github and if you
                            wish to connect with me, feel free to send me an invitation through LinkedIn. If
                            you are interested in working together or in the services I offer, please send me a
                            message as I would love to get in touch with you.</div>
                    <div className='contact-form'>
                        <form action="https://formspree.io/zarif.shahriar@hotmail.com" method="POST">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id='name' placeholder="John Doe"/>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id='email' placeholder="john.doe@email.com"/>
                            <label htmlFor="message">Message</label>
                            <textarea type="text" name="message" id='message' placeholder="Hey! Lets talk!"></textarea>
                            <input type="hidden" name="_subject" value="Website Contact"/> {/* <input type="submit" name="submit" value="Submit"/> */}
                            <input type="submit" name="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
