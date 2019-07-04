import React, { Component } from 'react'
import '../styles/signUp.css';
import pic from '../assets/adults-alcoholic-beverages-bar-1267697.jpg';


export default class signUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            company: true, 
            First_Name: '',
            Last_Name: "",
            DOB: "",
            Email: '',
            Phone_Number: '',
            PassWord: '',
            ReType_Password: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    async handleSubmit(e)  {
        e.preventDefault();
        if(this.state.ReType_Password !== this.state.PassWord) {
         await   alert('sorry passwords provided do not match!')
        }
    }
    render() {
        return (
            <section>
                <div id="col" className="image">
                    <img src={pic} alt="ill" />
                </div>
                <div id="col" className="form">
                  <h3> sign Up Now</h3>
                  <p>welcome to LC Network !</p>
                  <div className="identify">I am a 
                      <span>
                      <button 
                      type="button" 
                      className={this.state.company ? "active" : ""}
                      onClick={() => this.setState({company: true})}></button> company</span> 
                      <span>
                      <button 
                      type="button" 
                      className={this.state.company ? "" : "active"}
                      onClick={() => this.setState({company: false})}></button> individual</span> 
                  </div>
                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" onChange={this.handleChange} value={this.state.First_Name} name="First_Name" placeholder="First Name" required/>
                        <input type="text" onChange={this.handleChange} value={this.state.Last_Name} name="Last_Name"  placeholder="Last Name" required/>
                        <input type="text" onChange={this.handleChange} value={this.state.First_Name} name="First_Name"  placeholder="blabla" required/>
                        <input type="text" onChange={this.handleChange} value={this.state.DOB} name="DOB"  placeholder="Data of Birth" required/>
                        <input type="email" onChange={this.handleChange} value={this.state.Email} name="Email"  placeholder="Email" required/>
                        <input type="text" onChange={this.handleChange} value={this.state.Phone_Number} name="Phone_Number"  placeholder="Phone Number" required/>
                        <input type="password" onChange={this.handleChange} value={this.state.PassWord} name="PassWord"  placeholder="PassWord" required/>
                        <input type="password" onChange={this.handleChange} value={this.state.ReType_Password} name="ReType_Password"  placeholder="Re-type Password" required/>
                        <button>Next</button>
                    </div>
                    </form>
                </div>
            </section>
        )
    }
}
