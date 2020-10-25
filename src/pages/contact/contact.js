import React, { Component } from 'react';

class Contact extends Component {
    state = {  
        username: '',
        email: ''
    }

    changeState = (event) => {
        this.setState( {[event.target.id]: event.target.value} );
    }

    render() { 
        return ( 
            <div className="main">
                <h1>Contact Us</h1>
                <p>Thank you for checking out our website! Please let us know if you have any comments, suggestions, or improvements.</p>
                <form>
                    <div className="formGroup">
                        <label forHtml="username">Name</label><br/>
                        <input type="text" id="username" value={this.state.username} onChange={this.changeState} />
                    </div>
                    
                    <div className="formGroup">
                        <label forHtml="email">Email</label><br/>
                        <input type="text" id="email" value={this.state.email} onChange={this.changeState} />
                    </div>
                   
                   <div className="formGroup">
                       <label forHtml="comments">Comments</label><br/>
                       <textarea id="comment" rows="4" />
                   </div>
                </form>
            </div>
        );
    }
}
 
export default Contact;