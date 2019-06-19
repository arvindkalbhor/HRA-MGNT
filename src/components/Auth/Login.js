/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {LoginUser} from "../../actions"


import "./index.css"
class Login extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const { LoginUser } = this.props;
        LoginUser({
            username:this.userref.value,
            password:this.passwordref.value
        });
        // console.log(this.userref.value);
        // console.log(this.passwordref.value);
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
                    <h3>Log In</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text"  ref={elem => this.userref = elem} className="form-control" placeholder="Your Email *"  />
                        </div>
                        <div className="form-group">
                        
                            <input type="password" ref={elem => this.passwordref = elem} className="form-control" placeholder="Your Password *" />
                        </div>
                        <div className="form-group">
                            <span style={{textAlign:"left"}}>
                                <input type="submit" className="btn btn-success" value="Login" />
                            </span>
                            <span style={{float:"right"}}>
                                <a href="#" className="ForgetPwd">Forget Password?</a>
                            </span>
                        </div>
                        {/* <div className="form-group">
                            <span className="col-md-12">
                                <input type="submit" className=" btn btn-success" value="Login" />
                            </span>
                        </div> */}
                       
                        <div className="form-group text-right">
                        Dont't have account? <a href="#" className="ForgetPwd" onClick={()=>this.props.history.push('/register')}>Sign Up</a>
                        </div>
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
    LoginUser: (creds) => dispatch(LoginUser(creds)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
// export default Login;