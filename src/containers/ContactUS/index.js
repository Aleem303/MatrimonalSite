import React, { Component } from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Navigation from '../../components/Navigation'

class ContactUs extends Component {
	state = {
        email: "",
        name: "",
        message: "",
        succes:"",
        status:false,
        alert:false
	}

	handleSubmit = (event) => {
		event.preventDefault();
		
        fetch('http://localhost/restapi_test/demoInsert.php',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            name:this.state.name,
            email:this.state.email,
            message:this.state.message
            
          })
        })
        .then(res=> res.json())
        .then((result)=>
        {
            //alert(result);
            this.setState({succes:result.message, status:result.status,});
            if(this.state.status == true){
                this.setState({alert:true})
            }
        },
        (error)=>{
          //alert('Failed')
          this.setState({succes:error.message});
        }
        )
    }

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  render() {
    const color = '#f8f9fa'
    return (
    <div>
      <Navigation/>
    <Card background={color}>
        {(this.state.status === false)
        ?
      <div className="App container" style={{marginTop: "2%", marginBottom: "2%"}} >
      <div style={{background: '#ffffff'}}>
        <div className="col-lg-6 offset-lg-3" style={{paddingTop: "10%", paddingBottom: "7%"}}>
                    {(this.state.alert === false)
                    ?
					<h1 style={{paddingBottom: "5%"}}>Contact Us</h1>
                    :
                    <h1 style={{paddingBottom: "5%"}}>{this.state.succes}</h1>
                     }
					<form onSubmit={ this.handleSubmit }>
						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input
								name="email"
								value={ this.state.email }
								onChange={ this.handleChange }
								id="email"
                                type="email"
                                placeholder="Enter your email e.g irfan@abc.com"
								className="form-control"
								required/>
						</div>

						<div className="form-group">
							<label htmlFor="name">Name:</label>
							<input
								name="name"
								value={ this.state.name }
								onChange={ this.handleChange }
								id="name"
                                type="text"
                                placeholder="Enter your name e.g irfan"
								className="form-control"
								required/>
						</div>

						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								value={ this.state.message }
								onChange={ this.handleChange }
								id="message"
                                type="text"
                                rows={7}
                                placeholder="Write your message here.....!"
								className="form-control"
								required/>
						</div>

						<button  className="btn btn-primary">Submit</button>
					</form>
				</div>
             </div>
         
      </div>
      :
      <div className="App container" style={{marginTop: "2%", marginBottom: "2%"}}><h1 style={{paddingBottom: "5%"}}>{this.state.succes}</h1></div>
    }
    </Card>
    </div>
    );
  }
}

export default ContactUs;