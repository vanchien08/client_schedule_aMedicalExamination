import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import '../Auth/login.scss';
import { FormattedMessage } from 'react-intl';
import {handleLoginApi}  from '../../services/userService'
import { reject } from 'lodash';



class Login extends Component {
    constructor(props) {
        super(props);   //hàm tạo
        this.state={
            username:'',
            password:'',
            isShowPw:false,
            errMessage:''
        }
    }
    handleOnChangeUsername=(event)=>{
         this.setState({
            username:event.target.value
         });
        
    }
    handleOnChangepassword=(event)=>{
        this.setState({
            password:event.target.value

        });
    }
    // handleClick=()=>{
    //     console.log(this.state)
    // }
    handleShowHidepw=()=>{
        this.setState({
            isShowPw:! this.state.isShowPw
        });
    }
    handleLogin =async()=>{
       this.setState({
            errMessage:''
       })
        try {
            let data =await handleLoginApi(this.state.username,this.state.password)
            //console.log();
            console.log(data);
            if(data.data&& data.data.errCode!==0)
            {
                this.setState({
                    errMessage:data.data.message
               })
            }
            if(data.data&&data.data.errCode === 0)
            {
                this.props.userLoginSuccess(data.data.user)
                console.log("login",data.data.message)
               
            }
            
        } catch (error) {
            let data =await handleLoginApi(this.state.username,this.state.password)
            console.log(data.data);
            this.setState({
                errMessage:error.message
           })
        }
        
    }
    // handleLogin = async () => {
    //     console.log(this.state)
    //    await handleLoginApi (this.state.username, this.state.password);
    //     // try {

    //     //     let data = await handleLoginApi(this.state.username, this.state.password);
          

    //     // } catch (e) {
            
    //     //     console.log('error message', e);
    //     // }
    // }
    render() {
 
        return (
            <div className="login-backgroud">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 text-center text-login">Login</div>
                        <div className="col-12 form-group">
                        <label>Username</label>
                        <input type="text" value={this.state.username} className="form-control login-input"  placeholder='Enter your name' onChange={(event)=>this.handleOnChangeUsername(event)}></input>
                         </div>

                         <div className="col-12 form-group">
                        <label>Password</label>

                        <div className="custom-inputpw">
                        <input type={this.state.isShowPw ? 'text' :'password'} value={this.state.password} className="form-control login-input" placeholder='Enter your password' onChange={(event)=>this.handleOnChangepassword(event)}></input>
                        <span  onClick={()=>this.handleShowHidepw()}>
                        <i class={this.state.isShowPw ? "fas fa-eye-slash" :"fas fa-eye" }></i>
                       {/* <i class="fas "></i> */}
                        {/*   //this.state.isShowPw === 'chien' ? 'text' : 'password' */}

                        </span>
                        </div>
                       
                         </div>
                            <div className="col-12">
                            <div className="col-12" style={{color :'red'}}>
                                {this.state.errMessage}

                            </div>
                            <button className="btn-login"
                            onClick={()=>this.handleLogin()}>Login</button>
                            </div>
                         
                         <div className="col-12 forgot-text">
                                <span> Forgot you password?</span>
                         </div>

                         <div className="col-12 text-center">
                               <span className="orther-login">or login with</span>
                         </div>
                         <div className="col-12 social-login text-center">
                         <i class="fab fa-google-plus-g"></i>
                         <i class="fab fa-facebook"></i>

                         </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
      //  userLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
       // adminLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
