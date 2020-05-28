import React, { Component } from 'react';
import './style.css';
import Card from '../../components/UI/Card';
//import { DatePicker } from 'material-ui';


class SignUPForm extends Component {
	state = {
    name: "",
	email: "",
    password:"",
    dob:Date,
    gender:"",
    address:"",
    religion:"",
    city:"",
    job:"",
    income:"",
    cast:"",
    tongue:"",
    marriage_status:"",
    message: "",
    succes:"",
    status:false,
    alert:false
	}

	handleSubmit = (event) => {
		event.preventDefault();
		
        fetch('http://localhost/Api_test/signup.php',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            dob:this.state.dob,
            gender:this.state.gender,
            address:this.state.address,
            religion:this.state.religion,
            city:this.state.city,
            job:this.state.job,
            income:this.state.income,
            cast:this.state.cast,
            tongue:this.state.tongue,
            marriage_status:this.state.marriage_status
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
					<h1 style={{paddingBottom: "5%"}}>Signup</h1>
                    :
                    <h1 style={{paddingBottom: "5%"}}>{this.state.succes}</h1>
                     }
					<form onSubmit={ this.handleSubmit }>
						
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
							<label htmlFor="password">Password:</label>
							<input
								name="password"
								value={ this.state.password }
								onChange={ this.handleChange }
								id="password"
                type="password"
                placeholder="Make your password e.g irfan123"
								className="form-control"
								required/>
						</div>

						<div className="form-group">
							<label htmlFor="dob">Date of Birth:</label>
							<input
								name="dob"
								value={ this.state.dob }
								onChange={ this.handleChange }
								id="dob"
                type="date"
                placeholder=""
								className="form-control"
								required/>
						</div>

            <div className="form-group">
							<label htmlFor="gender">Gender:</label>
							<input
								name="gender"
								value={ this.state.gender }
								onChange={ this.handleChange }
								id="gender"
                type="gender"
                placeholder="Gender e.g male/female"
								className="form-control"
								required/>
						</div>

            <div className="form-group">
							<label htmlFor="address">Address</label>
							<textarea
								name="address"
								value={ this.state.address }
								onChange={ this.handleChange }
								id="address"
                type="text"
                rows={4}
                placeholder="Write your Address here.....!"
								className="form-control"
								required/>
						</div>

            <div className="form-group">
							<label htmlFor="religion">Religion:</label>
							<input
								name="religion"
								value={ this.state.religion }
								onChange={ this.handleChange }
								id="religion"
                type="text"
                placeholder="Your religion e,g Muslim"
								className="form-control"
								required/>
						</div>

            <div className="form-group">
							<label htmlFor="city">City:</label>
							<input
								name="city"
								value={ this.state.city }
								onChange={ this.handleChange }
								id="city"
                type="text"
                placeholder="Your city e,g D.I.Khan"
								className="form-control"
								required/>
						</div>

            <div className="form-group">
							<label htmlFor="job">Job Status:</label>
							<input
								name="job"
								value={ this.state.job }
								onChange={ this.handleChange }
								id="job"
                type="text"
                placeholder="Enter job status e,g teacher"
								className="form-control"
								required/>
						</div>

            <div className="form-group">
							<label htmlFor="income">Income:</label>
							<input
								name="income"
								value={ this.state.income }
								onChange={ this.handleChange }
								id="income"
                type="number"
                placeholder="Enter monthly income e,g 30000"
								className="form-control"
								required/>
						</div>

            <div className="form-group">
							<label htmlFor="cast">cast:</label>
							<input
								name="cast"
								value={ this.state.cast }
								onChange={ this.handleChange }
								id="cast"
                type="text"
                placeholder="Your cast e,g Saraiki/Pathan"
								className="form-control"
								required/>
						</div>

            <div className="form-group">
							<label htmlFor="tongue">Mother Tongue:</label>
							<input
								name="tongue"
								value={ this.state.tongue }
								onChange={ this.handleChange }
								id="tongue"
                type="text"
                placeholder="Your tongue e,g Saraiki"
								className="form-control"
								required/>
						</div>

            <div className="form-group">
							<label htmlFor="marriage_status">Marriage Status:</label>
							<input
								name="marriage_status"
								value={ this.state.marriage_status }
								onChange={ this.handleChange }
								id="marriage_status"
                type="text"
                placeholder="Marriage Status e,g Unmarried/married"
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
    );
  }
}
export default SignUPForm;