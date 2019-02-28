import React, { Component } from 'react'
import MUtil from '../../util/mm';
import User from '../../service/user-service';
import './index.scss';

const _mm = new MUtil();
const _user = new User();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username:'',
            password:'',
            redirect: _mm.getUrlParam('redirect') || '/' //取参数的工具
        };
    }
    //当用户名和密码发生改变
    onInputChage(e){
        let inputValue = e.target.value,
            inputName =  e.target.name;
        // console.log(inputValue, inputName)
        this.setState({
            [inputName]: inputValue
        });
    }
    //当用户提交表单
    onSubmit(){
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        },
        checkResult = _user.checkLoginInfo(loginInfo);
        //验证通过
        if (checkResult.status){
            _user.login(loginInfo).then((res) => {
                console.log(this.state.redirect)
                // this.props.history.push(this.state.redirect)
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        }
        //验证不通过
        else{
            _mm.errorTips(checkResult.msg);
        }
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">欢迎登录 Happy Mall</h3>
                    </div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">用户名</label>
                                <input type="text" 
                                    name="username"
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    placeholder="请输入用户名" 
                                    onChange = {e=>this.onInputChage(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">密码</label>
                                <input type="password" 
                                    name="password"
                                    className="form-control"
                                    id="exampleInputPassword1" 
                                    placeholder="请输入密码" 
                                    onChange = {e=>this.onInputChage(e)}
                                />
                            </div>
                            <button type="submit" 
                                className="btn btn-lg btn-primary btn-block"
                                onClick={e=>{this.onSubmit(e)}}>登录</button>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Login;