/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {RegUser} from "../../actions"


import "./index.css"
class Register extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const { RegUser } = this.props;

        if(this.fname.value && this.lname.value && this.email.value && this.password.value && this.conf_password.value){
            if(this.password.value == this.conf_password.value){
                RegUser({
                    fname:this.fname.value,
                    lname:this.lname.value,
                    email:this.email.value,
                    password:this.password.value,
                    conf_password:this.conf_password.value,
                });
            }else{
                alert("Password not matching...")
                this.password.value=""
                this.conf_password.value=""
            }
        }else{
            alert("please check required fields..")
        }
    }


    render(){
        return(
            <div className="container login-container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 login-form-1">
                    <div className="row ml-1 pl-2" style={{display: this.props.error ? 'block' : 'none' }}>
                        <span className="text-danger text-center">
                            {this.props.error}
                        </span>
                    </div>
                    <h3>Sign Up</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text"  ref={elem => this.fname = elem} className="form-control" placeholder="First Name *"  />
                        </div>
                        <div className="form-group">
                            <input type="text"  ref={elem => this.lname = elem} className="form-control" placeholder="Last Name *"  />
                        </div>

                        <div className="form-group">
                            <input type="text"  ref={elem => this.email = elem} className="form-control" placeholder="Your Email *"  />
                        </div>

                        <div className="form-group">
                            <input type="password"  ref={elem => this.password = elem} className="form-control" placeholder="Password *"  />
                        </div>

                        <div className="form-group">
                            <input type="password"  ref={elem => this.conf_password = elem} className="form-control" placeholder="Confirm Password *"  />
                        </div>


                        
                        <div className="form-group">
                            <span className="col-md-6">
                                <input type="submit" className="btn btn-success" value="Submit" />
                            </span>
                            <span className="col-md-6">
                                <a href="#" className="ForgetPwd" onClick={()=>this.props.history.push('/login')}>Log In</a>
                            </span>
                        </div>
                        {/* <div className="form-group">
                            <a href="#" className="ForgetPwd">Login</a>
                        </div> */}
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({ isLoading, error }) => ({
    isLoading,
    error,
});

const mapDispatchToProps = dispatch => ({
    RegUser: (creds) => dispatch(RegUser(creds)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);
// export default Login;