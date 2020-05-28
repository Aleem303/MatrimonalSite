import React, { Component } from 'react';
import './style.css';
import Card from '../../components/UI/Card';

class SignInForm extends Component {
	state = {
		    name: "",
        password: "",
        succes:"",
        status:false,
        alert:false
	}

	handleSubmit = (event) => {
		event.preventDefault();
		
        fetch('http://localhost/Api_test/login.php',{
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
    
    <Card background={color}>
        {(this.state.status === false)
        ?
      <div className="App container" style={{marginTop: "2%", marginBottom: "2%"}} >
      <div style={{background: '#ffffff'}}>
        <div className="col-lg-6 offset-lg-3" style={{paddingTop: "10%", paddingBottom: "7%"}}>
                    {(this.state.alert === false)
                    ?
					<h1 style={{paddingBottom: "5%"}}>SIGN IN</h1>
                    :
                    <h1 style={{paddingBottom: "5%"}}>{this.state.succes}</h1>
                     }
					<form onSubmit={ this.handleSubmit }>
                         
                        <div className="form-group">
							<label htmlFor="name">User Name:</label>
							<input
								name="name"
								value={ this.state.name }
								onChange={ this.handleChange }
								id="name"
                                type="text"
                                placeholder="Enter user name e.g irfan"
								className="form-control"
								required/>
						</div>

                        <div className="form-group">
							<label htmlFor="name">Password:</label>
							<input
								name="password"
								value={ this.state.password }
								onChange={ this.handleChange }
								id="password"
                                type="password"
                                placeholder="Enter your password"
								className="form-control"
								required/>
						</div>
						

						<button style={{alignContent:'center'}}  className="btn btn-primary">Submit</button>
					</form>
				</div>
     </div>
         
      </div>
      :
      <div className="App container" style={{marginTop: "2%", marginBottom: "2%"}}><h1 style={{paddingBottom: "5%"}}>{this.state.succes}</h1></div>
    }
    </Card>
    );
  }
}

export default SignInForm;